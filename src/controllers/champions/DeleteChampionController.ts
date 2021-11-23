import { Request, Response } from "express";
import { DeleteChampionService } from "../../services/champions/DeleteChampionService";

class DeleteChampionController {
  public async handle(request: Request, response: Response): Promise<Response> {

    const { slug } = request.params;

    const deleteChampion = new DeleteChampionService();

    const champion = await deleteChampion.execute(slug);

    return response.json({ message: 'Champion deleted', champion });
  }
}

export { DeleteChampionController };