import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { Todo } from "./schemas/todo.schema"
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() createTodoDto: CreateTodoDto
  ): Promise<Todo> {
    console.log("controller", createTodoDto)
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @Header('Cache-Control', 'none')
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Todo> {
    return this.todosService.remove(id);
  }
}
