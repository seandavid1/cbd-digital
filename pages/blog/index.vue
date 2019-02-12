<template>
  <b-container>
    <b-row>
      <b-col
        xl="12"
        lg="12"
        md="12"
        sm="12">
        <div>
          <h1>CBD Digital Blog</h1>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12">
        <transition name="fade">
          <div
            v-if="blog">
            <b-card
              :title="blogRSS[0].title._text"
              :img-src="BlogImage(0)"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p
                class="card-text"
                v-html="BlogDescription(0)"/>
              <b-button
                :href="blogRSS[0].link._text"
                variant="primary">Read More</b-button>
            </b-card>
          </div>
        </transition>
      </b-col>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12">
        <transition name="fade">
          <div
            v-if="blog">
            <b-card
              :title="blogRSS[1].title._text"
              :img-src="BlogImage(1)"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p
                class="card-text"
                v-html="BlogDescription(1)"/>
              <b-button
                :href="blogRSS[1].link._text"
                variant="primary">Read More</b-button>
            </b-card>
          </div>
        </transition>
      </b-col>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12">
        <transition name="fade">
          <div
            v-if="blog">
            <b-card
              :title="blogRSS[2].title._text"
              :img-src="BlogImage(2)"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p
                class="card-text"
                v-html="BlogDescription(2)"/>
              <b-button
                :href="BlogLink(2)"
                variant="primary">Read More</b-button>
            </b-card>
          </div>
        </transition>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <transition name="fade">
          <div v-if="blog">
            <div class="blog-pagination">
              <b-pagination-nav
                :number-of-pages="10"
                v-model="currentPage"
                base-url="#" />
              <div class="mt-4">currentPage: {{ currentPage }}</div>
            </div>
          </div>
        </transition>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      errors: []
    }
  },
  computed: {
    custom() {
      return this.$store.state.pagesACF.find(field => field.id === 5)
    },
    about() {
      return this.$store.state.about
    },
    blog() {
      return this.$store.state.blog
    },
    blogRSS() {
      return this.$store.state.blog.rss.channel.item
    }
  },
  created() {
    this.$store.dispatch('getPagesACF')
    // this.$store.dispatch('getPages')
    this.$store.dispatch('getAboutUs')
    this.$store.dispatch('getBlogs')
  },
  methods: {
    BlogDescription(num) {
      var description = this.$store.state.blog.rss.channel.item[num].description
        ._text
      var descriptionIndex = description.indexOf('</div>')
      descriptionIndex += 6
      var cleanDescription = description.substring(descriptionIndex)
      return cleanDescription
    },
    BlogImage(num) {
      var description = this.$store.state.blog.rss.channel.item[num].description
        ._text
      var wrapperIndex = description.indexOf('</div>')
      var imageWrapper = description.substring(0, wrapperIndex)
      var imageIndex1 = imageWrapper.indexOf('src')
      imageIndex1 += 5
      var imageIndex2 = imageWrapper.indexOf('alt')
      imageIndex2 -= 2
      var image = imageWrapper.substring(imageIndex1, imageIndex2)
      return image
    },
    BlogLink(num) {
      var link = this.$store.state.blog.rss.channel.item[num].link._text
      return link
    }
  },
  layout: 'default'
}
</script>

<style scoped>
img.hs-featured-image {
  display: none !important;
}
article > img {
  max-height: 210px;
}
h4.card-title {
  font-size: 18px;
  font-weight: bold;
  height: 61px;
}
p.card-text {
  max-height: 165px;
  overflow: hidden;
}
article.card {
  margin: 0 auto;
}
.blog-pagination {
  text-align: center;
  float: left;
  width: 100%;
}
.blog-pagination nav {
  margin: 0 auto;
  width: 310px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
