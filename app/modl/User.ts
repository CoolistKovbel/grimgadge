import mongoose from "mongoose";

export interface IUserSchema {
    username: string;
    password: string;
    email: string;
    metaData: {
        userAddress: string;
        userCustomSig: string;
        userCustomHash: string;
        userPinNFT: string;
    }
}

const UserSchema = new mongoose.Schema<IUserSchema>(
  {
    username: {
      type: String,
    },
    metaData: {
      userAddress: {
        type: String,
      },
      userCustomSig: {
        type: String,
      },
      userCustomHash: {
        type: String,
      },
      userPinNFT: {
        type: String,
      },
    },
    email: {
      type: String,
    },
    password: {
        type: String
    }
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUserSchema>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUserSchema>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUserSchema>("User", UserSchema);
}

export const User = UserModel;
