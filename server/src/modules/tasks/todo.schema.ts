import { z } from "zod";
import mongoose from "mongoose";

const payload = {
  body: z.object({
    task: z
      .string({
        required_error: "Task is required",
      })
      .nonempty("Task should not be empty"),
  }),
};

const params = {
  params: z.object({
    taskId: z
      .string({
        required_error: "Task Id is required",
      })
      .refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid ID",
      }),
  }),
};

export const CreateTodoSchema = z.object({
  ...payload,
});

export const UpdateTodoSchema = z.object({
  ...payload,
  ...params,
});

export const DeleteTodoSchema = z.object({
  ...params,
});
