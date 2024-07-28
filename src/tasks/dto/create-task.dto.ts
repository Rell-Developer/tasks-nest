import { IsString, MinLength } from "class-validator"

export class CreateTaskDto{
    // Validaciones de los campos
    @IsString()
    @MinLength(1)
    title: string

    @IsString()
    @MinLength(1)
    description: string
}