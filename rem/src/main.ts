import App from 'rem/App.vue'
import router from 'rem/router'
import store from 'rem/store'
import { createApp } from 'vue'
import VueLazyloadNext from 'vue-lazyload-next'
import './index.css'
import { dropdownDirective } from 'rem/shared/directives/dropdown.directive'
import { mbDropdownDirective } from 'rem/shared/directives/mb-dropdown.directive'
import { scrolltopDirective } from 'rem/shared/directives/scrolltop.derective'
import { clickAwayDirective } from './shared/directives/click-away.directive'

const rem = createApp(App)

rem
  .directive('rem-dropdown', dropdownDirective)
  .directive('rem-mb-dropdown', mbDropdownDirective)
  .directive('rem-scrolltop', scrolltopDirective)
  .directive('rem-click-away', clickAwayDirective)
  .use(store)
  .use(router)
  .use(VueLazyloadNext)
  .mount('#app')
