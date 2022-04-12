import { prismaClient } from "../database/prismaClient";

export default class RoleRepository {
  public async create( name: string ) {
    const role = await prismaClient.role.create({
      data:{
        name: name
      }
    })
    return role;
  }

  public async update( name: string, roleId: number ) {
    const skill = await prismaClient.role.update({
      where: {
        id: roleId
      },
      data: {
        name: name
      }
    })
    return skill;
  }

  public async delete(roleId: number){
    const role = await prismaClient.role.delete({
      where:{
        id: roleId
      }
    })
    
    return role;
  }

  public async findAll() {
    const role = await prismaClient.role.findMany({
      select: {
        name: true
      }
    })

    return role;
  }

  public async findProfileByRole(name: string) {
    const profiles = await prismaClient.role.findMany({
      where:{
        name: name
      },
      select:{
        profile: true
      }
    })

    return profiles;
  }

}