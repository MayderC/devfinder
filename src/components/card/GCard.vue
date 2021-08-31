<template lang="pug">

.card

  .card__header
    .card__header__avatar.card__header__item
      img(src="https://avatars.githubusercontent.com/u/44930667?v=4")

    .card__header__name.card__header__item
      h2.name MayderC
      p.user @mayderc
      p.bio this profile has not bio
    .card__header__date.card__header__item
      p 2018-11-10T19:37:42Z

  .card__body
    .card__body__info.card__info
      .card__body__repos.info__item
        p 18
      .card__body__follow.info__item
        p 200
      .card__body__following.info__item
        p 10
    .card__body__links.card__body

</template>

<script>
export default {
  name: 'GCard',
  props: {
    msg: String
  },
  data(){
    return {
      info : []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h1
    color: white
  .card
    width: 750px
    height: 450px
    background: #1f2a48
    border-radius: 10px
    padding: 30px

  .card__header
    height: 45%
    display: flex
    color: white

  .card__header__name > .user
    padding: 20px 0
    color: #0279fd

  .card__header__name > .bio
   color: gray
  
  .card__header__item
    width: 33%
  
  .card__header__date > p
    text-align: right
    color: gray

  .card__header__avatar
    display: flex
    justify-content: center
    align-items: self-start

  .card__header__avatar > img
    width: 90px
    border-radius: 50%
    border: solid 1px black

  .card__body


  .card__info
    color: white
    background: #141c2f
    border-radius: 10px
    height: 80px

</style>