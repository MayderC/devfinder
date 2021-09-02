<template lang="pug">

.card

  <!-- HEADER CARD 3 sections, AVATAR, INFO, DATE -->

  .card__header
    .card__header__avatar.card__header__item
      img(src="https://avatars.githubusercontent.com/u/44930667?v=4")

    .card__header__name.card__header__item
      h2.name {{info.name}}
      p.user {{info.login}}
      p.bio {{info.bio}}

    .card__header__date.card__header__item
      p {{info.created_at}}

  <!-- BODY CARD 2 section,  -->

  .card__body

    <!--Section 1-->
    .card__body__info.card__info

      .card__body__repos.info__item
        p.text Repos
        p.info {{info.public_repos}}

      .card__body__follow.info__item
        p.text Followers
        p.info {{info.followers}}

      .card__body__following.info__item
        p.text Following
        p.info {{info.following}}



    <!--Section 2-->
    .card__body__links
      .card__link

        .link__location.link
          img(src="../../assets/img/link.svg")
          p(v-if="info.location" v-text="info.location")
          p(v-else style="color: gray; text-decoration: none;") not available  

        .link__blog.link
          img(src="../../assets/img/link.svg")
          p(v-if="info.blog" v-text="info.blog")
          p(v-else style="color: gray; text-decoration: none;") not available          

      .card__link

        .link__tw.link
          img(src="../../assets/img/link.svg")
          p(v-if="info.twitter_username" v-text="info.twitter_username")
          p(v-else style="color: gray; text-decoration: none;") not available
          
        .link__github.link
          img(src="../../assets/img/link.svg")
          p {{info.html_url}}

</template>

<script>

import api from '../../api/getData'

export default {
  name: 'GCard',
  data(){
    return {
      info : []
    }
  },
  created(){
    this.getInfo()
  },
  methods: {
    getInfo(user = "mayderc"){
      api.getData(user).then(res => this.info = res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

  @import './card'
  

</style>