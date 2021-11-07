const Home = window.httpVueLoader('./pages/Home.vue')
const Menager = window.httpVueLoader('./pages/Menager.vue')
const Electrique = window.httpVueLoader('./pages/Electrique.vue')
const Panier = window.httpVueLoader('./pages/Panier.vue')
const Inventaire = window.httpVueLoader('./pages/Inventaire.vue')

const routes = [
  { path: '/', name:"Home", component: Home },
  { path: '/menager', name:"Menager", component: Menager },
  { path: '/electrique', name:"Electrique", component: Electrique },
  { path: '/panier', name:"Panier", component: Panier },
  { path: '/inventaire', name:"Inventaire", component: Inventaire }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    products:[],
    cart:[],
    inventory:[]
  },
  async mounted() {
    const productsData = await axios.get('/api/shop');
    this.products = productsData.data;
  },
  methods:{
    async putInCart(productId){
      await axios.put('/api/shop/'+productId)
      this.cart.push(productId)
      this.cart.sort()
    },
    async removeFromCart(productId){
      await axios.put('/api/unshop/'+productId)
      if(this.cart.includes(productId)){
        this.cart.splice(this.cart.indexOf(productId),1)
      }
      this.cart.sort()
    },
    async pay(){
      await axios.post('/api/buy')
      for(var i in this.cart){
        this.inventory.push(this.cart[i])
      }
      this.inventory.sort()
      this.cart = []
    },
    async removeFromInventory(productId){
      await axios.put('/api/drop/'+productId)
      if(this.inventory.includes(productId)){
        this.inventory.splice(this.inventory.indexOf(productId),1)
      }
      this.inventory.sort()
    }
  }
})