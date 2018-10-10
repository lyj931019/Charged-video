import App from './App.vue'

import Pages from './pages'
import UseCompontents from './components'
export default {
  App,
  ...Pages,...UseCompontents
}
// const install = function(Vue, opts = {}) {
//   if (install.installed) return;
//   Vue.prototype.$Message = Message;
// };
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }
