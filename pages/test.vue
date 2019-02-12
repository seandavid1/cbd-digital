<template>
  <div>
    <!-- SCROLLSPY TEST -->
    <b-navbar
      toggleable="md"
      type="dark"
      variant="primary"
      fixed="top">
      <b-navbar-nav
        v-b-scrollspy:nav-scroller
        pills>
        <b-nav-item
          href="#homepage-top-row"
          @click="scrollIntoView">Home</b-nav-item>
        <b-nav-item
          href="#services"
          @click="scrollIntoView">Services</b-nav-item>
        <b-nav-item
          href="#fat"
          @click="scrollIntoView">@fat</b-nav-item>
        <b-nav-item
          href="#mdo"
          @click="scrollIntoView">@mdo</b-nav-item>
        <b-nav-item-dropdown
          text="Dropdown 1,2,3"
          right-alignment>
          <b-dropdown-item
            href="#one"
            @click="scrollIntoView">one</b-dropdown-item>
          <b-dropdown-item
            href="#two"
            @click="scrollIntoView">two</b-dropdown-item>
          <b-dropdown-divider/>
          <b-dropdown-item
            href="#three"
            @click="scrollIntoView">three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item
          href="#pi0"
          @click="scrollIntoView">@pi0</b-nav-item>
      </b-navbar-nav>
    </b-navbar>


    <b-container
      id="nav-scroller"
      ref="content"
      fluid
      style="position:relative; height:500px; overflow-y:scroll;">
      <b-row id="homepage-top-row">
        <b-col class="homepage-top-col-1">
          <h1
            id="home"
            class="title"><logo/></h1>
          <p>With expertise in the New England cannabis market, CBD Digital brings 20+ years of B2B marketing strategy to the table—including brand development, inbound marketing, and website and packaging design. We partner with you to achieve new opportunities and sustained success in the cannabis industry, and are committed to your business goal: growth!</p>

          <transition name="fade">
            <b-button
              v-b-popover.hover="'I am popover content!'"
              v-if="showUserGuide == false"
              title="Popover Title"
              size="lg"
              variant="primary"
              @click="showUserGuide1 = true, showUserGuide = true">How can we help you?
            </b-button>
        </transition></b-col>
      </b-row>
      <!-- User Guide -->

      <!-- User Guide Row 1 -->
      <transition name="fade">
        <b-row
          v-if="showUserGuide1"
          id="user-guide"
          class="user-guide-row row-1">
          <!-- User Guide, Column 1 -->
          <b-col>
            <b-button
              size="lg"
              variant="info"
              @click="getButtonTwoText('cult')">I am a cannabis cultivator/grower.
            </b-button>
          </b-col>
          <!-- User Guide, Column 2 -->
          <b-col>
            <b-button
              size="lg"
              variant="info"
              @click="getButtonTwoText('man')">I am a cannabis-infused products manufacturer.
            </b-button>
          </b-col>
          <!-- User Guide, Column 3 -->
          <b-col>
            <b-button
              size="lg"
              variant="info"
              @click="getButtonTwoText('equip')">I am a cannabis equipment or service provider.
            </b-button>
          </b-col>
        </b-row>
      </transition>

      <!-- User Guide Row 2 -->
      <transition name="slide-fade">
        <b-row
          v-if="showUserGuide2"
          id="user-guide"
          class="user-guide-row row-2">
          <!-- User Guide, Column 1 -->
          <b-col>
            <nuxt-link to="/about">
              <b-button
                size="lg"
                variant="info"
                @click="updateUserChoiceTwo('logo')">I need help with<br> a new logo/mission statement.
              </b-button>
            </nuxt-link>
          </b-col>
          <!-- User Guide, Column 2 -->
          <b-col>
            <nuxt-link to="/about">
              <b-button
                size="lg"
                variant="info"
                @click="updateUserChoiceTwo(buttonTwoText)"
                v-html="buttonTwoText"/>
            </nuxt-link>
          </b-col>
          <!-- User Guide, Column 3 -->
          <b-col>
            <nuxt-link to="/about">
              <b-button
                size="lg"
                variant="info"
                @click="updateUserChoiceTwo('web')">I need help with <br>website design and maintenance
              </b-button>
            </nuxt-link>
          </b-col>
        </b-row>
      </transition>
      <!-- END USER GUIDE -->
      <b-row id="services">
        <b-col>
          <h2>Services</h2>
        </b-col>
      </b-row>
      <b-row>
        <!--COL 1 -->
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=24"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button
              href="#"
              variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <!-- COL 2 -->
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=26"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button
              href="#"
              variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <!-- COL 3 -->
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=28"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button
              href="#"
              variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
      <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
      tempor. Laborum consequat non elit enim exercitation cillum aliqua
      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
      laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
      Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
      nisi sit est tempor laborum mollit labore officia laborum excepteur
      commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
      ipsum commodo tempor sunt in proident.</p>
      <h4 id="fat">@fat</h4>
      <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
      tempor. Laborum consequat non elit enim exercitation cillum aliqua
      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
      laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
      Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
      nisi sit est tempor laborum mollit labore officia laborum excepteur
      commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
      ipsum commodo tempor sunt in proident.</p>
      <h4 id="mdo">@mdo</h4>
      <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
      tempor. Laborum consequat non elit enim exercitation cillum aliqua
      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
      laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
      Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
      nisi sit est tempor laborum mollit labore officia laborum excepteur
      commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
      ipsum commodo tempor sunt in proident.</p>
      <h4 id="one">one</h4>
      <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
      tempor. Laborum consequat non elit enim exercitation cillum aliqua
      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
      laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
      Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
      nisi sit est tempor laborum mollit labore officia laborum excepteur
      commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
      ipsum commodo tempor sunt in proident.</p>
      <h4 id="two">two</h4>
      <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
      tempor. Laborum consequat non elit enim exercitation cillum aliqua
      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
      laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
      Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
      nisi sit est tempor laborum mollit labore officia laborum excepteur
      commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
      ipsum commodo tempor sunt in proident.</p>
      <h4 id="three">three</h4>
      <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
      tempor. Laborum consequat non elit enim exercitation cillum aliqua
      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
      laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
      Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
      nisi sit est tempor laborum mollit labore officia laborum excepteur
      commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
      ipsum commodo tempor sunt in proident.</p>
      <h4 id="pi0">@pi0</h4>
      <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
      tempor. Laborum consequat non elit enim exercitation cillum aliqua
      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
      laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
      Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
      nisi sit est tempor laborum mollit labore officia laborum excepteur
      commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
      ipsum commodo tempor sunt in proident.</p>
  </b-container></div>
  <!-- END SCROLLPSPY TEST -->
