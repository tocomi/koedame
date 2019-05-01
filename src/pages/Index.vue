<template lang="pug">
  v-container
    v-layout(text-xs-center wrap)
      v-flex(xs12)
        v-img(
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        )

      v-flex(xs12)
        v-btn(@click="tweetRandom()" color="info") Random Add
        br
        Post(@postTweet="post")

      v-flex(xs12)
        Tweet(v-for="tweet in tweets" :tweet="tweet" :key="tweet.content + tweet.createdAt")
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"
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
        this.postTweet(this.makeTweet('tutorial', message, false))
      })
    }

    post(user: string, content: string, self: boolean): void {
      const tweet = this.makeTweet(user, content, self)
      this.postTweet(tweet)
      this.setRetweet(tweet)
      this.deleteOldData()
    }

    private setRetweet(reTweet: any): void {
      let loopCount = 0
      const timerId: number = setInterval(() => {
        this.postTweet(this.makeTweet('retweet', 'リツイートです', false, reTweet))
        this.deleteOldData()

        loopCount++
        if (loopCount > 3) {
          clearInterval(timerId)
        }
      }, 3000)
    }

    private makeTweet(user: string, content: string, self: boolean, reTweet: any = null): Object {
      return {
        user: user,
        image: `http://domonet.jp/plus/images/post/201805/thum-20180529093519.jpg`,
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
      if (this.tweets.length > 10) {
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
        this.postTweet(this.makeTweet('hoge', 'fuga', false))
        this.deleteOldData()
      }, 3000)
    }

  }
</script>

<style lang="scss" scoped>
</style>
