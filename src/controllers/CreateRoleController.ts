import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateRoleController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const newRole = await prismaClient.role.create({
      data:{
        name: name
      }
    })
    return response.json(newRole);
  }
}