<template lang="pug">
  v-card.tweet-card
    p {{ tweet.user }}
    p {{ tweet.content }}
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  
  @Component
  export default class Tweet extends Vue {

    @Prop() tweet!: Object
    
  }
</script>

<style lang="scss" scoped>
.tweet-card {
}
</style>
