<template lang="pug">
  v-card.card(flat)
    v-avatar.avatar
      v-img(:src="`http://domonet.jp/plus/images/post/201805/thum-20180529093519.jpg`" alt="avatar")
    div.user-and-time
      span.user {{ tweet.user }}
      span.created_at {{ tweet.createdAt }}
    span.content {{ tweet.content }}
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
  min-height: 70px;
  border-bottom: 1px solid #EEEEEE;
  .avatar {
    position: absolute;
    margin: 10px 0 0 10px;
  }
  .user-and-time {
    padding: 10px 0 0 70px;
    font-size: 12px;
    .user {
      font-weight: bold;
    }
    .created_at {
      margin: 0 0 0 10px;
      color: #8A8A8A;
    }
  }
  .content {
    display: block;
    padding: 0 10px 10px 70px;
    font-size: 13px;
  }
}
</style>
