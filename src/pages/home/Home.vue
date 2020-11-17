<template>
  <div id="home">
    <div class="home">
      <template v-for="route in routes">
        <div class="cards-container" :key="route.path">
          <router-link :to="{ name: route.name }" class="cards-content">
            <div class="card-icon mb-4">
              <v-icon :name="route.type == 'search' ? 'search' : 'plus'" />
            </div>
            <div class="card-text">
              <span>{{route.title | upperCase}}</span>
            </div>
          </router-link>
        </div>
      </template>
    </div>
    <footer class="footer">
      <div>
        Copyright &copy; {{ date }} All rights reserved
        <a
          href="http://www.dynamix.com.br"
          target="_blank"
        >Dynamix Software LTDA</a>
      </div>
      <div>Versão: {{version}}</div>
    </footer>
  </div>
</template>

<script>
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/search'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'home',
  canReuse: false,
  components: {
    'v-icon': Icon
  },
  data() {
    return {
      date: new Date().getFullYear(),
      version: process.env.VUE_APP_VERSION,
      routes: this.$router.options.routes.filter(route => route.menu)
    }
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  display: grid;
  grid-template-rows: 84vh 7vh;
}

.home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  .cards-container {
    width: 20vw;
    height: 35vh;
    margin: 20px;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 7px 0px var(--gray);
    border-bottom: 4px solid var(--cyan);

    &:hover {
      box-shadow: 0 0 15px 0px var(--gray);

      .card-text {
        text-shadow: 0em 0.1em 0.3em var(--gray);
      }
    }

    .cards-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: var(--dark);

      .card-icon {
        svg {
          height: 7vh;
          width: 5vw;
        }
      }

      .card-text {
        font-size: 1.2em;
        font-weight: 600;
      }
    }
  }
}

$black: #000 !default;
footer {
  padding: 1em 1em;
  background-color: $black;
  color: var(--white);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: var(--light);
    text-decoration: none;
    &:hover {
      color: var(--gray);
      text-decoration: underline;
    }
  }
}
</style>