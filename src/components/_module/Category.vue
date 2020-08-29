<template>
  <div class="pageCard">
    <div class="mainCard">
      <div class="bodyCard" v-for="mainCard in 4" :key="mainCard.id">
        <div class="cardImage">
          <img src="../../assets/logo.png" alt="food-drink">
        </div>
        <div class="cardTitle">
          <h6> Cumi Tepung </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category'
}
</script>

<style lang="scss" scoped>
.pageCard {
  display: flex;
  .mainCard {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .bodyCard {
      width: 150px;
      height: 100px;
      margin-top: 15px;
      margin-left: 20px;
      border: 1px solid black;
      border-radius: 3px;
      overflow: hidden;
      transition: linear 0.25s;
      .cardImage {
        img {
          width: 100px;
          height: 100px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
