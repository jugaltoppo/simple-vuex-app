<template>
     <div>
        <h1>Dogs</h1>
        <table border=1>
            <thead>
                <th>Name</th>
                <th>Breed</th>
                <th>Color</th>
                <th>Weight</th>
            </thead>
            <tbody>
              <tr v-for="(dog, index) in dogs" :key="index">
                <td><router-link :to="`/pets/dogs/${index}`">{{ dog.name }}</router-link></td>
                <td>{{ dog.breed }}</td>
                <td>{{ dog.color }}</td>
                <td>{{ dog.weight }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>

<style scoped>

table{
  margin: 1rem auto;
}

th{
    padding: 1rem;
}
a{
  border: none;
}

</style>
