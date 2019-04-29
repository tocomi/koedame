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

      v-flex(mb-4)
        v-btn(@click="onClick()" color="info") Random Add

      v-flex(mb-5 xs12)
        Tweet(v-for="tweet in tweets" :tweet="tweet" :key="tweet.content")
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"
  import Tweet from '../components/Tweet.vue'
  
  @Component({
    components: {
      Tweet,
    },
  })
  export default class Index extends Vue {

    tweets: Array<Object> = [
      {
        user: '夏目漱石',
        content: '今度1000円札に載ることになった！！',
      },
      {
        user: '福沢諭吉',
        content: 'ちょっくら大学作ってくる',
      }
    ]

    onClick(): void {
      setInterval(() => {
        this.tweets.unshift(
          {
            user: 'hoge',
            content: 'fuga',
          }
        )
        if (this.tweets.length > 3) {
          this.tweets.pop()
        }
      }, 2000)
    }
  }
</script>

<style lang="scss" scoped>
</style>
