<template>
  <div>{{ message }}</div>
  <small>also using special ce format</small>
</template>
<script>
export default {
  name: 'Example CE',
  data() {
    return {
      message: 'this is an example component from vite WITHOUT IMPORTED SCSS FILE'
    }
  }
}
</script>
<style>
  div {
    color: purple;
    font-weight: bold;
    font-family: sans-serif;
  }
</style>