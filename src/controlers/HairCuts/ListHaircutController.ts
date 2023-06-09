import { Request, Response } from "express";

import { CreateListHaircutService } from "../../services/HairCuts/ListHairCutService";

class ListHaircutController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const status = request.query.status as string;

    const listHaircut = new CreateListHaircutService();

    const HairCuts = await listHaircut.execute({
      user_id,
      status,
    });

    return response.json(HairCuts);
  }
}

export { ListHaircutController };
