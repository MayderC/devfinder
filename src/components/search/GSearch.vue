<template lang="pug">
.search(:class="[isLight? 'light-s' : 'dark-s']")
  img(src="../../assets/img/lupa.svg").icon

  input(
    type="text" 
    :class="[isLight? 'light-txt' : 'dark-txt']" 
    v-model="devName" 
    @keyup.enter="getInfo(devName)" 
    placeholder="Search GitHub username.." 
    autofocus).input

  g-buttom-main(:btnText="propButtom" @click="getInfo(devName)")
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import GButtomMain from '../GButtonMain.vue'
export default {
  name: 'GSearch',
  components: {GButtomMain},
  data() {
    return {
      propButtom : "Search",

      devName : ""

    }
  },
  methods: {

    ...mapMutations(['getInfo'])

  },
  computed: {
    ...mapState(['isLight'])
  }
}
</script>

<style lang="sass" scoped>

  @import './search'

  
</style>