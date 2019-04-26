<template>
  <div id="secure" class="form-group">
    <label for="city">City:</label>
      <input type="text" name="city" class="form-control" v-model="location.city">

    <label for="code">Code:</label>
      <input type="text" name="code" class="form-control" v-model="location.code"><p>eg: GB, ZA, US</p>

      <button class="btn btn-primary" v-on:click="save">Submit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location: {
        city: '',
        code: ''
      }
    }
  },
  methods: {
    save: function () {
      if (this.location) {
        localStorage.setItem('location', JSON.stringify(this.location))
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
</style>
