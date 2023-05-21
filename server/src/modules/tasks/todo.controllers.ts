import { Request, Response } from "express";

export const getAllTodo = async (req: Request, res: Response) => {
  try {
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};
