import { Request, Response } from "express";
import { CreateSkillService } from "../../services/skills/CreateSkillService";

interface ISkillRequest {
    name: string;
    description: string;
    cooldown: string;
    cost: string;
    range: string;
    letter: string;
    urlImageSkill: string;
    championName: string;
}

class CreateSkillController {

    async handle(request: Request, response: Response) {

        const { name, description, cooldown, cost, range, letter, urlImageSkill, championName } = request.body as ISkillRequest;

        const createSkillService = new CreateSkillService();

        const skill = await createSkillService.execute({
            name,
            description,
            cooldown,
            cost,
            range,
            letter,
            urlImageSkill,
            championName
        });

        return response.status(201).json(skill);
    }
}

export { CreateSkillController };