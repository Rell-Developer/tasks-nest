// Imports
import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from './tasks.service';
// Module Declaration
@Module({
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}