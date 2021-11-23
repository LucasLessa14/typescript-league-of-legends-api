import { Request, Response } from "express";
import { ListPassivesService } from "../../services/passives/ListPassivesService";

class ListPassivesController {
    
    async handle(request: Request, response: Response) {

        const listPassivesService = new ListPassivesService();
        
        const listPassives = await listPassivesService.execute();

        return response.json({
            count: listPassives.length,
            passives: listPassives
        });
    }
}

export { ListPassivesController };