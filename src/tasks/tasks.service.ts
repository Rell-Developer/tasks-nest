import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private tasks = []

    getTasks(query: any) {
        return this.tasks;
    }

    getTask(id: number){
        const result = this.tasks.find( task => task.id === id);

        if(!result){
            return new NotFoundException("La tarea con ese id no exiset")
        }

        return result
    }

    createTask(task: CreateTaskDto ){
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task
    }

    updateTask(task: UpdateTaskDto){
        return "Actualizando tarea"
    }

    deleteTask(){
        return "Borrando tarea"
    }

    patchTask(task: UpdateTaskDto){
        return "Parcheando tarea"
    }
}
