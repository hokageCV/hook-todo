import { Request, Response } from "express";
import TodoModel from "./todo.model";

export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find({});

    return res.status(200).json({
      data: {
        message: "All todos fetched successfully",
        allTodo: todos,
      },
    });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const { task } = req.body;

  try {
    const newTodo = await TodoModel.create({ task });

    return res.status(200).json({
      data: {
        message: "Todo created successfully",
        todo: newTodo,
      },
    });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const { task } = req.body;

  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(taskId, { task }, { new: true });
    if (!updatedTodo) return res.status(404).json({ message: "Todo not found" });

    return res.status(200).json({
      data: {
        message: "Todo updated successfully",
        updatedTodo: updatedTodo,
      },
    });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(taskId);
    if (!deletedTodo) return res.status(404).json({ message: "Todo not found" });

    return res.status(200).json({
      data: {
        message: "Todo deleted successfully",
        deletedTodo: deletedTodo,
      },
    });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};
