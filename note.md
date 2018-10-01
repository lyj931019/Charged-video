# 计算属性
与定义为一个方法，实现的结果相同
## 不同
+ 计算属性是基于它们的依赖进行缓存的
  * 计算属性只有在它的相关依赖发生改变时才会重新求值
  * message 未发生改变,多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数
  * 如下例，变量message没有发生改变，reversedMessage不会重新计算
+ 每当触发重新渲染时，调用方法将总会再次执行函数
## 例：
``` 
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
``` 
``` 
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
``` 
## 计算属性的 setter
计算属性默认只有 getter ，不过在需要时也可以提供一个 setter ：
```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。

# 侦听器
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
```
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
```
```
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为判定用户停止输入等待的毫秒数
      500
    )
  }
})
</script>
```
# :class

## 对象语法
可以传给 v-bind:class 一个对象，以动态地切换 class：
```
<div v-bind:class="{ active: isActive }"></div>
```
上面的语法表示 active 这个 class 存在与否将取决于数据属性 isActive 的 truthiness。

可以在对象中传入更多属性来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 属性共存。当有如下模板:
```
data: {
  isActive: true,
  hasError: false
}
```
和如下 data：
```
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```
结果渲染为：
```
<div class="static active"></div>
```
当 **isActive** 或者 **hasError** 变化时，class 列表将相应地更新。例如，如果 hasError 的值为 true，class 列表将变为 "static active text-danger"

### 绑定的数据对象不必内联定义在模板里：
```
<div v-bind:class="classObject"></div>
```
```
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```
也可以在这里绑定一个返回对象的 **计算属性**
```
<div v-bind:class="classObject"></div>
```
```
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```
## 数组语法
可以把一个数组传给 v-bind:class，以应用一个 class 列表：
```
<div v-bind:class="[activeClass, errorClass]"></div>
```
```
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
渲染为：
```
<div class="active text-danger"></div>
```
可以用 **三元表达式**，根据条件切换列表中的 class：
```
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```
这样写将始终添加 errorClass，但是只有在 isActive 是 truthy[1] 时才添加 activeClass。

不过，当有多个条件 class 时这样写有些繁琐。所以在 **数组语法** 中也可以使用 **对象语法**：
```
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```
## 用在组件上
当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的**根元素**上面。这个元素上已经存在的类**不会被覆盖**。

例如，声明了这个组件：
```
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
```
然后在使用它的时候添加一些 class：
```
<my-component class="baz boo"></my-component>
```
HTML 将被渲染为:
```
<p class="foo bar baz boo">Hi</p>
```
对于带数据绑定 class 也**同样适用**：
```
<my-component v-bind:class="{ active: isActive }"></my-component>
```
当 **isActive** 为 **truthy**时，HTML 将被渲染成为：
```
<p class="foo bar active">Hi</p>
```
*(truthy 不是 true，详见 MDN 的解释。)*

# :style

## 对象语法
**v-bind:style** 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用**驼峰式** (camelCase) 或**短横线分隔** (kebab-case，记得用**单引号**括起来) 来命名：
```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
```
data: {
  activeColor: 'red',
  fontSize: 30
}
```
直接绑定到一个**样式对象**通常更好，这会让模板更清晰：
```
<div v-bind:style="styleObject"></div>
```
```
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```
同样的，对象语法常常结合返回对象的**计算属性**使用。

## 数组语法
**v-bind:style** 的数组语法可以将多个样式对象应用到同一个元素上：
``` 
<div v-bind:style="[baseStyles, overridingStyles]"></div>
``` 

## 自动添加前缀
当 **v-bind:style** 使用需要添加 **浏览器引擎前缀** 的 CSS 属性时，如 **transform**，Vue.js 会自动侦测并添加相应的前缀。

## 多重值
常用于提供多个带前缀的值，只会渲染数组中最后一个被浏览器支持的值
``` 
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
``` 

# 条件渲染

## 在 `<template>` 元素上使用 v-if 条件渲染分组
可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 `<template>` 元素

## v-else
v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。

## 用 key 管理可复用的元素
Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染
``` 
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
``` 
那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，`<input>` 不会被替换掉——仅仅是替换了它的 placeholder。<br/>  

Vue 提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可：
```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
现在，每次切换时，输入框都将被重新渲染。<br/>  
<font style='color:#de3d3e;'>**注意**</font>：`<label>` 元素仍然会被高效地复用，因为它们没有添加 key 属性<br/>

## v-show
用法大致与v-if一样,
```
<h1 v-show="ok">Hello!</h1>
```
不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性**display** 。<br/>

## v-if vs v-show

v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。<br/><br/>
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。<br/><br/>
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。<br/><br/>
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。<br/><br/>

## v-if 与 v-for 一起使用

当 v-if 与 v-for 一起使用时，**v-for** 具有比 v-if 更高的优先级。


# 列表渲染

## 用 v-for 把一个数组对应为一组元素
v-for 指令需要使用 item in items 形式的特殊语法，*（结果与 for-of 类似）*
```
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```
在 v-for 块中，我们拥有对父作用域属性的完全访问权限。<br>
v-for 还支持一个**可选**的*第二个参数*为**当前项的索引**。
```
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```
```
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
结果：
> Parent - 0 - Foo <br>
> Parent - 1 - Bar

### 也可以用 v-for 通过一个对象的属性来迭代
#### 也可以提供第二个的参数为键名：
```
<div v-for="(value, key) in object">
  {{ key }}: {{ value }}
</div>
```
#### 第三个参数为索引：
```
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>
```
<font style='color:#de3d3e;'>**注意**</font>：在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。

### key
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的**顺序**被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
这个默认的模式是高效的，但是只适用于**不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。
为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。**理想的 key 值是每项都有的且唯一的 id**。需要用 v-bind 来绑定动态值 
```
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

