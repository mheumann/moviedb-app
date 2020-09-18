<template>
  <div class="container">
    <Navbar v-on:toggle-layout="onToggleLayout"/>
    <GridView v-bind:class="{ 'd-none': !displayGrid }" v-bind:movies="movies"/>
    <ListView v-bind:class="{ 'd-none': displayGrid }" v-bind:movies="movies"/>
    <button type="button" class="btn btn-secondary" v-on:click="onLoadMore()">Load more...</button>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import GridView from "@/components/GridView";
import ListView from "@/components/ListView";
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Navbar,
    GridView,
    ListView
  },
  data: function () {
    return {
      displayGrid: true,
      page: 0,
      movies: []
    };
  },
  methods: {
    onToggleLayout: function (gridSelected) {
      this.displayGrid = gridSelected;
    },

    onLoadMore() {
      this.page++;
      axios
          .get('http://localhost:8000/api/shows?amount=20&page=' + this.page)
          .then(response => (this.movies = [...this.movies, ...response.data]))
    }
  },
  mounted () {
    axios
        .get('http://localhost:8000/api/shows?amount=20&page=0')
        .then(response => (this.movies = response.data))
  }
}
</script>

<style>
</style>
