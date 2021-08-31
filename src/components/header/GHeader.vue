<template lang="pug">
header.header
  .header__item.header__title
    h1 devfinder

  .header__item-header__theme
    .theme__item.light
    .theme__item.dark

  <!--   .header__item.header__controls-->
    <!-- .controls__item.primary-->
    <!-- .controls__item.secundary-->
    <!--   .controls__item.tertiary-->
</template>
<script>
export default {
  name: 'GHeader'
}
</script>
<style lang="sass">
  .header 
    width: 750px
    display: flex
    align-items: center
    justify-content: space-between

  .header__title
    color: white

  .header__controls 
    width: 90px
    height: 20px
    background: #1f2a48
    display: flex
    border-radius: 10px

    justify-content: space-around
    align-items: center
    //0279fd color boton
    //16488a textto azul
    //eaeffd text claro
  .controls__item
    width: 18px
    height: 18px
    border-radius: 50%

  
  .primary 
    background: red
  .secundary
    background: black
  .tertiary
    background: blue


  
  
</style>