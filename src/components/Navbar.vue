<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand">MovieDB</a>

    <div class="btn-group" role="group" aria-label="Layout">
      <button type="button" class="btn btn-secondary" v-bind:class="{ active: displayGrid }" v-on:click="onClickLayout(true)">Grid</button>
      <button type="button" class="btn btn-secondary" v-bind:class="{ active: !displayGrid }" v-on:click="onClickLayout(false)">List</button>
    </div>

    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      displayGrid: true
    }
  },
  methods: {
    onClickLayout: function (gridSelected) {
      this.displayGrid = gridSelected;
      this.$emit('toggle-layout', gridSelected);
    }
  }
}
</script>

<style scoped>

</style>
