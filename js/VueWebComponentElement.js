import { defineCustomElement } from 'vue'

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
    template: `<div>hellooooo<span v-if="source"> from</span></div>`,

    // defineCustomElement only: CSS to be injected into shadow root
    styles: [`/* inlined css */`]
})

// Register the custom element.
// After registration, all `<vue-web-component>` tags
// on the page will be upgraded.
customElements.define('vue-web-component', VueWebComponentElement)

// You can also programmatically instantiate the element:
// (can only be done after registration)
document.body.appendChild(
    new VueWebComponentElement({
        // initial props (optional)
        source: "appendChild"
    })
)