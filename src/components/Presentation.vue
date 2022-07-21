<template>
  <div class="presentation">
      <img src="../assets/profile.png" alt="" class="profile-img">
      <h1>Hello, I'm Léa Buendé.</h1>
      <p>I’m a software engineering student based in Paris,
passionate about creating beautiful things. ❤️
</p>
<div class="social-links">
    <a href="https://github.com/leabuende" target="_blank">
    <img src="../assets/links/github.png" alt="">

    </a>
    <a href="https://www.linkedin.com/in/l%C3%A9a-buend%C3%A9-65b440174/" target="_blank">
        <img src="../assets/links/linkedin.png" alt="">

    </a>
    <a href="mailto:lea.buende@gmail.com?subject=Let's keep in touch ! - Léa Buendé" target="_blank">
    <img src="../assets/links/mail.png" alt="">

    </a>

</div>
  </div>
</template>

<script>

export default {
  name: 'Presentation',

}
</script>
<style  scoped>
.presentation{
    width:100%;
    max-width: 500px;
}
.profile-img{
    height:100px;
    width :100px;
    border-radius:50%;
}
h1{
    font-size:30px;
    margin:10px 0px 10px 0px;
}
p{
    font-size:16px;
}
.social-links{
    margin-top:20px;
}
.social-links img{
    height:25px;
    margin-right:20px;
}
@media only screen and (max-width: 480px) {
   .presentation{
    width:100%;
}
.profile-img{
    height:60px;
    width :60px;
    border-radius:50%;
}
h1{
    font-size:25px;
    margin:10px 0px 10px 0px;
}
p{
    font-size:14px;
} 
.social-links img{
    height:20px;
    margin-right:15px;
}
}
    </style>