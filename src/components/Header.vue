<template>
  <div class="header-wrapper">
    <div class="logo">
      <img src="../assets/logo.png">
    </div>
    <div class="navbar">
      <ul class="nav-list">
        <li v-for="item in navItems">
          {{item}}
        </li>
      </ul>
      <button class="login-btn">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data () {
      return {
        navItems: ['page1', 'page2', 'page3']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-wrapper {
    height: 6rem;
    font-size: 0.95rem;
    /* TODO: select correct color */
    background-color: #7d97ad;

    .logo {
      padding: 1rem;
      float: left;

      img {
        height: 4rem;
      }
    }
    .navbar {
      .nav-list {
        text-align: center;
        float: left;
        width: 75%;
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          display: inline-block;
          padding: 0 1.2rem;
          color: #fff;
          line-height: 6rem;
          cursor: pointer;
        }
      }
      .login-btn {
        float: right;
        height: 3rem;
        margin: 1.5rem;
        padding: 0 2rem;
        font-size: inherit;
        border: 0;
        border-radius: 0.4rem;
        color: #000;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
