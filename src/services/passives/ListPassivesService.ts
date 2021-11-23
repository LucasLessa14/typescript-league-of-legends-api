import { getCustomRepository } from "typeorm";
import { PassivesRepositories } from "../../repositories/PassivesRepositories";

class ListPassivesService {
    async execute() {

        const passivesRepository = getCustomRepository(PassivesRepositories);

        const passives = await passivesRepository.find();

        return passives;
    }
}

export { ListPassivesService };