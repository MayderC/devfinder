<template lang="pug">
g-header
g-search
g-card
</template>
<script>
import GHeader from '../components/header/GHeader.vue'
import GCard from '../components/card/GCard.vue'
import GSearch from '../components/search/GSearch.vue'
export default {
  name: "GMain",
  components: {
    GHeader,
    GCard,
    GSearch,
  }
}
</script>

<style lang="sass" scoped>

</style>