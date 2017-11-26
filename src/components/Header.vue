<template>
  <div class="header-wrapper">
    <div class="logo">
      <img src="../assets/logo.png">
    </div>
    <div class="navbar">
      <ul class="nav-list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/page2">Page 2</router-link>
        </li>
        <li>
          <router-link to="/page3">Page 3</router-link>
        </li>
      </ul>
    </div>
    <div class="right-area">
      <button v-if="!isLoggedIn" class="login-btn" v-on:click="login">Login</button>
      <div v-if="isLoggedIn" class="avatar">
        <icon name="user"></icon>
      </div>
    </div>
  </div>
</template>

<script>
  import authenticationService from '@/services/authenticationService.js'

  import icon from 'vue-awesome/components/Icon'

  export default {
    name: 'AppHeader',
    components: {
      icon
    },
    data () {
      return {
        isLoggedIn: false,
        navItems: ['page1', 'page2', 'page3']
      }
    },
    methods: {
      login () {
        authenticationService.login()
          .then(() => {
            this.isLoggedIn = true
          })
      },
      logout () {
        this.isLoggedIn = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables.scss";

  .header-wrapper {
    height: 6rem;
    font-size: 0.95rem;
    background-color: $color1;
    color: #fff;

    .logo {
      padding: 1rem;
      float: left;

      img {
        height: 4rem;
      }
    }
    .navbar {
      margin: 0 10rem;

      .nav-list {
        text-align: center;
        float: left;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          display: inline-block;
          padding: 0 1.2rem;
          line-height: 6rem;
          cursor: pointer;

          a {
            color: inherit;
            text-decoration: none;
          }
        }
      }
    }
    .right-area {
      float: right;
      margin: 1.5rem;

      .login-btn {
        height: 3rem;
        padding: 0 2rem;
        font-size: inherit;
        border: none;
        border-radius: 0.4rem;
        color: #000;
        background-color: #fff;
        cursor: pointer;
      }
      .avatar {
        padding: 0.5rem;
        border-radius: 50%;
        border: 1px solid #fff;

        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
</style>
