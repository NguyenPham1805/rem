import { Directive } from 'vue'

export const scrolltopDirective: Directive = {
  mounted(el: HTMLElement): void {
    const element: HTMLElement = el
    let lastScrollTop = 0

    const scrollToggle = (): void => {
      if (window.pageYOffset >= 55) {
        let scrollTop = window.pageYOffset
        if (scrollTop >= lastScrollTop) {
          element.style.top = '-56px'
        } else {
          element.style.top = '0'
        }
        lastScrollTop = window.pageYOffset
      }
    }

    const scrollTop = (): void => {
      if (window.pageYOffset > 0) {
        element.classList.remove('bg-transparent')
        element.classList.add('drop-shadow-lg', 'bg-rem-dark')
      } else {
        element.classList.remove('drop-shadow-lg', 'bg-rem-dark')
        element.classList.add('bg-transparent')
      }
    }

    window.addEventListener('scroll', () => {
      scrollToggle()
      scrollTop()
    })
  }
}
