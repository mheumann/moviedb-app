<template>
  <div class="row">
    <GridItem v-for="movie in movies" v-bind:key="movie.id" v-bind:movie="movie"/>
  </div>
</template>

<script>
import GridItem from "@/components/GridItem";

export default {
  name: "GridView",
  components: {
    GridItem
  },
  props: {
    movies: Array
  }
}
</script>

<style scoped>

</style>
