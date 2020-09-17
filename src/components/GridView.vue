<template>
  <div class="row">
    <GridItem v-for="movie in movies" v-bind:key="movie.show.id" v-bind:movie="movie.show"/>
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
    movies: Object
  }
}
</script>

<style scoped>

</style>
