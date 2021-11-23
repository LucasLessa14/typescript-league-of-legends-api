import { getCustomRepository } from "typeorm";
import { SkillsRepositories } from "../../repositories/SkillsRepositories";
import { FindChampionBySlugService } from "../champions/FindChampionBySlugService";

interface ISkillRequest {
    name: string;
    slug: string;
    description: string;
    cooldown: string;
    cost: string;
    range: string;
    letter: string;
    urlImageSkill: string;
    championName: string;
}

class CreateSkillService {

    async execute({ name, slug, description, cooldown, cost, range, letter, urlImageSkill, championName }: ISkillRequest) {
        
        const skillsRepository = getCustomRepository(SkillsRepositories);

        const champion = await new FindChampionBySlugService().execute(championName);

        if (!champion) throw new Error('Champion not found');

        const skill = skillsRepository.create({
            name,
            slug,
            description,
            cooldown,
            cost,
            range,
            letter,
            champion,
            urlImageSkill
        });

        await skillsRepository.save(skill);

        return skill;
    }
}

export { CreateSkillService };