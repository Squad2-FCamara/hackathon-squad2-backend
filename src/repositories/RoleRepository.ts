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
    console.log(name)
    const role = await prismaClient.role.update({
      where:{
        id: roleId
      },
      data:{
        name: name
      }
    })
    return role;
  }

  public async delete(roleId: number){
    const role = await prismaClient.role.delete({
      where:{
        id: roleId
      }
    })
    
    return role;
  }

  public async listAll() {
    const roles = await prismaClient.role.findMany({
      select: {
        name: true
      }
    })

    return roles;
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