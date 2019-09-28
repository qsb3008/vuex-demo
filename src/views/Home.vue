<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="padding: 20px;" @click="increment">
      {{count}}
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>
