import { Request, Response } from "express";
import { CreateChampionService } from "../services/CreateChampionService";

class ChampionsController {
  async create(request: Request, response: Response): Promise<Response> {
    
    const { name, lane, role } = request.body;

    const championService = new CreateChampionService();

    const champion = championService.createChampion(
        name,
        lane,
        role,
    );

    return response.json(champion);
  }
}

export { ChampionsController };