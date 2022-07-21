<template>
  <div class="project">
    <div class="thumbnail section">
      <div class="section-content thumbnail-img">
        <img
          :src="
            require('@/assets/projects/' +
              getProject().url +
              '/' +
              getProject().thumbnail)
          "
          alt=""
        />
        <div class="overlay">
          <div class="overlay-text">
            <h1>{{ getProject().title }}</h1>
            <p>{{ getProject().description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-content">
        <div class="info-line">
          <div class="info-title">
            Skills
          </div>
          <div class="info-text">{{ getProject().infobox.skills }}</div>
        </div>
        <div class="info-separator"></div>
        <div class="info-line">
          <div class="info-title">
            Context
          </div>
          <div class="info-text">{{ getProject().infobox.context }}</div>
        </div>
        <div class="info-separator"></div>
        <div class="info-line">
          <div class="info-title">
            Mission
          </div>
          <div class="info-text">{{ getProject().infobox.mission }}</div>
        </div>
        <div class="info-separator"></div>
        <div class="info-line">
          <div class="info-title">
            Time
          </div>
          <div class="info-text">{{ getProject().infobox.time }}</div>
        </div>
        <div class="info-separator"></div>

        <div class="info-line">
          <div class="info-title" v-if="getProject().infobox.links">
            Links
          </div>
          <div class="info-text ">
            <a
              class="links animated-links"
              :href="link.link"
              target="_blank"
              v-for="(link, i) in getProject().infobox.links"
              :key="i"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-content">
        <component :is="$route.params.name" />
      </div>
    </div>
<!--
    <div class="section">
      <carousel :perPage="1" class=" section-content">
        <slide
          v-for="(image, i) in getProject().pictures"
          :key="i"
          class="carousel"
        >
          <img
            :src="
              require('@/assets/projects/' + getProject().url + '/' + image)
            "
            alt=""
          />
        </slide>
      </carousel>
    </div>
-->

  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
const javascriptmas = () =>
  import(
    /* webpackChunkName: "javascriptmas" */ "./Projects/Javascriptmas.vue"
  );
const ladies = () =>
  import(/* webpackChunkName: "ladies" */ "./Projects/Ladies.vue");
const monordo = () =>
  import(/* webpackChunkName: "monordo" */ "./Projects/Monordo.vue");

export default {
  name: "Project",
  components: {
    Carousel,
    Slide,
    javascriptmas,
    ladies,
    monordo,
  },
  methods: {
    backgroundStyles(project, thumbnail) {
      return {
        // any other styles you might need to add on as an example
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(@/assets/projects/${project}/${thumbnail}) no-repeat center center`,
        "background-size": "cover",
      };
    },
    getProject() {
      return this.$projects.find((x) => x.url == this.$route.params.name);
    },
  },
};
</script>
<style scoped>
.thumbnail {
  height: 350px;
  width: 100%;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
}
.overlay-text {
  position: absolute;
  bottom: 0;
  color: white;
  margin: 15px;
}
.thumbnail-img {
  width: 100vw;
  height: 350px;
  max-width: 950px;
  position: relative;
  overflow: hidden;
}
.thumbnail-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info-line {
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px 5px 0px;
}
.section-content {
  max-width: 950px;
  width: 100%;
}
.info-title {
  font-weight: bold;
  width: 100px;
}
.info-separator {
  width: 100%;
  height: 1px;
  background-color: #f3c2c1;
}
.section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.carousel {
  padding: 10px;
  height: 500px;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.carousel img {
  height: 100%;
  width: auto;
}

.lesson-box p {
  margin-top: 16px;
}
.links {
  font-style: italic;
  font-weight: bold;
  font-family: roboto;

  margin-right: 10px;
}

@media (max-width: 1200px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}
@media (max-width: 768px) {
  .info-title,
  .info-text {
    flex: 100%;
  }
  .carousel {
    height: auto;
  }
  .carousel img {
    width: 100%;
    object-fit: cover;
    height: auto;
  }
}
</style>
