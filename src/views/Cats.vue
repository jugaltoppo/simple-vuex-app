<template>
    <div>
        <h1>Cats</h1>
        <table border=1>
            <thead>
                <th>Name</th>
                <th>Breed</th>
                <th>Color</th>
                <th>Weight</th>
            </thead>
            <tbody>
              <tr v-for="(cat, index) in cat" :key="index">
                <td><router-link :to="`/pets/cats/${index}`">{{ cat.name }}</router-link></td>
                <td>{{ cat.breed }}</td>
                <td>{{ cat.color }}</td>
                <td>{{ cat.weight }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cat'
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

</style>
