<template>
  <div class="pageCard">
    <div class="mainCard">
      <div class="bodyCard" v-for="mainCard in 15" :key="mainCard.id"
      @click="cardSelect(mainCard.id)">
        <div class="cardImage">
          <img src="../assets/logo.png" alt="food-drink">
        </div>
        <div class="cardTitle">
          <h6> Cumi Tepung </h6>
        </div>
      </div>
    </div>
    <div class="categoryCard">
      <div class="categoryBody" v-for="mainCard in 5" :key="mainCard.id"
      @click="cardSelect(mainCard.id)">
        <div class="cardImage">
          <img src="../assets/logo.png" alt="food-drink">
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
  name: 'Menu'
}
</script>

<style lang="scss" scoped>
.pageCard {
  background-color: #ccddff;
  display: flex;
  .mainCard {
    background-color: #ccddff;
    padding: 0 0 0 80px;
    width: 39vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .bodyCard {
      background-color: white;
      width: 150px;
      height: 100px;
      margin-top: 5px;
      margin-left: 20px;
      margin-bottom: 5px;
      border: 1px solid black;
      border-radius: 3px;
      overflow: hidden;
      transition: linear 0.25s;
      .cardImage {
        img {
          width: 150px;
          height: 75px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          object-fit: cover;
        }
      }
      .cardTitle {
        h6 {
          padding: 0 0 0 5px;
        }
      }
    }
  }
  .categoryCard {
    background-color: #ccddff;
    padding: 0 120px 0 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .categoryBody {
      background-color: white;
      width: 150px;
      height: 100px;
      margin-top: 5px;
      margin-left: 60px;
      margin-bottom: 20px;
      border: 1px solid black;
      border-radius: 3px;
      overflow: hidden;
      transition: linear 0.25s;
      .cardImage {
        img {
          width: 150px;
          height: 75px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          object-fit: cover;
        }
      }
      .cardTitle {
        h6 {
          padding: 0 0 0 5px;
        }
      }
    }
  }
}
</style>
