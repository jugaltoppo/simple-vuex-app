export default {
  getCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  },
  getDogs: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'dog'
    })
  }
}
