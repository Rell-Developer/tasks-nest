import { IsString, IsNumber, Max, IsNotEmpty } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    email: string

    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    password: string
}