import { getCustomRepository } from "typeorm";
import { PassivesRepositories } from "../../repositories/PassivesRepositories";

class CreatePassiveService {
    
    async execute(name: string, description: string, urlImage: string) {

        const passiveRepositories = getCustomRepository(PassivesRepositories);

        if (!name) throw new Error('Name is required');

        const validatePassive = await passiveRepositories.findOne({ where: { name } });

        if (validatePassive) throw new Error('Passive already exists');
        
        const championPassive = passiveRepositories.create({
            name,
            description,
            urlImage
        });

        await passiveRepositories.save(championPassive);

        return championPassive;
    }
}

export { CreatePassiveService };