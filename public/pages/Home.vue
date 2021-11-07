<template>
  <base-structure>
    <div class="overall">
      <h1 class="espace"></h1>
      <article>
        <h1 class="text bigfat"> OFFRES SPECIALES DU JOUR </h1>
        <p class="text"> En utilisant le code promo !</p>
      </article>
      <div class="roller">
        <center class="outer">
          <img src="https://img12.360buyimg.com/n1/s450x450_jfs/t15265/50/2015250726/150052/1996ee0c/5a675125N4ad6dc92.jpg" alt="">
          <img src="https://lh3.googleusercontent.com/proxy/kYisPzunTUTicJBVcuyDrzkkMe_XreIi3k1Lw1Whw-3R0jbk2kO-M1C1rTcUu52OkL2h_yKqnFMpQOrpywfgRZZl1YaHrryX1YemTaKnh82y1fTHjA" alt="">
          <img src="https://static.cnbetacdn.com/article/2020/1208/151ec6e482f7a55.jpg" alt="">
          <img src="https://www.ganbey.com/wp-content/uploads/2020/02/71IeAqKbxpL._SL1500_.jpg" alt="">
          <img src="https://s.yimg.com/zp/images/E0798E25E26A3C04B3369C671E783C3AB6B50AFD" alt="">
          <img src="https://www.hi-mory.com/uploads/allimg/200611/1-200611232917.jpg" alt="">
        </center>
      </div>
    </div>
  </base-structure>
</template>

<script>
const BaseStructure = window.httpVueLoader('../components/BaseStructure.vue')
module.exports = {
  name: 'Home',
  components:{
    BaseStructure
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .overall {
    display:flex;
    background-repeat:no-repeat;
    background-position:center;
    background-attachment: fixed;
    background-size:cover;
    flex-direction: column;
    margin-left:auto;
    margin-right:auto;
    min-width:100%;
    min-height:100vh;
  }

  .text {
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    font-size:30px;
  }

  .bigfat {
    font-size: 50px;
  }

  .enemy {
    width:400px;
    margin:auto;
    border-radius: 10px;
  }

  .desc {
    background-color:rgba(0,0,0,0.5);
    border-radius:10px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content: center;
    text-align: center;
    margin:auto;
  }

  .context {
    display:flex;
    flex-direction: column;
    max-width: 500px;
  }

  .roller {
    width: 100%;
    height: 31.25rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin: 100px auto;
    overflow: hidden;
  }

  @keyframes rolling {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-28%);
      }
    }

  .outer {
    display: flex;
    animation: rolling 15s linear infinite;
  }

  article {
    min-height: 20px;
    width:98%;
    background: #343434;
    color : white;
    text-align: center;
    margin: 0 auto;
    border-radius: 10px;
    border: 4px dashed;
  }

  .espace{
    width: .1%;
    height: 0rem;
    background-color: transparent;
  }

  img {
    max-width: 500px;
    max-height: 500px;
  }
</style>
