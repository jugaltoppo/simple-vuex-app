<template>
  <div class="home">
    <p>There is currently {{ getCats.length }} cats</p>
    <p>There is currently {{ getDogs.length }} dogs</p>
    <h1>Adopt a new best friend</h1>
    <button @click="toggler">Add new pet</button>
    <form v-if="toggleForm" @submit.prevent="handleSubmit">
      <br>
      <label for="species">Select species</label>
      <select id="species" v-model="formData.species">
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>
      <label for="name">Name</label>
      <input id="name" v-model="formData.name">

      <label for="breed">Breed</label>
      <input id="breed" v-model="formData.breed">

      <label for="gender">Gender</label>
      <input id="gender" v-model="formData.gender">

      <label for="age">Age</label>
      <input id="age" type="number" v-model="formData.age">

      <label for="color">Color</label>
      <input id="color" v-model="formData.color">

      <label for="weight">Weight</label>
      <input id="weight" type="number" v-model="formData.weight">

      <label for="location">Location</label>
      <input id="location" v-model="formData.location">

      <label for="notes">Notes</label>
      <input id="notes" v-model="formData.notes">

      <button>Submit</button>

    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      toggleForm: false,
      formData: {
        name: '',
        breed: '',
        gender: '',
        age: '',
        color: '',
        weight: '',
        location: '',
        notes: '',
        species: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCats',
      'getDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    toggler: function () {
      this.toggleForm = !this.toggleForm
    },
    handleSubmit () {
      const payload = this.formData
      this.addPet(payload)
      this.formData = {
        name: '',
        breed: '',
        gender: '',
        age: '',
        color: '',
        weight: '',
        location: '',
        notes: '',
        species: ''
      }
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  text-align: left;
}
input{
  margin-bottom: 1rem;
}
</style>
