import { IsInt, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    
    @IsString()
    @MinLength(1)
    name: string;

    @Min(1)
    @IsNumber()
    @IsInt()
    no: number;
}
