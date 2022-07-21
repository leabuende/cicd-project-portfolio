<template>
  <div class="project">
    <div class="container">
      <img :src="image" alt="" />
      <div class="img-overlay">
        <div class="skills">
          <p v-for="skill in skills" :key="skill">{{ skill }} </p>
        </div>
        <h1>{{ name }}</h1>
        <p class="description">{{ description }}</p>
        <div class="button">
            <router-link :to="'/works/'+link">
          <button class="white-button">View case study</button>

            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    name: String,
    description: String,
    skills: Array,
    image: String,
    link: String
  },
};
</script>
<style scoped>
.project {
  width: 100%;
  height: auto;
}
.container {
  position: relative;
  height: 100%;
  width: 100%;
}
.project img {
  height: 100%;
  width:100%;
  object-fit: cover;
}
.img-overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  color: white;
  padding: 20px;
  border-radius: 5px;
}
.skills {
  letter-spacing: 0.105em;
  text-transform: uppercase;
  display: flex;
}
.skills p {
  margin-right: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 12px;
}
h1 {
  font-size: 30px;
  margin: 20px 0px 20px 0px;
}
.description {
  font-size: 16px;
  margin: 20px 0px 10px 0px;
}
.white-button {
  position: absolute;
  bottom: 0;
  margin-bottom:20px;
}

@media only screen and (max-width: 480px) {
    .skills p {

  font-size: 10px;
}
h1 {
  font-size: 25px;
  margin: 20px 0px 20px 0px;
}
.description {
  font-size: 14px;
  margin: 20px 0px 10px 0px;
}
}
</style>
