import { Directive, DirectiveBinding } from 'vue'

export const clickAwayDirective: Directive = {
  beforeMount: (el, binding: DirectiveBinding) => {
    el.clickOutsideEvent = (event: any) => {
      if (!(el == event.target || el.contains(event.target))) {
        binding?.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
