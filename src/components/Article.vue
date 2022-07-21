<template>
  <div class="article">
    <div class="thumbnail" :style="backgroundStyles(thumbnail)">
      <h1>{{ name }}</h1>
    </div>
    <div class="description">
        <p class="date">Published {{date.split(' ')[0]}}</p>
        <div class="categories">
            <div class="category" v-for="category in categories" :key="category">{{category}}</div>
        </div>
      <p class="description-text">
        {{ filterContent(description) }}
      </p>
      <div class="button">
          <a :href="link" target="_blank">
      <button class="white-button">Read more</button>

          </a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    name: String,
    thumbnail: String,
    description: String,
    categories: Array,
    date: String,
    link:String
  },
  methods: {
    filterContent(c) {
      return c.substring(c.lastIndexOf("<p>") + 3, c.lastIndexOf("</p>"));
    },
    backgroundStyles(thumbnail) {
      return {
        // any other styles you might need to add on as an example
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${thumbnail}) no-repeat center center`,
        "background-size": "cover",
      };
    },
  },
};
</script>
<style scoped>
.article {
  width: 100%;
  height: auto;
    transition: .5s;
border-radius: 5px;
border:0.7px rgba(209, 209, 209, 0.705) solid;

}
.article:hover{
      box-shadow: 0 0 11px rgba(33,33,33,.2); 
      transform: translateY(-5px);

}
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
.date{
    font-family: Roboto;
    font-weight: light;
    font-style: italic;
    font-size:12px;
}
.categories{
    display: flex;
    margin:10px 0px 10px 0px;
}
.category{
    background: #F3C2C1;
    padding:2px 5px 2px 5px;
    margin-right:10px;
    font-size:14px;
}
.description{
    padding: 15px;
}
.description-text{
     overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
   min-height:38px;
}
.button{
   
    margin-top:15px;
    width:100%;
    display: flex;
    justify-content: flex-end;
}
</style>
