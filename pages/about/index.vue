<template>
  <div>
    <b-container>
      <b-row>
        <b-col
          xl="8"
          lg="8"
          md="8"
          sm="12">
          <div>
            <h1>About Us</h1>
            <div>
              <transition name="fade">
                <div
                  v-if="about.content"
                  v-html="about.content.rendered"/>
              </transition>
            </div>
        </div></b-col>
        <b-col
          xl="4"
          lg="4"
          md="4"
          sm="12">
          <b-jumbotron
            bg-variant="primary"
            text-variant="white"
            border-variant="dark"
            class="sidebar">
            <template slot="header">
              Get Your <br>Custom Quote
            </template>
            <h2 v-if="aboutOne">About You:</h2>
            <span
              class="custom-quote-message"
              v-html="customMessage"/>
            <div id="cbd-hubspot-form">&nbsp;</div>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <script
      charset="utf-8"
      type="text/javascript"
      src="//js.hsforms.net/forms/shell.js"/>
    <script charset="utf-8">
      hbspt.forms.create({
      portalId: '381132',
      formId: '4019399f-6e52-42ab-882b-27ccf9cf750d',
      target: '#cbd-hubspot-form',
      onFormReady($form, ctx){
      console.log( 'ready!' );
      $('#cbd-hubspot-form input#firstname-4019399f-6e52-42ab-882b-27ccf9cf750d').addClass('found-you');
      $('#cbd-hubspot-form select').val('{{ choiceOne }}').change();
      }
      });
    </script>

    <script type="text/javascript">
      $(document).ready(function () {
      alert()
      })
    </script>

  </div>

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
    choiceOne() {
      const choice = this.$store.state.choiceOne
      if (choice === 'nothing') {
        return choice
      } else if (choice === 'cult') {
        return 'I am a cannabis cultivator/grower.'
      } else if (choice === 'man') {
        return 'I am a cannabis-infused products manufacturer.'
      } else if (choice === 'equip') {
        return 'I am a cannabis equipment<br> or service provider.'
      }
    },
    aboutOne() {
      const choice = this.$store.state.choiceOne
      if (choice === 'nothing') {
        return choice
      } else if (choice === 'cult') {
        return 'cannabis cultivator/grower'
      } else if (choice === 'man') {
        return 'cannabis-infused products manufacturer'
      } else if (choice === 'equip') {
        return 'cannabis equipment or service provider'
      }
    },
    aboutTwo() {
      return this.$store.state.choiceTwo
    },
    customMessage() {
      var choiceOne = this.$store.state.choiceOne
      var choiceTwo = this.$store.state.choiceTwo
      var choiceTwoMod = ''
      if (choiceTwo) {
        var choiceTwoMod = choiceTwo.replace('I', 'you')
      }
      var response = ''
      if (choiceOne === null && choiceTwo === null) {
        return '<strong>Tell us more about you:</strong>'
      } else {
        if (choiceOne === 'cult') {
          response = 'You are a cannabis cultivator or grower'
        } else if (choiceOne === 'man') {
          response = 'You are a cannabis-infused products manufacturer'
        } else if (choiceOne === 'equip') {
          response = 'You are a cannabis equipment or service provider'
        }
        if (choiceTwo === null) {
          response += '. <br><br><strong>Tell us more about you:</strong>'
          return response
        } else if (choiceTwo === 'logo') {
          response +=
            ', and are in need of help with a new logo or mission statement.'
          return response
        } else if (choiceTwo === 'web') {
          response +=
            ', and are in need of help with website design and maintenance.'
          return response
        } else {
          response += ', and '
          response += choiceTwoMod
          return response
        }
      }
    }
  },
  created() {
    this.$store.dispatch('getPagesACF')
    // this.$store.dispatch('getPages')
    this.$store.dispatch('getAboutUs')
  },
  methods: {
    changeForm() {
      console.log('changed')
      jquery('h1').css('display', 'none')
    }
  },
  layout: 'default'
}
</script>

<style>
</style>
