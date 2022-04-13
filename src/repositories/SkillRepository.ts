import { prismaClient } from "../database/prismaClient";

export default class SkillRepository {
  public async create( name: string ) {
    const skill = await prismaClient.skill.create({
      data:{
        name: name
      }
    })

    return skill;
  }

  public async listAll() {
    const skill = await prismaClient.skill.findMany({
      select: {
        name: true
      }
    })

    return skill;
  }

  public async findById(skillId: number) {
    const skill = await prismaClient.skill.findUnique({
      where: {
        id: skillId
      },
      select: {
        name: true
      }
    })

    return skill;
  }

  public async update(
    name: string,
    skillId: number
  ) {
    const skill = await prismaClient.skill.update({
      where: {
        id: skillId
      },
      data: {
        name: name
      }
    })

    return skill;
  }

  public async delete(skillId: number){
    const skill = await prismaClient.skill.delete({
      where:{
        id: skillId
      }
    })
    
    return skill;
  }
}