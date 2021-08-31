<template lang="pug">

.card

  <!-- HEADER CARD 3 sections, AVATAR, INFO, DATE -->

  .card__header
    .card__header__avatar.card__header__item
      img(src="https://avatars.githubusercontent.com/u/44930667?v=4")

    .card__header__name.card__header__item
      h2.name MayderC
      p.user @mayderc
      p.bio this profile has not bio

    .card__header__date.card__header__item
      p 2018-11-10T19:37:42Z

  <!-- BODY CARD 2 section,  -->

  .card__body

    <!--Section 1-->
    .card__body__info.card__info

      .card__body__repos.info__item
        p.text Repos
        p.info 18

      .card__body__follow.info__item
        p.text Followers
        p.info 200

      .card__body__following.info__item
        p.text Following
        p.info 10



    <!--Section 2-->
    .card__body__links
      .card__link

        .link__location.link
          img(src="../../assets/img/link.svg")
          p link

        .link__blog.link
          img(src="../../assets/img/link.svg")
          p link

      .card__link

        .link__tw.link
          img(src="../../assets/img/link.svg")
          p link

        .link__github.link
          img(src="../../assets/img/link.svg")
          p link

</template>

<script>

import api from '../../api/getData'

export default {
  name: 'GCard',
  props: {
    msg: String
  },
  data(){
    return {
      info : []
    }
  },

  created(){

    this.getInfo()

  },

  methods: {

    getInfo(user = "vuejs"){
      api.getData(user).then(res => this.info = res)
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
    display: flex
    flex-direction: column
    height: 55%

  .card__info
    width: calc( 100% )
    align-self: flex-end
    color: white
    background: #141c2f
    border-radius: 10px
    height: 45%
    display: flex

  .info__item
    width: 33%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: self-start
    padding: 40px

  .card__body__links
    height: 55%
    display: flex

  .card__link
    width: 50%
    padding: 15px
    display: flex
    flex-direction: column
    justify-content: space-around

  .link
    display: flex
    justify-content: center

  .link > img
    margin-right: 10px
    width: 15px

  .link > p
    color: white

  .info__item > .text
    color: gray
  

  

</style>