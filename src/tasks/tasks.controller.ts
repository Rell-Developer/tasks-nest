import { Controller, Get } from "@nestjs/common";
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService: TasksService){
        this.tasksService = tasksService
    }
    // Obtener tareas
    @Get("/tasks")
    getAllTasks(){
        return this.tasksService.getTasks();
    }
}