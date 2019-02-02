<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">  
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" exact to="/" active-class="active">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/users" active-class="active">Users</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/user" active-class="active">User</router-link>
      </li>
    </ul>
  </div>
</nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>
