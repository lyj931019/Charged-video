import {Row, Col,Container} from '@/common/grid';
import Btn from '@/common/button';
import Icon from '@/common/icon';
import Lwitch from '@/common/lwitch';
import Radio from '@/common/radio';
import Message from '@/common/message';
import Lnotification from '@/common/notification';
import App from './App'
import TodoList from '@/components/todo/todo-list.vue'
import TodoItem from '@/components/todo/todo-item.vue'
import StoreTest from '@/components/store-test'

import Pages from './pages'
import UseCompontents from './components'
export default {
  App,
  Row,Col,Container,
  Btn,
  Icon,
  Lwitch,
  Radio,
  Message,
  Lnotification,
  TodoList,
  TodoItem,
  StoreTest,
  ...Pages,...UseCompontents
}
// const install = function(Vue, opts = {}) {
//   if (install.installed) return;
//   Vue.prototype.$Message = Message;
// };
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }
