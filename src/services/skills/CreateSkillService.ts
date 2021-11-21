import { getCustomRepository } from "typeorm";
import { SkillsRepositories } from "../../repositories/SkillsRepositories";
import { FindByIdChampionService } from "../champions/FindByIdChampionService";

interface ISkillRequest {
    name: string;
    description: string;
    cooldown: string;
    cost: string;
    range: string;
    letter: string;
    urlImageSkill: string;
    championId: string;
}

class CreateSkillService {

    async execute({ name, description, cooldown, cost, range, letter, urlImageSkill, championId }: ISkillRequest) {
        
        const skillRepository = getCustomRepository(SkillsRepositories);

        const champion = await new FindByIdChampionService().execute(championId);

        const skill = skillRepository.create({
            name,
            description,
            cooldown,
            cost,
            range,
            letter,
            champion,
            urlImageSkill
        });

        await skillRepository.save(skill);

        return skill;
    }
}

export { CreateSkillService };