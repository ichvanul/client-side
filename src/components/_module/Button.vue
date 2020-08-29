<template>
  <div class="button-page">
    <section class="button-body">
      <div class="button-top">
        <button>Save Bill</button>
        <button>Pay Bill</button>
      </div>
      <div class="button-bottom">
        <i class="fas fa-money-check"></i>
        <button>Charge Rp 104.000</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
.button-page {
  .button-body {
    background-color: white;
    margin: 5px 0 0 0;
    display: flex;
    flex-direction: column;
    .button-top {
      display: flex;
      justify-content: space-between;
      button {
        padding: 30px 78px;
        font-weight: bold;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #80aaff;
      }
    }
    .button-bottom {
      display: flex;
      justify-content: space-between;
      .fa-money-check {
        font-size: 80px;
        background-color: #0040ff;
        padding: 10px;
        color: white;
      }
      button {
        padding: 30px 37px;
        font-weight: bold;
        font-size: 25px;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #0040ff;
        color: white;
      }
    }
  }
}
</style>
