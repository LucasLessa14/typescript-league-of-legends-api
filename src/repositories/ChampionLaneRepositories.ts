import { EntityRepository, Repository } from "typeorm";
import { ChampionLanes } from "../entities/ChampionLanes";

@EntityRepository(ChampionLanes)
class ChampionLaneRepositories extends Repository<ChampionLanes>{}

export { ChampionLaneRepositories };