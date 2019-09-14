<template lang="pug">
  v-container#container
    v-layout(text-xs-center wrap)
      v-flex(xs12)
        h1#title koedame
      v-flex(xs12)
        Post(@postTweet="post")
      v-flex(xs12)
        Tweet(v-for="tweet in tweets" :tweet="tweet" :key="tweet.content + tweet.createdAt")
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"
  import * as users from '../lib/Users'
  import * as tweets from '../lib/Tweets'
  import Tweet from '../components/Tweet.vue'
  import Post from '../components/Post.vue'
  
  @Component({
    components: {
      Tweet,
      Post,
    },
  })
  export default class Index extends Vue {

    tweets: Array<Object> = []
    initialMessage: Array<string> = [
      '勝手に周りが盛り上がってくれます',
      'ネットには公開されないので何でも書いて大丈夫です',
      '適当に書き込みましょう',
    ]

    mounted(): void {
      this.initialMessage.forEach((message) => {
        this.postTweet(this.makeTweet('tutorial', require('../assets/icon/napoleon.jpg'), message, false))
      })
    }

    post(user: string, image: any, content: string, self: boolean): void {
      const tweet = this.makeTweet(user, image, content, self)
      this.postTweet(tweet)
      this.setRetweet(tweet)
      this.deleteOldData()
    }

    private setRetweet(reTweet: any): void {
      let loopCount = 0
      const timerId: number = setInterval(() => {
        const user = users.getRandomUser()
        this.postTweet(this.makeTweet(user.name, user.image, tweets.getRandomTweet(), false, reTweet))
        this.deleteOldData()

        loopCount++
        if (loopCount >= 10) {
          clearInterval(timerId)
        }
      }, 3000)
    }

    private makeTweet(user: string, image: any, content: string, self: boolean, reTweet: any = null): Object {
      return {
        user: user,
        image: image,
        content: content,
        favorite: 0,
        share: 0,
        reTweet: reTweet,
        self: self,
        createdAt: this.makeCurrentTimeString(),
      }
    }

    private postTweet(tweet: Object): void {
      this.tweets.unshift(tweet)
    }

    private deleteOldData(): void {
      if (this.tweets.length > 50) {
        this.tweets.pop()
      }
    }

    private makeCurrentTimeString(): string {
      const current: Date = new Date()
      return this.addZeroForDate(current.getHours()) + ':' + this.addZeroForDate(current.getMinutes()) + ':' + this.addZeroForDate(current.getSeconds())
    }

    private addZeroForDate(number: number): string{
      return ('00' + number).slice(-2)
    }

    tweetRandom(): void {
      setInterval(() => {
        this.postTweet(this.makeTweet('hoge', require('../assets/icon/naoki.jpg'), 'fuga', false))
        this.deleteOldData()
      }, 3000)
    }

  }
</script>

<style lang="scss" scoped>
#container {
  max-width: 600px;
  #title {
    margin: 8px 0;
    font-family: 'Comfortaa', cursive;
    font-size: 56px;
    color: #1DA1F2;
  }
}
</style>
