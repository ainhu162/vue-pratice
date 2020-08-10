<template>
  <ul class="nav nav-pills">
    <!-- <li role="presentation">
      <router-link to="/">Home</router-link>
    </li>
    <li role="presentation">
      <router-link to="/user">Profile</router-link>
    </li>-->
    <router-link tag="li" active-class="active" exact to="/">
      <a>Home</a>
    </router-link>
    <router-link tag="li" active-class="active" to="/user">
      <a>User</a>
    </router-link>
  </ul>
</template>