</template>

<script>
import Logo from '~/components/Logo.vue'
import Carousel from '~/components/Carousel.vue'

export default {
  components: {
    Logo,
    Carousel
  },
  data: function() {
    return {
      showUserGuide: false,
      showUserGuide1: false,
      showUserGuide2: false,
      cultivator: false,
      manufacturer: false,
      equipment: false,
      buttonTwoText: 'Just some text',
      cultivatorBtnTxt:
        'I need help with content/messaging to reach retailers and value-added resellers.',
      manufacturerBtnTxt:
        'I need help with content/messaging to reach retailers and dispensaries.',
      equipmentBtnTxt:
        'I need help with content/messaging to reach growers and retailers.'
    }
  },
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault()
      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop
      }
    },
    getButtonTwoText: function(choice) {
      if (choice === 'cult') {
        this.cultivator = true
        this.buttonTwoText = this.cultivatorBtnTxt
        this.showUserGuide1 = false
        this.showUserGuide2 = true
      }
      if (choice === 'man') {
        this.manufacturer = true
        this.buttonTwoText = this.manufacturerBtnTxt
        this.showUserGuide1 = false
        this.showUserGuide2 = true
      }
      if (choice === 'equip') {
        this.equipment = true
        this.buttonTwoText = this.equipmentBtnTxt
        this.showUserGuide1 = false
        this.showUserGuide2 = true
      }
      this.updateUserChoice(choice)
    },
    updateUserChoice(choice) {
      this.$store.commit('updateUserChoiceOne', choice)
    },
    updateUserChoiceTwo(choice) {
      this.$store.commit('updateUserChoiceTwo', choice)
    },
    counter() {
      this.$store.commit('increment')
    }
  },
  layout: 'homepage'
}
</script>
<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#homepage .carousel {
  margin-bottom: 40px;
}

#homepage article.card {
  margin: 0 auto;
}
#homepage-top-area {
  padding-bottom: 60px;
  height: 420px;
}
div#homepage-top-row {
  height: 240px;
}
.homepage-top-col-1 {
  text-align: center;
  padding-bottom: 0px;
  height: 240px;
}
.homepage-top-col-2 {
  text-align: center;
  height: 300px;
}
#user-guide {
  text-align: center;
}
.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transform: translateY(10px);
  transition: all 2.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#services {
  margin-top: 30px;
}
</style>
