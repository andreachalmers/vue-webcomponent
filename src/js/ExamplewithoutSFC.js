import { defineCustomElement, createApp } from 'vue'

const JustJSExample = defineCustomElement({
    data() {
    },
    template: `
      <div>{{ message }}
          <h2>yay a heading!</h2>
          <small>[This is an example web component without SFC just JS]</small>
      </div>
    `,

    // defineCustomElement only: CSS to be injected into shadow root
    styles: [`color: deeppink`] //this example is bad for ssr contexts because of duplicate css --> use sfc for better scoping
})

console.log(JustJSExample.styles) // ['/* css content */']

// register
customElements.define('my-example', defineCustomElement(JustJSExample))
//createApp().mount('#app');