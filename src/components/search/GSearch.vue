<template lang="pug">
.search(:class="[$store.state.isLight? 'light-s' : 'dark-s']")
  img(src="../../assets/img/lupa.svg").icon
  input(type="text" @keyup.enter="show" placeholder="Search GitHub username.." autofocus).input
  g-buttom-main(:btnText="propButtom" @click="show")

</template>

<script>
import GButtomMain from '../GButtonMain.vue'
export default {
  name: 'GSearch',
  components: {GButtomMain},
  data() {
    return {
      propButtom : "Search"
    }
  },
  methods: {
    show(){
      console.log("click")
    }
  }
}
</script>

<style lang="sass" scoped>

  @import '../../assets/sass/theme'

  .search
    height: 50px
    border-radius: 10px
    display: flex
    justify-content: space-between
    position: relative
    align-items: center
    width: 750px
    margin: 20px  0

  .input 
    width: 100%
    border-radius: 10px
    height: 100%
    background: #0000
    border: none
    outline: none
    padding: 0 20px
    color: white
    font-size: 20px
    position: relative
    font-family: 'Quicksand', sans-serif

  .icon
    position: relative
    width: 25px
    margin-left: 15px

  
</style>