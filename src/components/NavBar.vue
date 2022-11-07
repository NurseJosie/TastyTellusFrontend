<script>
import { RouterLink, RouterView } from "vue-router";
</script> 

<template>
  <section class="dropdown">
    <button class="dropbtn">Meny</button>
      <nav class="dropdown-content">
       <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
      </nav>
    </section>
</template>

<style scoped>
.dropbtn {
	background-color: #50372f;
	color: rgb(228, 228, 228);
	padding: 16px;
	font-size: 16px;
	border: none;
	width: 20em;
	max-width: 50%; 
  }

  .dropdown {
	position: relative;
	display: inline-block;
  }
  
  .dropdown-content {
	display: none;
	position: absolute;
	background-color: rgb(122, 88, 66);
	width: 20em;
	box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.2);
  }
  
  .dropdown-content > a {
	color: rgb(92, 45, 45);
	padding: 12px 16px;
	text-decoration: none;
	display: block;
  }
  
  .dropdown-content a:hover {background-color: #8b5f5f;;}

  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: #58402f;}

</style>
 
 