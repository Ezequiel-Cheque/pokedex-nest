import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {

    @ApiProperty()
    name: string;

    @ApiProperty()
    no: number;
}
