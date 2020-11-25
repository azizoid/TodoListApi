import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop()
  checked: boolean;

  @Prop()
  userId: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);