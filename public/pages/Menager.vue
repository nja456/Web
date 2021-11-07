<template>
  <base-structure>
    <div class="overall">
      <h1 class="text fat"> Articles ménagers </h1>
      <h2 class="text"> Aucun supermarché à proximité de votre lieu de résidence ? Pas assez de produits de supermarché ? Alors venez visiter E'SHOP ! </h2>
      <div class="filter">
        <div class="filterCriteria">
          <label style="font-size:20px; margin: 16px 0 8px 0;">> Type : <</label>
          <select v-model="rarity" @change="hideProducts()" class="selectstyle">
            <option> Tout </option>
            <option> Vêtements </option>
            <option> Cuisine </option>
            <option> Meubles </option>
            <option> Décoration </option>
          </select>
        </div>
        <div class="filterCriteria">
          <label style="font-size:20px; margin: 16px 0 8px 0;">> Marques : <</label>
          <select v-model="type" @change="hideProducts()" class="selectstyle">
            <option> Tout </option>
            <option> National </option>
            <option> International </option>
          </select>
        </div>
      </div>
      <p class="empty" v-if="productsToShow.length === 0">Aucun produit ne correspond à ces critères</p>
      <div class="products">
        <div v-for="product in products" :key="product.id">
          <div class="desc" v-if="checkInList(product.id)">
            <div class="pic" :style="{ backgroundImage: 'url('+ product.img +')'}"></div>
            <h3> {{ product.name }} </h3>
            <p> Numéro de série du produit : <span class="color"> {{ product.grade }} </span> </p>
            <p> Prix : <span class="color"> {{ product.prix }} €</span> </p>
            <p> Description :
            <br> 
            <span class="color"> {{ product.description }} </span> 
            </p>
            <button @click="putInCart(product.id)" class="selectstyle">Ajouter</button>
          </div>
        </div>
      </div>
    </div>
    <div class="espace"></div>
  </base-structure>
</template>

<script>
const BaseStructure = window.httpVueLoader('../components/BaseStructure.vue')
module.exports = {
  name: 'Weapons',
  components:{
    BaseStructure
  },
  props: {
    products: { type: Array, default: []},
    cart: { type: Array, default: []}
  },
  data(){
    return {
      productsToShow: [],
      rarity:"Tout",
      type:"Tout"
    }
  },
  mounted(){
    for(var i=9;i<17;i++){
      this.productsToShow.push(i)
    }
  },
  methods: {
    checkInList(productId){
      if(this.productsToShow.includes(productId)){
        return true
      } else {
        return false
      }
    },
    hideProducts(){
      productsByType = []
      switch (this.type) {
        case 'Tout':
          for(var i=9;i<17;i++){
            productsByType.push(i)
          }
          break
        case 'National':
          productsByType = [9,10,11,12]
          break
        case 'International':
          productsByType = [13,14,15,16]
          break
        default:
          console.log("Invalid type.")
          break
      }

      var toNotRemove = []
      switch (this.rarity) {
        case 'Tout':
          for(var i=1;i<18;i++){
            toNotRemove.push(i)
          }
          break
        case 'Vêtements':
          toNotRemove = [1,5,9,13,17]
          break
        case 'Cuisine':
          toNotRemove = [2,6,10,14]
          break
        case 'Meubles':
          toNotRemove = [3,7,11,15]
          break
        case 'Décoration':
          toNotRemove = [4,8,12,16]
          break
        default:
          console.log("Invalid type.")
          break
      }

      this.productsToShow = []
      for(var i in productsByType){
        if(toNotRemove.includes(productsByType[i])){
          this.productsToShow.push(productsByType[i])
        }
      }
    },
    putInCart(productId){
      this.$emit('put-in-cart',productId)
    }
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
  }

  .empty {
    font-size:50px;
    text-align:center;
  }

  .products {
    display:inline-flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .fat {
    font-size:50px;
  }

  .pic {
		width:150px;
		height:150px;
		margin:auto;
		background-size:cover;
	}
  .pic:active {
    opacity:0.7;
  }

  .pic:hover {
    box-shadow: 0 0 10px yellow;
    background-size:cover;
  }

  .filter {
    display:flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .filterCriteria {
    display:flex;
    flex-direction: column;
    text-align: center;
  }

  .selectstyle {
  width: 130px;
  height: 40px;
  background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%);
  border: none;
  border-radius: 5px;
  position: relative;
  border-bottom: 4px solid #2b8bc6;
  color: #fbfbfb;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 1px 1px 1px rgba(0,0,0,.4);
  font-size: 15px;
  text-align: left;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
  cursor: pointer;
  text-align: center;
  margin: 8px;
}

.selectstyle:active {
  box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
  top: 1px;
}

  .btn {
    background-color:rgba(135,206,250,0.7);
    color:black;
    font-family:Impact;
    border-radius: 10px;
    border:none;
    font-size:20px;
    margin-bottom:5px;
  }

  .btn:hover {
    background-color:rgba(2, 106, 172, 0.7);
  }

  .btn:active {
    background-color:rgba(0, 67, 109, 0.7);
  }

  option {
    font-size:15px;
    color:black;
  }

  .desc {
		margin:10px;
		font-family: 'Verdana';
		border-radius: 15px;
		border: 10px solid #009688;
    outline: dashed 5px blue;
    display:hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:400px;
    text-align: center;
	}

  .desc:hover {
    background-color:#808080;
  }

  .espace{
    width: .1%;
    height: 6rem;
    background-color: transparent;
  }
</style>
