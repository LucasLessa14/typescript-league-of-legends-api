import { Request, Response } from "express";
import { CreateChampionService } from "../../services/champions/CreateChampionService";

class CreateChampionController {

  async handle(request: Request, response: Response) {
    
    const { name, lane, role } = request.body;

    const createChampionService = new CreateChampionService();

    const champion = createChampionService.execute({
      name,
      lane,
      role
    });

    return response.json(champion);
  }
}

export { CreateChampionController };