<template>
  <div>hellooooo<span v-if="source"> from</span></div>
</template>

<script>
export default {
  data() {
  return {
    test: 'lalala'
  }
},
  // normal Vue component options here
  props: {
    source: String
  },
  emits: {}
}

</script>

<style scoped>
  div {
    color: cornflowerblue;
    font-family: sans-serif;
    font-weight: bold;
  }
</style>