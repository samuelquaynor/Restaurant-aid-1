<template>
  <div class="">
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <a class="" href="#">
          Resturant Aid
        </a>
      </div>
    </nav>
    <!-- <nav class="nav-extended indigo darken-3">
      <div class="nav-content">
        <router-link to>
          <span class="nav-title"></span>
        </router-link>
      </div>
    </nav> -->
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
nav.navbar {
  padding: 0 20px;
  background: #5cdb95;
  width: 100%;
  height: 50px;
}
nav .container-fluid a {
  color: #05386b;
  font-weight: 600;
  font-size: 2rem;
}
nav .container-fluid a:hover {
  text-decoration: none;
  color: #fff;
}
</style>
