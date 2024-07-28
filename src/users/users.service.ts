import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService){}

    // Obtencion de usuarios
    getUsers(){
        return this.prisma.user.findMany();
    }

    // Creacion de usuarios
    createUser(user: CreateUserDto){
        return this.prisma.user.create({ data: user });
    }
}
