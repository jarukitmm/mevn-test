<template>
  <div>
    <md-card class="cardlogin">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Medium size</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img src="/assets/examples/card-weather.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      login: {},
      errors: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/api/auth/login/`, this.login)
      .then(response => {
        localStorage.setItem('jwtToken', response.data.token)
        this.$router.push({
          name: 'BookList'
        })
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
    register () {
      this.$router.push({
        name: 'Register'
      })
    }
  }
}

</script>

<style scoped>
    .md-card {
        width: 30em;
        margin: 1em;
        display: inline-block;
        vertical-align: middle;
        border-radius: 20px;
    }
</style>
