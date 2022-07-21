<template>
  <div class="home">
    <Presentation />
    <h2>My latest projects</h2>
    <div class="container">
      <div class="column" v-for="(project, i) in featuredProjects()" :key="i">
        <Project
          class="project-card"
          :image="require(`@/assets/projects/${project.url}/${project.thumbnail}`)"
          :name="project.title"
          :description="project.description"
          :skills="project.skills"
          :link="project.url"
        />
      </div>
    </div>
    <div class="see-more-link">
      <router-link to="/works" class="links  animated-links">See more</router-link>
    </div>
    <h2>A word from my friends and team mates ❤️</h2>
    <Testimonials />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "../components/Presentation.vue";
import Project from "../components/Project.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "Home",
  components: {
    Presentation,
    Project,
    Testimonials,
  },
  methods:{
    featuredProjects(){
      const shuffled = this.$projects.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    }
  }
};
</script>
<style scoped>
h2 {
  margin: 50px 0px 15px 0px;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.column {
  width: 100%;
  flex: 33%;
  max-width: 33%;
  display: flex;
  padding: 10px 10px 10px 0px;
  display: flex;
  justify-content: center;
}
.project-card {
      min-height:315px;

  max-height: 350px;
  overflow: hidden;
}

.see-more-link {
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  color: black;
  font-weight: 400;
}
@media (max-width: 1024px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}
@media (max-width: 768px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
