import SkillRepository  from '../../repositories/SkillRepository';

export default class FindAllSkillService {
  private skillRepository: SkillRepository;

  constructor ( skillRepository: SkillRepository ){
    this.skillRepository = skillRepository;
  }

  public async execute() {
    return await this.skillRepository.findAll();
  }

}