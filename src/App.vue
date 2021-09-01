<template lang="pug">

g-main

</template>

<script>
import GMain from './view/GMain.vue'
export default {
  name: 'App',
  components: {
    GMain
  }
}
</script>

<style lang="sass">
  @import './assets/sass/variables'

  body 
    margin: 0
    background: $primary-d
    min-height: 100vh
    font-family: 'Quicksand', sans-serif
    display: flex
    justify-content: center
    align-items: center
  
  h1, h2, h3, p, ul
    margin: 0
    padding: 0 

  *, *:before, *:after 
    box-sizing: border-box

</style>