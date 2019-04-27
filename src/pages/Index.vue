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

      v-flex(mb-5 xs12)
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>

<style lang="scss" scoped>

</style>
