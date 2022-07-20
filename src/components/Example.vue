<template>
  <div>{{ message }}
    <h2 @click="changeText">{{ text }}</h2>
    <small>[This is an example web component using an imported SFC]</small>
  </div>
</template>

<script>
export default {
  name: 'Example',
  text:'',
  data() {
    return {
      message: 'this is an example component from vite',
      text: 'yay this some text'
    }
  },
  methods: {
    changeText() {
      this.text = 'changed';
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "Example.scss";
  div  {
    border: 2px solid deeppink;
    padding: 8px 16px;

    small {
      color: black;
    }
  }
</style>