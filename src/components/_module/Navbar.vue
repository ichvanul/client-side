<template>
  <div class="navbar-page">
    <nav class="navbar-component">
      <i class="fas fa-user"></i>
      <p>New Costumer</p>
      <i class="fas fa-list-ul"></i>
    </nav>
    <section class="navbar-title">
      <p>Dine In</p>
      <i class="fas fa-angle-down"></i>
    </section>
  </div>
</template>

<script>
export default {
  Name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar-page {
  .navbar-component {
    display: flex;
    background-color: #ccddff;
    .fa-user {
      font-size: 80px;
      background-color: #80aaff;
      padding: 10px;
      color: #0040ff;
    }
    p {
      display: flex;
      align-items: center;
      font-weight: 700;
      padding: 20px 20px;
      font-size: 31px;
    }
    .fa-list-ul {
      font-size: 80px;
      background-color: #80aaff;
      padding: 10px;
      color: #0040ff;
    }
  }
  .navbar-title {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    padding: 20px;
    p {
      font-size: 20px;
    }
    .fa-angle-down {
      font-size: 20px;
      margin-left: 5px;
      color: #0040ff;
    }
  }
}
</style>
