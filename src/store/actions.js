export function tmp ({state}, payload) {
  console.log('tmp', this)
  this.$axios.get('').then(response => console.log(response))
}
