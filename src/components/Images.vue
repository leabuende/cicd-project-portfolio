<template>
  <div class="image">
    <div class="thumbnail" :style="backgroundStyles(img)">
      <h1>{{ description }}</h1>
      <p>{{'@assets/album/'+img}}</p>
      <img :src="require('../assets/album/1.JPG')" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: "Images",
  props: {
    img: String,
    description: String,
  },
  methods: {

    backgroundStyles(img) {
      console.log(img)
      return {
        // any other styles you might need to add on as an example
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../assets/album/2.jpg) no-repeat center center`,
        "background-size": "cover",
        
      };
    },
  },
};
</script>
<style scoped>

.thumbnail {
  position: relative;
  min-height: 350px;
  border-radius: 5px 5px 0px 0px;

}
.thumbnail h1 {
  position: absolute;
  bottom: 0;
  color: white;
  margin: 0px 0px 15px 15px;
}
</style>
