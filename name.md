# Naming conventions

## 组件名大小写

### 定义组件名的方式有两种：
#### 使用 kebab-case
```
Vue.component('my-component-name', { /* ... */ })
```
当使用 **kebab-case** (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 **kebab-case**，例如 `<my-component-name>`。

#### 使用 PascalCase
`Vue.component('MyComponentName', { /* ... */ })`
当使用 **PascalCase** (驼峰式命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 `<my-component-name>` 和 `<MyComponentName>` 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板(非template中？)) 中使用时只有 **kebab-case** 是有效的。

*个人推荐只使用kebab-case*
