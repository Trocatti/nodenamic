<template>
  <a href="#top" v-show="scrolled">
    <v-icon name="chevron-up" scale="2" />
  </a>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/chevron-up'

export default {
  name: 'scrollTop',
  components: {
    'v-icon': Icon
  },
  methods: {
    handleScroll(e) {
      this.scrolled = e.target.scrollTop > 0
    }
  },
  created() {
    document.body.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.body.removeEventListener('scroll', this.handleScroll)
  },
  data() {
    return {
      scrolled: false
    }
  }
}
</script>

<style lang="scss" scoped>
a[href='#top'] {
  text-decoration: none;
  position: fixed;
  bottom: 0;
  z-index: 9;
  right: 10px;
  background: rgba(0, 123, 255, 0.8);
  color: white;
  padding: 5px;
  box-shadow: 0px 0px 5px 0px #4b4b4b;

  &:hover {
    box-shadow: 0px 0px 10px 0px #4b4b4b;
  }
}
</style>