import SkillRepository  from '../../repositories/SkillRepository';

export default class CreateSkillService {
  private skillRepository: SkillRepository;

  constructor ( 
   skillRepository: SkillRepository 
  ){
    this.skillRepository = skillRepository;
  }

  public async execute(name: string) {
    return await this.skillRepository.create(name);
  }
  
}