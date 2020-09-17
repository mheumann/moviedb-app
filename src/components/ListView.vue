<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Title</th>
        <th scope="col">Link</th>
      </tr>
    </thead>
    <tbody>
      <ListItem v-for="movie in movies" v-bind:key="movie.show.id" v-bind:movie="movie.show"/>
    </tbody>
  </table>
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
  name: "ListView",
  components: {
    ListItem
  },
  props: {
    movies: Object
  }
}
</script>

<style scoped>

</style>
