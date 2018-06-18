const baseUrl = "http://localhost:3000"
const pokemonsUrl = `${baseUrl}/pokemons`
const trainersUrl = `${baseUrl}/trainers`

function urlFor(id) {
  return pokemonsUrl + '/' + id
}

const PokemonsAdapter = {

  getAllPokemons: function getAllPokemons() {
    return fetch(pokemonsUrl)
      .then(resp => resp.json())
  },

  getOnePokemon: function getOnePokemon(id) {
    return fetch(urlFor(id))
      .then(resp => resp.json())
  },

  createPokemon: function createPokemon(data) {
    return fetch(baseUrl, {
      body: JSON.stringify(data),
      Headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })
    .then(resp => resp.json())
  },

  updatePokemon: function updatePokemon(id, data) {
    return fetch(urlFor(id), {
      body: JSON.stringify(data),
      Headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
    })
    .then(resp => resp.json())
  },

  deletePokemon: function deletePokemon(id) {
    return fetch(urlFor(id), {
      // body: JSON.stringify(data),
      Headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
    })
    .then(resp => resp.json())
  }

}


const TrainersAdapter = {

  getAllTrainers: function getAllTrainers() {
    return fetch(trainersUrl)
      .then(resp => resp.json())
  }

}
