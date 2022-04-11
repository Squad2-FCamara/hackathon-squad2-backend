import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UpdateProfileController {
  async handle(request: Request, response: Response) {
    const { nickname, seniority, description, photo, profileId } = request.body;

    const updateProfile = await prismaClient.profile.update({
      data:{
        nickname: nickname,
        seniority: seniority,
        description: description,
        photo: photo,
      },
      where:{
        id: profileId
      }
    })
     
    return response.json(updateProfile);
  }
}