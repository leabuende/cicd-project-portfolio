import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import VueCarousel from "vue-carousel";
import axios from "axios";

Vue.use(VueCarousel);
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.prototype.$loaded = false;

Vue.prototype.$projects = [
  {
    url: "monordo",
    title: "MonOrdo",
    description:
      "Conceptualize, design and implement a health-tech application",
    thumbnail: "project-card.png",
    skills: ["Development", "UX/UI", " Management"],
    tags: ["design", "code"],
    infobox: {
      skills: "Project management, UX/UI Design, UML Design, Vue.js",
      context: "A group project with five friends and tech enthousiasts",
      mission:
        "Designing and building a medical prescription generating and managing application",
      time: "4 weeks",
      links: [
        {
          name: "Project Report",
          link:
            "https://drive.google.com/file/d/1-oesoIgiSCRGo5UQLNWtPMfpxP5qcb1g/view?usp=sharing",
        },
      ],
    },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
    pictures: ["album/1.png", "album/2.png", "album/3.png"],
    lesson:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
  },
  {
    url: "javascriptmas",
    title: "24 Days of Javascriptmas",
    description:
      "Solving problems in Javascript every day unyil Christmas, and filming my solutions explained",
    thumbnail: "project-card.jpeg",
    skills: ["Development"],
    tags: [ "code"],
    infobox: {
      skills:
        "Vanilla JS, synthesize explanations and editing fast-paced videos",
      context:
        "December 2020, Scrumba released a 24 Days of Javascriptmas challenge.",
      mission:
        "Solving the exercices, and editing clear and understandable explanation videos",
      time: "24 Days (and not one more)",
      links: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/lea.buende/channel/",
        },
        {
          name: "Linkedin",
          link:
            "https://www.linkedin.com/posts/l%C3%A9a-buend%C3%A9-65b440174_il-y-a-14-jours-je-me-suis-lanc%C3%A9-un-nouveau-activity-6744175097650663424-W6Au",
        },
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: ["album/1.png", "album/2.png"],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "ladies",
    title: "Ladies of Code",
    description: "Community management for an organization of women in STEM",
    thumbnail: "project-card.png",
    skills: ["UI Design", "Community Management"],
    tags: ["design", "extra"],
    infobox: {
      skills:
        "Managing a Paris-based community of women in STEM",
      context:
        "Ladies of Code got me into coding, and I wanted to give back to the community !",
      mission:
        "Designing planning and posting visuals on Instagram, interact with the members",
      time: "6 months",
      links: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/ladiesofcode.paris",
        },
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: ["album/1.png", "album/2.png", "album/3.png", "album/4.png"],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
]

  Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  created : function () {
    setTimeout(()=>{this.$loaded=true, console.log(this.$loaded)},3000)
  }
}).$mount("#app");
