import axios from 'axios'
import * as cheerio from 'cheerio'

export const crawlPokemon = async (): Promise<string[]> => {
  const result = await axios.get('https://www.pokemon.com/us')
  const html = result.data

  const $ = cheerio.load(html)

  const pokemons = $('#pokemon-character-slider').find('.slider li > img')

  const pokemonList = pokemons.map((_index, element) => $(element).attr('alt'))

  return pokemonList.get()
}
