<template>
  <div class="">
    <nav class="navbar navbar-light justify-content-center sticky-top">
      <div class="container-fluid">
        <router-link to="/">
          <a class="" href="#">
            Restuarant Aid
          </a>
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
nav.navbar {
  padding: 0 20px;
  background: #5cdb95;
  height: 4rem;
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
