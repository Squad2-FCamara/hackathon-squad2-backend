import SkillRepository from "../../repositories/SkillRepository";

export default class UpdateSkillService {
  private skillRepository: SkillRepository;

  constructor ( skillRepository: SkillRepository ){
    this.skillRepository = skillRepository;
  }

  public async execute(
    name: string,
    skillId: number
    ){
    return await this.skillRepository.update(name , skillId);
  }
  
}