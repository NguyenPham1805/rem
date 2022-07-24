import { Directive, DirectiveBinding } from 'vue'

export const dropdownDirective: Directive = {
  mounted(el: HTMLLIElement, bind: DirectiveBinding<boolean>): void {
    const element: HTMLUListElement = el.children[1] as HTMLUListElement
    if (!bind.value) {
      return
    }
    el.addEventListener('mousemove', () => {
      element.classList.remove('opacity-0', 'pointer-events-none')
      element.classList.add('opacity-1', 'pointer-events-auto')
    })
    el.addEventListener('mouseleave', () => {
      element.classList.remove('opacity-1', 'pointer-events-auto')
      element.classList.add('opacity-0', 'pointer-events-none')
    })
  }
}
