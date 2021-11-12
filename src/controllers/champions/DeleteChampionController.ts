import { Request, Response } from "express";
import { DeleteChampionService } from "../../services/champions/DeleteChampionService";

class DeleteChampionController {
  public async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const deleteChampion = new DeleteChampionService();

    const champion = await deleteChampion.execute(id);

    return response.status(204).json(champion);
  }
}

export { DeleteChampionController };