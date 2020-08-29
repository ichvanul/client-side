<template>
  <div class="ready-page">
    <section class="ready-top">
      <div class="ready-title">
        <p>1</p>
        <p>View Table</p>
      </div>
      <div class="ready-content">
        <p>Cah Taoge</p>
        <p>Rp. 15.000</p>
      </div>
      <div class="ready-content">
        <p>Nasi Putih</p>
        <p>2x</p>
        <p>Rp. 0</p>
      </div>
      <div class="ready-content">
        <p>Gurame Asam Manis</p>
        <p>Rp. 69.000</p>
      </div>
      <div class="ready-content">
        <p>Es Jeruk</p>
        <p>2x</p>
        <p>Rp. 20.000</p>
      </div>
      <div class="ready-total">
        <p>Sub Total</p>
        <p>Rp. 104.000</p>
      </div>
      <div class="ready-total">
        <p>Total</p>
        <p>Rp. 104.000</p>
      </div>
    </section>
    <section class="ready-bottom">
      <p>Clear Sale</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ReadyCart'
}
</script>

<style lang="scss" scoped>
.ready-page {
  display: flex;
  flex-direction: column;
  .ready-top {
    background-color: white;
    margin: 5px 0 0 0;
    padding: 0 5px 0 5px;
    .ready-title {
      margin: 0 0 10px 0;
      display: flex;
      justify-content: space-between;
    }
    .ready-content {
      margin: 0 0 10px 0;
      display: flex;
      justify-content: space-between;
    }
    .ready-total {
      margin: 0 0 10px 0;
      display: flex;
      justify-content: space-between;
    }
  }
  .ready-bottom {
    margin: 5px 0 0 0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    p {
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
