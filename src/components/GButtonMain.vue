<template lang="pug">
input(type="submit" :value="btnText").btn
</template>

<script>
export default {
  name: "GButtomMain",
  props:{
    btnText: String
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
  .btn
    position: relative
    right: 5px
    width: 60px
    height: 40px
    border-radius: 5px
    background: #0279fd
    border: none
    color: white
    font-weight: bolder

</style>