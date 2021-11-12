import { Request, Response } from "express";
import { UpdateChampionService } from "../../services/champions/UpdateChampionService";

class UpdateChampionController {
  public async handle(request: Request, response: Response): Promise<Response> {

    const { id, name, role, lane } = request.body;

    const updateChampion = new UpdateChampionService();

    const updatedChampion = await updateChampion.execute(
        id,
        name,
        role,
        lane
    );

    return response.json(updatedChampion);
  }
}

export { UpdateChampionController };