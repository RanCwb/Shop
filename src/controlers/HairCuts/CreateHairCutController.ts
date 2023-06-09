import { Request, Response } from "express";
import { CreateHaircutService } from "../../services/HairCuts/CreateHairCutService";

class CreateHaircutController {
  async handle(request: Request, response: Response) {
    const { name, price } = request.body;

    const user_id = request.user_id;

    const createHaircutService = new CreateHaircutService();

    const HairCuts = await createHaircutService.execute({
      user_id,
      name,
      price,
    });

    return response.json(HairCuts);
  }
}

export { CreateHaircutController };
