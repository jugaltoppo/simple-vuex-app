<template>
    <div>
        <h1>{{ $route.params.species }} Detail</h1>
        <p><strong>Name:</strong> {{ animal.name }}</p>
        <p><strong>Breed:</strong> {{ animal.breed }}</p>
        <p><strong>Gender:</strong> {{ animal.gender }}</p>
        <p><strong>Age:</strong> {{ animal.age }}</p>
        <p><strong>Color:</strong> {{ animal.color }}</p>
        <p><strong>Weight:</strong> {{ animal.weight }}</p>
        <p><strong>Location:</strong> {{ animal.location }}</p>
        <p><strong>Notes:</strong> {{ animal.notes }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
