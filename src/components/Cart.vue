<template>
  <div class="cartPage">
    <Navbar/>
    <ReadyCart/>
    <Button/>
  </div>
</template>

<script>
import Navbar from '../components/_module/Navbar'
import ReadyCart from '../components/_module/ReadyCart'
import Button from '../components/_module/Button'

export default {
  Name: 'Cart',
  components: {
    Navbar,
    ReadyCart,
    Button
  }
}
</script>

<style lang="scss" scoped>
.cartPage {
  background-color: #80aaff;
  width: 40vw;
}
</style>
