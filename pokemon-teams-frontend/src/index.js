document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {

  TrainersAdapter.getAllTrainers()
    .then(trainers => {
      renderTrainers(trainers)
    })
}

function renderTrainers(trainers) {
  trainers.forEach(renderTrainer)
}

function renderTrainer(trainer) {
  let main = document.querySelector('.main')

  let trainerName = `<div class="card" data-id="${trainer.id}"><p>${trainer.name}</p></div>`

  let addPokemonButton = `<button data-trainer-id="${trainer.pokemons.trainer_id}">Add Pokemon</button>`

  let releasePokemonButton =
  `<ul>
    ${trainer.pokemons.map( pokemon => {
      return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
    }).join('')}
  </ul>`

  trainerName.innerHTML += addPokemonButton
  trainerName.innerHTML += releasePokemonButton
  main.innerHTML += trainerName
}
