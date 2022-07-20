## todos:
- install over npm vs cdn
- gulp plugin for vue sfc, or vite, webpack

- fix preview mode. only works from dist

- https://vuejscomponent.com/vue-custom-element
- https://vueshowcase.com/question/multiple-entry-points-in-vite

`<my-example>` wont work by default due to `.vue` file
unless loaded within vue context 
```js
const { loadModule } = window["vue3-sfc-loader"];

const hellovueloader = Vue.createApp({
    components: {
        'my-component': Vue.defineAsyncComponent(() => loadModule('../src/components/myComponent.vue', options)),
    },
    template: `Hello <my-component></my-component> from vue3-sfc-loader`,
});

hellovueloader.mount('#sfc');
```

Alternatively, run `npm run build` and include the index.js from webroot (in the ctp just js).
So for prd env: use the script in the respective ctp file

Otherwise during dev, run `npm run dev` which will have the latest changes and not use the built index.js

https://bestofvue.com/repo/karol-f-vue-custom-element-vuejs-integrations
```js
Vue.customElement('widget-vue', CustomWidget, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      root.shadowRoot = rootNode;
    } else {
      root.shadowRoot = document.head;
    }
    return root;
  },
});
```

## Questions ❓

- dev tools not working with web components?
- removing css from shadow dom?
- shadow dom and seo?
  - better if using slots rather than an "empty" tag?
  - https://github.com/WICG/webcomponents/issues/500
  - lit.dev

Answer: abandon project, still interesting though 😅 