import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProfileController {
  async handle(request: Request, response: Response) {
    const { nickname, seniority, description, photo, userId } = request.body;

    const profile = await prismaClient.profile.create({
      data: {
        nickname: nickname,
        seniority: seniority,
        description: description,
        photo: photo,
        userId: userId
      }
    })
    return response.json(profile);
  }
}