import { Request, Response } from "express";
import { UpdateChampionService } from "../../services/champions/UpdateChampionService";

class UpdateChampionController {
  public async handle(request: Request, response: Response): Promise<Response> {

    const { slug } = request.params;
    const { name, role, lane, passiveId } = request.body;

    const updateChampion = new UpdateChampionService();

    const updatedChampion = await updateChampion.execute({
        slug,
        name,
        role,
        lane,
        passiveId
    });

    return response.json(updatedChampion);
  }
}

export { UpdateChampionController };