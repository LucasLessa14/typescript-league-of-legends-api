import { Request, Response } from "express";
import { FindSkillsByChampionService } from "../../services/skills/FindSkillsByChampionService";

class ListSkillsByChampionController {
  async handle(req: Request, res: Response): Promise<Response> {

    const { championName } = req.params;

    const findSkillsByChampion = new FindSkillsByChampionService();

    const skills = await findSkillsByChampion.execute(championName);

    return res.json(skills);
  }
}

export { ListSkillsByChampionController };