<template lang="pug">
  v-card.card(flat)
    v-avatar.avatar
      v-img(:src="`http://domonet.jp/plus/images/post/201805/thum-20180529093519.jpg`" alt="avatar")
    p.user {{ tweet.user }}
    p.content {{ tweet.content }}
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Tweet extends Vue {

    @Prop() tweet!: Object
    
  }
</script>

<style lang="scss" scoped>
.card {
  text-align: left;
  height: 80px;
  border-bottom: 1px solid #EEEEEE;
  .avatar {
    position: absolute;
    margin: 10px 0 0 10px;
  }
  .user {
    position: absolute;
    margin: 10px 0 0 70px;
    font-weight: bold;
  }
  .content {
    position: absolute;
    margin: 30px 0 0 70px;
  }
}
</style>
