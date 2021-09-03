<template lang="pug">

.card(:class="backgroundSecundary")
  <!-- HEADER CARD 3 sections, AVATAR, INFO, DATE -->

  .card__header
    .card__header__avatar
      img(:src="info.avatar_url || imgDefault")

    .card__header__info
      .card__header__name.card__info__item
        h2(:class="colorTheme").name {{info.name}}
        p.user {{info.login}}

      .card__header__date.card__info__item
        p {{info.created_at}}

      .card__header__bio.card__info__item
        p.bio {{info.bio}}



  <!-- BODY CARD 2 section,  -->

  .card__body

    <!--Section 1-->
    .card__body__info.card__info(:class="backgroundPrimary")

      .card__body__repos.info__item(:class="colorTheme")
        p.text Repos
        p.info {{info.public_repos}}

      .card__body__follow.info__item(:class="colorTheme")
        p.text Followers
        p.info {{info.followers}}

      .card__body__following.info__item(:class="colorTheme")
        p.text Following
        p.info {{info.following}}



    <!--Section 2-->
    .card__body__links(:class="colorTheme")
      .card__link
        .link__location.link
          icon-location
          p(v-if="info.location" v-text="info.location")
          p(v-else style="color: gray; text-decoration: none;") not available  

        .link__blog.link
          icon-link
          p(v-if="info.blog" v-text="info.blog")
          p(v-else style="color: gray; text-decoration: none;") not available 


      .card__link
        .link__tw.link
          icon-twitter
          p(v-if="info.twitter_username" v-text="info.twitter_username")
          p(v-else style="color: gray; text-decoration: none;") not available
          
        .link__github.link
          icon-github
          p {{info.html_url}}

</template>

<script>

//import api from '../../api/getData'
/**icons */
import IconTwitter from '../icons/IconTwitter.vue'
import IconLocation from '../icons/IconLocation.vue'
import IconGithub from '../icons/IconGithub.vue'
import IconLink from '../icons/IconLink.vue'
import {mapState} from 'vuex'

export default {
  name: 'GCard',
  data(){
    return {
      imgDefault : "https://avatars.githubusercontent.com/u/88066168?v=4"
    }
  },
  components:{
    IconTwitter,
    IconLocation,
    IconGithub,
    IconLink
  },
  created(){
    
  },
  methods: {
  },
  computed: {
    ...mapState(['isLight', 'info']),
    colorTheme(){
      return [this.isLight? 'light-txt' : 'dark-txt']
    },
    backgroundPrimary(){
      return [this.isLight? 'light-p' : 'dark-p']
    },
    backgroundSecundary(){
      return [this.isLight? 'light-s' : 'dark-s']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import '../../assets/sass/theme'
  @import './card'
  

</style>