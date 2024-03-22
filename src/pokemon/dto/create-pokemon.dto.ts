import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    
    @ApiProperty()
    @IsString()
    @MinLength(1)
    name: string;

    @ApiProperty()
    @Min(1)
    @IsNumber()
    @IsInt()
    no: number;
}
