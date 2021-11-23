import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";
import { ChampionPassiveRepositories } from "../../repositories/ChampionPassiveRepositories";
import { toSlug } from "../../utils/toSlugUtil";
import { Champions } from "../../entities/Champions";

interface IChampionRequest {
    name: string;
    role: string;
    lane: string;
    passiveId?: string;
}

class CreateChampionService {

    async execute({ name, role, lane, passiveId }: IChampionRequest): Promise<Champions> {

        if (!name) throw new Error('Name is required');
        
        const slug = toSlug(name);

        const championRepository = getCustomRepository(ChampionsRepositories);

        const champion = await championRepository.findOne({ where: { slug } });
        
        if (champion) throw new Error('Champion already exists');

        const championPassiveRepository = getCustomRepository(ChampionPassiveRepositories);

        const passive = await championPassiveRepository.findOne({ where: { id: passiveId } });
        
        const createChampion = championRepository.create({
            name,
            slug,
            role,
            lane,
            passive: passive ? passive : null
        });
        
        await championRepository.save(createChampion);

        return createChampion;
    }
}

export { CreateChampionService };