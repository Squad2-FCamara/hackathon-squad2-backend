import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreaterUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request. body

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      }
    })
    return response.json(user);
  }
}