<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>koedame</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://twitter.com/tocomi0112" target="_blank">
        <span class="mr-2">@tocomi</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Index />
    </v-content>
  </v-app>
</template>

<script>
import Index from './pages/Index';

export default {
  name: 'App',
  components: {
    Index,
  },
  data() {
    return {
      //
    };
  },
};
</script>
