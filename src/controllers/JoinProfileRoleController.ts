import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class JoinProfileRoleController {
  async handle(request: Request, response: Response) {
    const { profileId, roleId } = request.body;

    const newProfileRole = await prismaClient.profile.update({
      where:{
        id: profileId
      },
      data:{
        roleId: roleId
      }
    })
    return response.json(newProfileRole);
  }
}