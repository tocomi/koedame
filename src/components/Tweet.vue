<template lang="pug">
  v-card.tweet-card
    v-avatar.tweet-avatar(:size="avatarSize")
      v-img(:src="`http://domonet.jp/plus/images/post/201805/thum-20180529093519.jpg`" alt="avatar")
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
</style>
