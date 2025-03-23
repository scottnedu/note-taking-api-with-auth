import { Schema, model, Document } from 'mongoose';

export interface INote extends Document {
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<INote>('Note', noteSchema);