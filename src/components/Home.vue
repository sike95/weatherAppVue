<template>
  <div id="secure" class="container">
  <div class="infomation">
    <h1> City : {{user.city}}</h1>
    <h1> Weather : {{user.weather}}</h1>
    <h1> Temp : {{user.temperature}}</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'secure',
  data () {
    return {
      url: 'http://api.openweathermap.org/data/2.5/forecast?q=',
      apiKey: 'b2dd5d58fc72d4db08704ab8462dc7ef',
      user: {
        city: '',
        weather: '',
        temperature: ''
      },
      weather: []
    }
  },
  methods: {
    fetch: function (city, code) {
      this.$http.get(`${this.url}${city},${code}&APPID=${this.apiKey}&units=metric`).then(response => {
        this.weather = response
        console.log(this.weather)
        if (this.weather) {
          this.user.city = this.weather.body.city.name
          this.user.weather = this.weather.body.list[0].weather[0].description
          this.user.temperature = this.weather.body.list[0].main.temp
        }
      }).catch(error => {
        console.log(error)
        if (error.status) {
          alert(' Error: 404\n Message: City not found \n Please make sure you entered the details')
          this.fetch('johannesburg', 'za')
        }
      })
    }
  },
  mounted: function () {
    var location = JSON.parse(localStorage.getItem('location'))
    if (location) {
      this.fetch(location.city, location.code)
    } else {
      this.fetch('johannesburg', 'za')
    }
  }
}
</script>

<style>
</style>
