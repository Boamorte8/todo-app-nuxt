import { db } from "../../db";
import { nanoid } from "nanoid";

import { Item } from "../../../models/item";

export default defineEventHandler(async (event) => {
  const body = await useBody<Partial<Item>>(event);

  if (!body.item)
    throw createError({
      statusCode: 404,
      statusMessage: "You need an item to be created",
    });

  const newTodo: Item = {
    id: nanoid(),
    item: body.item,
    completed: false,
  };

  db.todos.push(newTodo);

  return {
    message: "Item created successfully",
    todo: newTodo,
  };
});
