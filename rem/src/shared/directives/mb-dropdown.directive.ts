import { Directive } from 'vue'

export const mbDropdownDirective: Directive = {
  mounted(el: HTMLButtonElement): void {
    const dropdownList = el.nextSibling as HTMLUListElement
    el.addEventListener('click', () => {
      dropdownList.classList.toggle('h-0')
    })
  }
}
