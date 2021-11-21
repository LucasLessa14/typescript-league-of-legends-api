import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";
import { SkillsRepositories } from "../../repositories/SkillsRepositories";

interface ISkillRequest {
    id: string;
    name?: string;
    description?: string;
    cooldown?: string;
    cost?: string;
    range?: string;
    letter?: string;
    urlImageSkill?: string;
    championId?: string;
}

class UpdateSkillService {

    async execute({ id, name, description, cooldown, cost, range, letter, urlImageSkill, championId }: ISkillRequest) {

        const skillRepository = getCustomRepository(SkillsRepositories);
        const skill = await skillRepository.findOne(id);

        if (!skill) throw new Error('Skill not found');

        if (name) skill.name = name;
        if (description) skill.description = description;
        if (cooldown) skill.cooldown = cooldown;
        if (cost) skill.cost = cost;
        if (range) skill.range = range;
        if (letter) skill.letter = letter;
        if (urlImageSkill) skill.urlImageSkill = urlImageSkill;

        if (championId) {
            const championRepository = getCustomRepository(ChampionsRepositories);

            const champion = await championRepository.findOne(championId);

            if (!champion) throw new Error('Champion not found');

            skill.champion = champion;
        }

        await skillRepository.save(skill);

        return skill;
    }
}

export { UpdateSkillService };