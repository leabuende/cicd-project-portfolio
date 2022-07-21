<template>
  <div class="footer">
      <h2>Let's work together !</h2>
      <img src="@/assets/footer.png" class="footer-img" alt="">
    <div>
      <a class="animated-links" href="">hello@lea-buende.com</a>

    </div>
    <h2 class="signature">Coded with ❤️ by me</h2>
  </div>
</template>

<script>

export default {
  name: 'Footer',

}
</script>
<style scoped>
.footer{
    width: 100%;
    text-align: center;
    padding:48px 0px 100px 0px;
}
.footer-img{
    height:100px;
    margin:10px 0px 10px 0px;
}
a{  height:25px;
    text-decoration: none;
    color:black;
    font-size:16px;
}
.signature{
    margin:32px 0px 32px 0px;
}
</style>