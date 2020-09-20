<template>
  <div class="container">
    <Navbar v-on:toggle-layout="onToggleLayout" v-on:search="onSearch"/>
    <GridView v-bind:class="{ 'd-none': !displayGrid }" v-bind:movies="movies"/>
    <ListView v-bind:class="{ 'd-none': displayGrid }" v-bind:movies="movies"/>
    <div v-show="loadingMovies" class="row justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
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
      movies: [],
      loadingMovies: true,
      canScroll: true
    };
  },
  mounted() {
    this.loadMore();

    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    onToggleLayout: function (gridSelected) {
      this.displayGrid = gridSelected;
    },

    handleScroll: function() {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && !this.loadingMovies && this.canScroll) {
        this.loadingMovies = true;
        this.loadMore();
      }
    },

    loadMore: function () {
      axios
          .get('http://localhost:8000/api/shows?amount=20&page=' + this.page)
          .then(response => {
            this.loadingMovies = false;
            this.movies = [...this.movies, ...response.data];
          });

      this.page++;
    },

    onSearch: function (searchString) {
      this.loadingMovies = true;
      this.canScroll = false;
      this.movies = [];
      axios
          .get('http://localhost:8000/api/search/' + searchString)
          .then(response => {
            this.loadingMovies = false;
            this.movies = response.data.map((showResult) => (showResult.show));
          });
    }
  }
}
</script>

<style>
</style>
