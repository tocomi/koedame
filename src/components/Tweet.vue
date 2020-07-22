<template lang="pug">
  v-card.card(flat :class="tweet.self ? 'self' : ''")
    v-avatar.avatar
      v-img.image(:src="tweet.image" alt="avatar")
    div.user-and-time
      span.user {{ tweet.user }}
      span.created_at {{ tweet.createdAt }}
    span.content {{ tweet.content }}
    div.status
      v-icon.favorite-icon(color="red" small @click="favorite()") favorite
      span.favorite {{ tweet.favorite }}
      v-icon.share-icon(color="green" small @click="share()") repeat
      span.share {{ tweet.share }}
    ReTweet(:reTweet="tweet.reTweet" v-if="tweet.reTweet")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ReTweet from "./ReTweet.vue";

@Component({
  components: {
    ReTweet
  }
})
export default class Tweet extends Vue {
  @Prop() tweet!: any;

  created() {
    let loopCount = 0;
    const timerId: number = setInterval(() => {
      if (!this.tweet.self) {
        return;
      }

      this.tweet.favorite += Math.floor(Math.random() * Math.floor(30));
      this.tweet.share += Math.floor(Math.random() * Math.floor(15));

      loopCount++;
      if (loopCount > 300) {
        clearInterval(timerId);
      }
    }, 100);
  }

  favorite() {
    this.tweet.favorite += 1;
  }

  share() {
    this.tweet.share += 1;
  }
}
</script>

<style lang="scss" scoped>
.card {
  text-align: left;
  min-height: 70px;
  border-bottom: 1px solid #eeeeee;
  &.self {
    background-color: #fffff5;
  }
  .avatar {
    position: absolute;
    margin: 10px 0 0 10px;
    .image {
      border: solid 1.5px #6f95da;
    }
  }
  .user-and-time {
    padding: 10px 0 0 70px;
    .user {
      font-weight: bold;
    }
    .created_at {
      margin: 0 0 0 10px;
      color: #8a8a8a;
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
    .favorite,
    .share {
      margin: 0 0 0 5px;
      color: #4a4a4a;
      font-size: 12px;
    }
  }
}
</style>
