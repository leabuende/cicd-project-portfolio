<template>
  <div class="testimonial">
    <carousel :perPage="1">
      <slide
        class="slide"
        v-for="(testimonial,i) in testimonials"
        :key="i"
      >
        <img
          :src="require(`@/assets/profiles/${testimonial.img}`)"
          alt=""
          class="profile-img"
        />
        <div class="profile">
          <h2 class="profile-name">{{ testimonial.name }},</h2>
          <p class="profile-title">{{ testimonial.title }}</p>
        </div>
        <div class="testimonial">
          <p class="testimonial-text">
            {{ testimonial.testimonial }}
          </p>
        </div>
        <div class="social-links">
            <img src="@/assets/links/linkedin.png" alt="">
            <img src="@/assets/links/mail.png" alt="">
        </div>
        <div class="endorsed">
            <h2>Endorsed skills</h2>
            <p>{{testimonial.endorsed}}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Testimonials",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      testimonials: [
        {
          img: "vincent.png",
          name: "Vicent Hébert",
          title: "CFO @ Interconstruction",
          testimonial:
            "Léa has been a very reliable coworker, going above and beyond of her tasks in the office. She has shown great courage, managing her job with her other responabilities and school worK. ",
          endorsed: "initiative / communication",
        },
        {
          img: "mom.png",
          name: "Sabine",
          title: "mom @ Buendé family",
          testimonial:
            "Overall perfect human being. hire her.",
          endorsed: "everything",
        },
        {
          img: "profile1.png",
          name: "Duc-Thomas Nguyen",
          title: "developer @ Touch and Sell",
          testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et tellus quam. Mauris scelerisque mauris vel leo ultricies eleifend. Duis facilisis suscipit lobortis. Fusce at venenatis mauris. Proin facilisis risus et pulvinar molestie. Cras in arcu ac sem consequat accumsan. Morbi viverra lacus quis erat posuere, id accumsan diam sollicitudin. Aenean ac lectus euismod arcu iaculis cursus sed eget lorem. ",
          endorsed: "development / ux design",
        },
      ],
    };
  },
};
</script>
<style scoped>
.testimonial{
    margin-top:32px;
    width:100%;
}
.slide {
  text-align: center;
  width:100%;
}
.profile-img {
  height: 100px;
  border-radius: 50%;
}
.profile{
    display:flex;
    justify-content: center;
    margin:10px 0px 16px 0px;
        font-size:18px;

}

.profile-title{
    font-style: italic;
    font-weight: thin;
    font-family: Roboto;
    color:#8E8E8E;
    margin-left:5px;
}
.testimonial{
    display:flex;
    justify-content: center;
    width:100%;
}
.testimonial-text{
    max-width:800px;
    margin-bottom:16px;
}
.social-links img{
    height:20px;
    margin:0px 5px 0px 5px;
}
.endorsed h2{
    margin-top:32px;
    font-size: 18px;
}
.endorsed p{
    font-size: 12px;
    text-transform: uppercase;
    font-family: roboto;
}
@media only screen and (max-width: 480px) {
    .profile{
        display:block;
    }
    .testimonial-text{
        font-size:14px;
        padding:10px;
    }
    .profile{
        font-size:16px;
    }
    .endorsed h2{
    margin-top:28px;
    font-size: 16px;
}
.endorsed p{
    font-size: 10px;

}
}
</style>
