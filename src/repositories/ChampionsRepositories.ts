import { EntityRepository, Repository } from "typeorm";
import { Champions } from "../entities/Champions";

@EntityRepository(Champions)
class ChampionsRepositories extends Repository<Champions> {}

export { ChampionsRepositories };
