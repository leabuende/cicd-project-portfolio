<template>
  <div class="Blog">
      <h2 class="title">My latest Medium articles 🚀</h2>
    <div class="container">
      <div class="column" v-for="article in articles" :key="article.title">
        <Article
          :name="article.title"
          :thumbnail="article.thumbnail"
          :description="article.description"
          :categories="article.categories"
          :date="article.pubDate"
          :link="article.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Article from "../components/Article.vue";
export default {
  name: "Blog",
  components: {
    Article,
  },
  data() {
    return {
      articles: "",
    };
  },
  mounted() {
    this.$http
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lea.buende"
      )
      .then((response) => (this.articles = response.data.items));
  },
};
</script>

<style scoped>
.title{
    font-size:30px;
    margin:0px 0px 32px 10px;
}
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.column {
  width: 100%;
  flex: 25%;
  max-width: 25%;
  display: flex;
  padding: 10px;
  display: flex;
  justify-content: center;
}

@media (max-width: 1200px) {
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
  .category-filter {
      font-size:16px;
  }
}
</style>
