import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema<ICategory>(
  {
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<ICategory>('Category', categorySchema);