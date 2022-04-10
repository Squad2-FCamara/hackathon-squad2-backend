import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetProfileByNameController {
  async handle(request: Request, response: Response) {

    const nome = request.params;
    console.log(nome.nickname)

    const users = await prismaClient.profile.findMany({
      where:{
        nickname: nome
      }
    })
    return response.json(users);
  }
}