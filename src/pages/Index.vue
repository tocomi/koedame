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
        Post(@postTweet="postTweet")

      v-flex(xs12)
        Tweet(v-for="tweet in tweets" :tweet="tweet" :key="tweet.createdAt")
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

    tweets: Array<Object> = [
      {
        user: 'tutorial',
        content: '適当に書き込みましょう',
        favorite: 22456,
        share: 12980,
        self: false,
        createdAt: '21:05:12',
      },
      {
        user: 'tutorial',
        content: 'ネットには公開されないので何でも書いて大丈夫です',
        favorite: 1423,
        share: 643,
        self: false,
        createdAt: '21:04:52',
      },
      {
        user: 'tutorial',
        content: '勝手に周りが盛り上がってくれます',
        favorite: 0,
        share: 0,
        self: false,
        createdAt: '21:03:55',
      }
    ]

    postTweet(user: string, content: string, self: boolean): void {
      this.tweets.unshift(
        {
          user: user,
          content: content,
          favorite: 0,
          share: 0,
          self: self,
          createdAt: this.makeCurrentTimeString(),
        }
      )
      this.deleteOldData()
    }

    private deleteOldData(): void {
      if (this.tweets.length > 5) {
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
        this.postTweet('hoge', 'fuga', false)
        this.deleteOldData()
      }, 3000)
    }

  }
</script>

<style lang="scss" scoped>
</style>
