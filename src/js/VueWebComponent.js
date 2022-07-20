// WITHOUT BUILD STEP
import "http-vue-loader";
import "vue3-sfc-loader/dist/vue3-sfc-loader.esm.js";
import { defineCustomElement } from 'vue'
import VueWebComponent from "../components/VueWebComponent.vue";

const VueWebComponentElement = defineCustomElement();

// Register the custom element.
// After registration, all `<vue-web-component>` tags
// on the page will be upgraded.
customElements.define('vue-web-component', VueWebComponentElement)

const options = {

    moduleCache: {
        vue: Vue,
    },

    getFile(url) {
        return fetch(url).then(response => response.ok ? response.text() : Promise.reject(response));
    },

    addStyle(styleStr) {
        const style = document.createElement('style');
        style.textContent = styleStr;
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },

    log(type, ...args) {
        console.log(type, ...args);
    }
}

const { loadModule } = window["vue3-sfc-loader"];

const hellovueloader = Vue.createApp({
    components: {
        'vue-web-component': Vue.defineAsyncComponent(() => loadModule(VueWebComponent, options)),
    },
    template: `<vue-web-component></vue-web-component>`,
});

hellovueloader.mount('#test');
