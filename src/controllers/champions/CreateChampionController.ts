import { Request, Response } from "express";
import { CreateChampionService } from "../../services/champions/CreateChampionService";

class CreateChampionController {

  public async handle(request: Request, response: Response): Promise<Response> {
    
    const { slug } = request.params;
    const { name, lane, role, passiveId } = request.body;

    const createChampionService = new CreateChampionService();

    const champion = await createChampionService.execute({
      name,
      lane,
      role,
      passiveId
    });

    return response.json(champion);
  }
}

export { CreateChampionController };