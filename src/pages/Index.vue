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
        v-btn(@click="onClick()" color="info") Random Add

      v-flex(xs12)
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
        favorite: 22456,
        share: 12980,
        self: false,
        createdAt: '21:05',
      },
      {
        user: '福沢諭吉',
        content: 'ちょっくら大学作ってくる',
        favorite: 1423,
        share: 643,
        self: false,
        createdAt: '21:04',
      },
      {
        user: '卑弥呼',
        content: 'うぇｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ',
        favorite: 0,
        share: 0,
        self: true,
        createdAt: '21:03',
      }
    ]

    onClick(): void {
      setInterval(() => {
        this.tweets.unshift(
          {
            user: 'hoge',
            content: 'fuga',
            favorite: 0,
            share: 0,
            self: false,
            createdAt: '21:06',
          }
        )
        if (this.tweets.length > 5) {
          this.tweets.pop()
        }
      }, 3000)
    }
  }
</script>

<style lang="scss" scoped>
</style>
