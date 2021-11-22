import { Request, Response } from "express";
import { CreateChampionService } from "../../services/champions/CreateChampionService";

class CreateChampionController {

  public async handle(request: Request, response: Response): Promise<Response> {
    
    const { name, lane, role } = request.body;

    const createChampionService = new CreateChampionService();

    const champion = await createChampionService.execute({
      name,
      lane,
      role
    });

    return response.status(201).json(champion);
  }
}

export { CreateChampionController };