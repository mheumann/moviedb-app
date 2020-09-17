<template>
  <tr>
    <td><img class="img-thumbnail" :src="movie.image.medium" alt="movie cover"></td>
    <td class="align-middle">{{ movie.name }}</td>
    <td class="align-middle"><a :href="movie.url" target="_blank">Show more</a></td>
  </tr>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    movie: Object
  }
}
</script>

<style scoped>
  img {
    max-height: 100px;
  }
</style>
