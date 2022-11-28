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
	background-color: var(--accent);
	color: var(--text);
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
	background-color: var(--background);
	width: 20em;
	box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.2);
  }
  
  .dropdown-content > a {
	color: var(--accent);
	padding: 12px 16px;
	text-decoration: none;
	display: block;
  }
  
  .dropdown-content a:hover {background-color: var(--header-footer);}

  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: var(--accent);}

</style>
 
 