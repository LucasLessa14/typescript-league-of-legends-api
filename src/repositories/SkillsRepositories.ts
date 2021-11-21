import { EntityRepository, Repository } from "typeorm";
import { Skill } from "../entities/Skill";

@EntityRepository(Skill)
class SkillsRepositories extends Repository<Skill> {}

export { SkillsRepositories };