import { EntityRepository, Repository } from "typeorm";
import { ChampionPassive } from "../entities/ChampionPassive";

@EntityRepository(ChampionPassive)
class ChampionPassiveRepositories extends Repository<ChampionPassive>{}

export { ChampionPassiveRepositories };