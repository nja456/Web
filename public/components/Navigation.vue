<template>
  <nav>
    <div>
      <ul>
        <li style="float:left;border-right:1px solid #bbb;background-color: #4CAF50;"><a href="#home"><router-link class="navBtn" to='/'>Home</router-link></a></li>
        <li><a href="#menager"><router-link to='/menager'>Articles ménagers</router-link></a></li>
        <li><a href="#electrique"><router-link to='/electrique'>Produits électriques</router-link></a></li>
        <li><a href="#panier"><router-link to='/panier'>Panier</router-link></a></li>
        <li><a href="#inventaire"><router-link to='/inventaire'>Inventaire</router-link></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
module.exports = {
  name: 'Navigation',
  props: {
    msg: String
  },
  data() {
    return {
      
    }
  },
  methods: {
    collapse(){
      var top = document.getElementById("top")
      var drop = document.getElementById("dropper")
      if(top.className === "navbar"){
        top.className += " growth"
        drop.className = "hidden"
      } else {
        top.className = "navbar"
        drop.className = "dropped"
      }
    }
  }
}
</script>

<style scoped>

  ul {
    list-style-type: none;
    width: 99%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
        float: right;
        border-left:1px solid #bbb;
      }

  li:last-child {
    border-right: none;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 4px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .hidden {
    display:none;
  }

  .dropped {
    display:none;
  }

  .growth {
    height:50px;
  }


</style>