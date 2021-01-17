<template lang="pug">
  v-card.card(flat :class="tweet.self ? 'self' : ''" :id="id")
    v-avatar.avatar
      v-img.image(:src="tweet.image" alt="avatar")
    div.user-and-time
      span.user {{ tweet.user }}
      span.created_at {{ tweet.createdAt }}
    span.content {{ tweet.content }}
    div.status
      v-icon.favorite-icon(color="red" small @click="favorite") favorite
      span.favorite {{ tweet.favorite }}
      v-icon.share-icon(color="green" small @click="share") repeat
      span.share {{ tweet.share }}
    div.retweet-wrapper
      ReTweet(:reTweet="tweet.reTweet" v-if="tweet.reTweet")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import html2canvas from 'html2canvas';

import ReTweet from './ReTweet.vue';
import TweetType from '../types/tweet';

@Component({
  components: {
    ReTweet,
  },
})
export default class Tweet extends Vue {
  @Prop() tweet!: TweetType;

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

  get id(): string {
    return `tweet${this.tweet.createdAt.split(':').join('')}`;
  }

  favorite() {
    this.tweet.favorite += 1;
  }

  async share() {
    this.tweet.share += 1;
    // TODO: twitterへのシェア機能
    // const canvas = await html2canvas(document.getElementById(`${this.id}`)!);
    // const url =
    //   'https://twitter.com/intent/tweet?text=' +
    //   this.tweet.content +
    //   '%20%23koedame' +
    //   '&url=' +
    //   'https://tocomi-koedame.firebaseapp.com/';
    // const option = 'status=1,width=600,height=600,top=100,left=100';
    // window.open(url, 'twitter', option);
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 8px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
  min-height: 70px;
  padding: 4px;
  text-align: left;

  &.self {
    background-color: #fffff5;
  }

  .avatar {
    margin: 10px 0 0 10px;
    position: absolute;

    .image {
      border: solid 1.5px #6f95da;
    }
  }

  .user-and-time {
    font-size: 12px;
    padding: 10px 0 0 70px;

    .user {
      font-weight: bold;
    }

    .created_at {
      color: #8a8a8a;
      margin: 0 0 0 10px;
    }
  }

  .content {
    display: block;
    font-size: 13px;
    padding: 0 10px 5px 70px;
  }

  .status {
    padding: 0 0 5px 70px;

    .share-icon {
      margin: 0 0 0 10px;
    }

    .favorite,
    .share {
      color: #4a4a4a;
      font-size: 12px;
      margin: 0 0 0 5px;
    }
  }
}
</style>
