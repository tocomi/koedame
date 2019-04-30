<template lang="pug">
  v-card.card(flat :class="tweet.self ? 'self' : ''")
    v-avatar.avatar
      v-img(:src="`http://domonet.jp/plus/images/post/201805/thum-20180529093519.jpg`" alt="avatar")
    div.user-and-time
      span.user {{ tweet.user }}
      span.created_at {{ tweet.createdAt }}
    span.content {{ tweet.content }}
    div.status
      v-icon.favorite-icon(color="red" small @click="favorite()") favorite
      span.favorite {{ tweet.favorite }}
      v-icon.share-icon(color="green" small @click="share()") repeat
      span.share {{ tweet.share }}
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Tweet extends Vue {

    @Prop() tweet!: Object
    
    favorite() {
      this.tweet.favorite += 1
    }

    share() {
      this.tweet.share += 1
    }
  }
</script>

<style lang="scss" scoped>
.card {
  text-align: left;
  min-height: 70px;
  border-bottom: 1px solid #EEEEEE;
  &.self {
    background-color: #FFFFF5;
  }
  .avatar {
    position: absolute;
    margin: 10px 0 0 10px;
  }
  .user-and-time {
    padding: 10px 0 0 70px;
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
    padding: 0 10px 5px 70px;
  }
  .status {
    padding: 0 0 5px 70px;
    .share-icon {
      margin: 0 0 0 10px;
    }
    .favorite, .share {
      margin: 0 0 0 5px;
      color: #4A4A4A;
      font-size: 12px;
    }
  }
}
</style>
