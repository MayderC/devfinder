<template lang="pug">
  
.switch(@click="clickTheme")
  .switch__item#btn-item

</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name : "GThemeSwitch",
  computed: {
    ...mapState(['isLight'])
  },

  methods: {
    ...mapMutations(['changeTheme']),

    clickTheme(){
      const btnCircle = document.getElementById('btn-item')

      btnCircle.classList.toggle('toggle')

      this.changeTheme()

    }

  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/sass/variables'

  .switch 
    width: 60px
    height: 25px
    background: $secundary-l
    border-radius: 10px
    display: flex
    align-items: center
    border: solid 2px $light-blue
    position: relative

  .switch__item
    background: $primary-d
    height: 22px
    width: 22px
    border-radius: 50%
    position: absolute
    transition: .2s

  .toggle 
    right: 0


</style>