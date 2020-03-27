import cat from '@/data/cats.js'
import dog from '@/data/dogs.js'

export default {
  cat,
  dog,
  pets: [...cat, ...dog]
}
