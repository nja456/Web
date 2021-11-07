<template>
  <div>
    <navigation class="navigation"></navigation>
    <slot class="content">hello</slot>
  </div>
</template>

<script>
const Navigation = window.httpVueLoader('../components/Navigation.vue');
module.exports = {
  name: 'BaseStructure',
  components:{
    Navigation
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .navigation {
    position: sticky;
    top:8px;
  }
</style>
