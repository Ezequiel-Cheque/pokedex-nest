import { Injectable, BadRequestException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interfaces';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {
  
  private readonly axios: AxiosInstance = axios;
  
  constructor(
    private readonly pokemonService: PokemonService
  ){}

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>("https://pokeapi.co/api/v2/pokemon?limit=10");
    
    data.results.forEach(async ({ name, url }) => {
      
      const segments = url.split('/');
      const no = +segments[segments.length -2]
      
      try {
        const newPokemon = await this.pokemonService.create({name, no});
        console.log(newPokemon)
      } catch (error) {
        console.log("Error");
      }
    
    });
    
    return "Done";
  }

  
}