## 数组更新检测

### 变异方法

Vue 包含一组观察数组的变异方法，会改变被这些方法调用的原始数组,所以它们也将会触发视图更新。这些方法如下：
* push()
* pop()
* shift()
* unshift()
* splice()
* sort()
* reverse()

### 替换数组
非变异 (non-mutating method) 方法，例如：filter(), concat() 和 slice() 。这些不会改变原始数组，但**总是返回一个新数组**。<br/>
当使用非变异方法时，可以用新数组替换旧数组
### 提示：
你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

### 注意事项
由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
1. 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
2. 当你修改数组的长度时，例如：vm.items.length = newLength
举个例子：
```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的
```
为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：
```
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
```
```
// Array.prototype.splice // 替换
vm.items.splice(indexOfItem, 1, newValue)
```
也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
```
vm.$set(vm.items, indexOfItem, newValue)
```
为了解决第二类问题，你可以使用 splice：
```
vm.items.splice(newLength)
```
## 对象更改检测注意事项
Vue 不能检测对象**属性**的添加或删除：
```
var vm = new Vue({
  data: {
    a: 1
  }
})
// `vm.a` 现在是响应式的

vm.b = 2
// `vm.b` 不是响应式的
```
对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。但是，可以使用 **Vue.set(object, key, value)** 方法向嵌套对象添加响应式属性。例如，对于：
```
var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})
```
你可以添加一个新的 age 属性到嵌套的 userProfile 对象：
```
Vue.set(vm.userProfile, 'age', 27)
```
还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名：
```
vm.$set(vm.userProfile, 'age', 27)
```
有时可能需要为已有对象赋予*多个*新属性，比如使用 **Object.assign()** 或 _.extend()。在这种情况下，你应该用两个对象的属性创建一个**新**的对象。所以，如果你想添加新的响应式属性，不要像这样：
```
Object.assign(vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```
**应该这样做**：
```
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

## 显示过滤/排序结果
有时，我们想要显示一个数组的**过滤**或**排序** <font style='color:#de3d3e;'>**副本**</font>，而**不实际改变或重置**原始数据。在这种情况下，可以创建返回过滤或排序数组的计算属性。

例如：
```
<li v-for="n in evenNumbers">{{ n }}</li>
```
```
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```
在计算属性不适用的情况下 *(例如，在嵌套 **v-for** 循环中)* 你可以使用一个 method 方法：
```
<li v-for="n in even(numbers)">{{ n }}</li>
```
```
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```
## 一段取值范围的 v-for
v-for 也可以取整数。在这种情况下，它将重复多次模板。
```
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```
结果：
> 1 2 3 4 5 6 7 8 9 10

## v-for on a `<template>`
类似于 v-if，你也可以利用带有 **v-for** 的 `<template>` 渲染多个元素。比如：
```
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider"></li>
  </template>
</ul>
```
## v-for with v-if
当它们处于同一节点，**v-for** 的<font style='color:#de3d3e;'>优先级</font>比 **v-if** <font style='color:#de3d3e;'>更高</font>，这意味着 **v-if** 将**分别** <font style='color:#de3d3e;'>**重复**</font> 运行于每个 **v-for** 循环中。当你想为仅有的一些项渲染节点时，这种优先级的机制会十分有用，如下：
```
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```
上面的代码只传递了未完成的 todos。

而如果你的目的是有条件地跳过循环的执行，那么可以将 **v-if** 置于外层元素 (或 `<template>`)上。如：
```
<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
```

## 一个组件的 v-for
在自定义组件里，可以像任何普通元素一样用 v-for 。
```
<my-component v-for="item in items" :key="item.id"></my-component>
```
2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是**必须**的


然而，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要用 props ：
```
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>
```
不自动将 item 注入到组件里的原因是，这会使得组件与 v-for 的运作紧密耦合。明确组件数据的来源能够使组件在其他场合重复使用。

<br>
下面是一个简单的 todo list 的完整例子：

```
<div id="todo-list-example">
  <input
    v-model="newTodoText"
    v-on:keyup.enter="addNewTodo"
    placeholder="Add a todo"
  >
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
</div>
```
<font style='color:#de3d3e;'>**注意**</font>：
这里的 is="todo-item" 属性。这种做法在使用 DOM 模板时是十分必要的，因为在 `<ul>` 元素内只有 `<li>` 元素会被看作有效内容。这样做实现的效果与 `<todo-item>` 相同，但是可以避开一些潜在的浏览器解析错误。查看 **DOM** **模板解析**说明 来了解更多信息。
```
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
```

# 事件处理
## 事件处理方法
示例：
```
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
  example2.greet() // => 'Hello Vue.js!'
```

## 内联处理器中的方法

```
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
```

可以用特殊变量 $event 访问原始的 DOM 事件：
```
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
  }
}
```

## 事件修饰符

* .stop    

 阻止单击事件继续传播
* .prevent   

提交事件不再重载页面
* .capture

添加事件监听器时使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
* .self

只当在 event.target 是当前元素自身时触发处理函数,即事件不是从内部元素触发的
* .once

事件将只会触发一次,不像其它只能对原生的 DOM 事件起作用的修饰符，.once 修饰符还能被用到自定义的组件事件上
* .passive
```
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

**注意**
1.  使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
2.  不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。


## 按键修饰符
```
<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
<input v-on:keyup.13="submit">
```
记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
* .enter
* .tab
* .delete (捕获“删除”和“退格”键)
* .esc
* .space
* .up
* .down
* .left
* .right

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
```
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

## 自动匹配按键修饰符
可直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符：
