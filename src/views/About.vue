<template>
  <div class="about">
    <h1>This is an about page, count is {{count}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
