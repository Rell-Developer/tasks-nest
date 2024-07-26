import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    // Variables locales
    private users = [
        {
            id:1,
        },
        {
            id:2
        }
    ]

    // Obtencion de usuarios
    getUsers(){
        return this.users;
    }
}
