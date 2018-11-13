import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './common/lang/zh'
import en from './common/lang/en'


Vue.use(VueI18n)

const messages = {
  en: Object.assign(en),
  zh: Object.assign(zh)
}


const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  // locale: 'en',
  messages
})


export default i18n
