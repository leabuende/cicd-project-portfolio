<template>
  <div id="app">
    <Navbar class="nav"/>
    <div class="page">
     <router-view class="view"></router-view>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components : {
    Navbar,
    Footer
  },
}
</script>
<style>
#app {
font-family: 'Karla', sans-serif;
background-color: #FAFAFA;
min-height:100vh;
overflow: hidden;
}
.nav{
  z-index:4
}
.page{
  width:100vw;
  display:flex;
  justify-content: center;
  margin-top:100px;
  padding:20px;
  min-height:100vh;
}
.view{
  width:100vw;
  max-width: 1400px;
}
.links{
  text-decoration: none;
  color: black;
}
.links:hover{
  cursor: pointer;
}
a:hover{
  cursor: pointer;
}
*{
  margin:0;
  box-sizing: border-box;
}

.white-button{
  background-color: white;
  padding:10px 15px 10px 15px;
  font-family: Karla;
  border: 1px solid black;
  transition: 0.5s;
}
.white-button:hover{
  background-color: black;
  border: 1px solid white;
  color:white;
  cursor: pointer;
}

h2{
  font-weight: bold;
  font-size: 20px;
}

.animated-links {
  
  display: inline-block;
  position: relative;
}
.animated-links:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: black;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.animated-links:hover:after { 
  width: 100%; 
  left: 0; 
}

/* Project classes */
.lesson-box {
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.05);
  padding: 15px;
  width: 100%;
  margin-top:40px;
}

.project-component{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.half-section{
    width:50%;
    flex:50%;
    padding:10px 0px 10px 0px;
}
.full-section{
    width:100%;
    flex:100%;
}
.half-section-media{
    padding: 10px;
}
.half-section-media img{
    width:100%;
    height:auto;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.05);
}
@media (max-width: 768px) {
    .half-section{
    width:100%;
    flex:100%;
}
.half-section-media{
    padding:10px 0px 10px 0px;
}
}


@media only screen and (max-width: 480px) {
  .page{
    margin-top:0;
  }
  h2{
    font-size: 16px;
  }
}
</style>
