<template>
  <div id="app" class="d-container">
    <header id="top">
      <b-navbar type="light" variant="light" class="h-100">
        <router-link :to="{ name: 'home' }">
          <b-navbar-brand>
            <img src="../public/logo-dyna.png" class="d-inline-block align-top" alt="Kitten" />
            DyN-Admin
          </b-navbar-brand>
        </router-link>

        <div class="spacer"></div>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <template v-for="route in routes">
              <b-nav-item :key="route.path">
                <router-link :to="{name : route.name}">{{route.title}}</router-link>
              </b-nav-item>
            </template>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <main class="h100">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>

    <!-- SCROLL TOP -->
    <ScrollTop />
    <!-- END SCROLL TOP -->
  </div>
</template>

<script>
import { BNavbar, BCollapse, BNavItem, BNavbarBrand, BNavbarNav } from 'bootstrap-vue'
import ScrollTop from '@/components/scroll-top/ScrollTop'

export default {
  name: 'app',
  components: {
    BNavbar,
    BNavbarNav,
    BNavItem,
    BNavbarBrand,
    BCollapse,
    ScrollTop
  },
  data() {
    return {
      routes: this.$router.options.routes.filter(route => route.menu)
    }
  }
}
</script>

<style lang="scss" scoped>
.d-container {
  display: grid;
  grid-template-areas: 'h h' 'm m';
  grid-template-rows: 1fr 10fr;
  height: 100%;

  header {
    align-content: center;
    grid-area: h;
    box-shadow: 0 1px 5px var(--gray);

    .navbar-brand {
      font-weight: 300;
      font-style: italic;

      img {
        width: 30px;
      }
    }

    .spacer {
      width: 2px;
      margin: 5px;
      background-color: var(--dark);
      height: 30px;
    }

    a {
      color: var(--dark);
      text-decoration: none;
      &:hover {
        color: var(--gray);
      }
    }
  }

  main {
    grid-area: m;
  }
}
</style>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: var(--light);
}

a:hover {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px var(--gray);
  border-radius: 0;
  background-color: var(--white);
}

::-webkit-scrollbar-thumb {
  background: var(--gray);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gray);
}
</style>
