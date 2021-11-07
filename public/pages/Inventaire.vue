<template>
  <base-structure>
    <div class="overall">
      <h1 class="text fat"> Votre historique d'achats </h1>
      <h2 class="text"> Si vous avez des questions, veuillez nous appeler au 01 23 45 67 pour faire valoir vos droits. </h2>
      <div>
        <p class="stats">Nombre d'ordres négociés : <b class="red">{{ inventory.length }} </b></p>
        <p class="stats">Total des dépenses : <b class="red">{{ getTotalPrice() }}  </b>€</p>
      <div v-if="inventory.length===0" id="bigBox">
        <img src="https://i.ibb.co/wBFCC3L/image.png" width="150" height="150"/>
        <p>Vous avez supprimé toutes vos transactions, ou n'avez-vous pas encore effectué une seule transaction ? Cliquez ici :</p>
        <router-link to="/">Nous avons recommandé ces produits pour vous aujourd'hui</router-link>
      </div>
      </div>
      <div class="products">
        <div v-for="(product, i) in inventory" :key="i">
          <div class="desc">
            <div class="pic" :style="{ backgroundImage: 'url('+ idToProd(product).img +')' }"></div>
            <h3> {{ idToProd(product).name }} </h3>
            <p> Numéro de série du produit : <span class="color"> {{ idToProd(product).grade }} </span> </p>
            <p> Prix : <span class="color"> {{ idToProd(product).prix }} $</span> </p>
            <p> Description :
            <br> 
            <span class="color"> {{ idToProd(product).description }} </span> 
            </p>
            <button @click="removeFromInventory(product)" class="selectstyle">Supprimer</button>
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
  name: 'Inventory',
  components:{
    BaseStructure
  },
  props: {
    products: { type: Array, default: []},
    inventory: { type: Array, default: []}
  },
  data(){
    return {
      productsToShow: [],
      rarity:"Tout",
      type:"Tout"
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
    removeFromInventory(productId){
      this.$emit('remove-from-inventory',productId)
    },
    idToProd(productId){
      const found = this.products.find(p => p.id === productId)
      return found
    },
    getTotalPrice(){
      var sum = 0
      for(var i in this.inventory){
        var found = this.products.find(p => p.id === this.inventory[i])
        sum += found.prix
      }
      return sum
    }
  }
}
</script>

<style scoped>
  .red {
    color:red;
  }

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

  .stats {
    text-align: center;
    font-size:40px;
  }

  .empty {
    font-size:50px;
    text-align:center;
  }

  .text {
    margin-left:auto;
    margin-right:auto;
    text-align: center;
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
		border-radius:25px;
		margin-bottom:5px;
		margin-top:5px;
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
    color:rgba(255,0,0,0.7);
    border-radius: 10px;
    border:none;
    font-size:25px;
    margin-bottom:5px;
    margin-left:auto;
    margin-right:auto;
    width:300px;
    height:40px;
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

  #bigBox{
    margin: 0 auto;
    padding: 20px 50px;
    background-color: rgba(216,221,222,0.8);
    width: 420px;
    height: 280px;
    border-radius: 10px;
    text-align: center;
  }
</style>
