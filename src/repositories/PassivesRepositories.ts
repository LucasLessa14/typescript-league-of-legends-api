import { EntityRepository, Repository } from "typeorm";
import { Passive } from "../entities/Passive";

@EntityRepository(Passive)
class PassivesRepositories extends Repository<Passive>{}

export { PassivesRepositories };