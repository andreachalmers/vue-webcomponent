<template>
  <span class="example">{{ msg }}</span>
</template>
<script>
export default {
  data () {
    return {
      msg: 'world!',
      color: 'deeppink',
    }
  }
}
</script>

<style scoped>
.example {
  color: v-bind('color');
  font-weight: bold;
}
</style>
