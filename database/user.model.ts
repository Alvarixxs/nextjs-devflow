import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional password field
  bio: { type: String }, // Optional bio field
  picture: { type: String, required: true }, // URL or path to the picture
  location: { type: String }, // Optional location field
  portfolioWebsite: { type: String }, // Optional portfolio website URL
  reputation: { type: Number, default: 0 }, // Default reputation set to 0
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }], // Array of ObjectIds referencing another model
  joinedAt: { type: Date, default: Date.now }, // Set the default join date to now
});

const User = models.User || model("User", UserSchema);

export default User;
