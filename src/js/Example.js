import {defineCustomElement, defineSSRCustomElement} from 'vue'
//import Example from '../components/Example.ce.vue'
import Example from '../components/Example.vue'

console.log(Example.styles) // ['/* css content */']

// register
customElements.define('my-example-with-sfc', defineCustomElement(Example))

//could be merged into one file? sfc?