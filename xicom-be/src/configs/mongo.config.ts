import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

export const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://dadzheromani:PeWU5zRkj2Wk9DCj@cluster0.tusysu3.mongodb.net/chatsDB?retryWrites=true&w=majority';

const useConnectDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.path === '/') next();
    if (mongoose.connections[0].readyState) {
      next();
    } else if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI);
      console.log('Connected to MongoDB');
      next();
    }
  } catch (error) {
    console.log('Error Connecting to MongoDB', { error });
  }
};

export default useConnectDB;
