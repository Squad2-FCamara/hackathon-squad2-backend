import SkillRepository  from '../../repositories/SkillRepository';

export default class DeleteSkillService {
  private skillRepository: SkillRepository;

  constructor ( 
   skillRepository: SkillRepository 
  ){
    this.skillRepository = skillRepository;
  }

  public async execute(skillId: number) {
    return await this.skillRepository.delete(skillId);
  }
  
}