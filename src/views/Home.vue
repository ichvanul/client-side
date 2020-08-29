<template>
  <div class="home">
    <Menu/>
    <Cart/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '../components/Menu'
import Cart from '../components/Cart'

export default {
  name: 'Home',
  components: {
    Menu,
    Cart
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
</style>
