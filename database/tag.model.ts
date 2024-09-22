import { Schema, model, models, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema<ITag>({
  name: { type: String, required: true, unique: true }, // Name must be unique and required
  description: { type: String, required: true }, // Description is required
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }], // Array of ObjectIds referencing Question model
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }], // Array of ObjectIds referencing User model
  createdOn: { type: Date, default: Date.now }, // Default to current date
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
