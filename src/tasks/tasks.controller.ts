import { Controller, Delete, Get, Patch, Post, Put, Body, Query, Param, UsePipes, ValidationPipe} from "@nestjs/common";
import { TasksService } from './tasks.service';

import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller("/tasks")
@ApiTags("tasks")
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService: TasksService){
        this.tasksService = tasksService
    }
    // Obtener tareas
    @Get()
    @ApiOperation({ summary: "Get all tasks"})
    @ApiResponse({ status: 200, description: "Return all tasks"})
    @ApiResponse({ status: 403, description: "Forbidden"})
    getAllTasks(@Query() query:any ){
        return this.tasksService.getTasks(query);
    }

    @Get("/:id")
    @ApiOperation({ summary: "Get one task by id "})
    getTasks(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: "Create a task" })
    createTask(@Body() task: CreateTaskDto){
        return this.tasksService.createTask(task);
    }

    @Put()
    @ApiOperation({ summary: "update a task" })
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
    }

    @Delete()
    @ApiOperation({ summary: "Delete a task" })
    deleteTask(){
        return this.tasksService.deleteTask();
    }

    @Patch()
    @ApiOperation({ summary: "Patch a task" })
    patchTaskStatus(@Body() task: UpdateTaskDto){
        return this.tasksService.patchTask(task);
    }
}