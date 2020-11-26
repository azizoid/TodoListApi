import { Injectable } from '@nestjs/common';

import { Model } from "mongoose"
import { InjectModel } from '@nestjs/mongoose';

import { Todo, TodoDocument } from './schemas/todo.schema';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<TodoDocument>,
  ) { }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto)
    return createdTodo.save()
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id)
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true })
  }

  async remove(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndRemove(id)
  }
}
