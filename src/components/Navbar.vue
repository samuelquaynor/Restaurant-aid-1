<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-3">
      <div class="nav-content">
        <router-link to>
          <span class="nav-title">Resturant Aid</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>
