import { createApp,createdefineCustomElement } from 'vue'

const VueWebComponentElement = defineCustomElement({
    data() {
        return {
            test: 'lalala'
        }
    },
    // normal Vue component options here
    props: {
        source: String
    },
    emits: {},
    template:
        `<div>hellooooo
          <span v-if="source"> from</span>
        </div>`,

    // defineCustomElement only: CSS to be injected into shadow root
    styles: [`/* inlined css */`] //this example is bad for ssr contexts because of duplicate css --> use sfc for better scoping
})

// Register the custom element.
// After registration, all `<vue-web-component>` tags
// on the page will be upgraded.
customElements.define('vue-web-component-element', VueWebComponentElement)
