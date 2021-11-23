import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";
import { PassivesRepositories } from "../../repositories/PassivesRepositories";
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

        const passiveRepository = getCustomRepository(PassivesRepositories);

        const passive = await passiveRepository.findOne( passiveId );
        
        const createChampion = championRepository.create({
            name,
            slug,
            role,
            lane,
            passive: passiveId ? passive : null
        });
        
        await championRepository.save(createChampion);

        return createChampion;
    }
}

export { CreateChampionService };