import prismaClient from "../../prisma";
import { UpdateHaircutService } from "../../services/HairCuts/UpateHairtService";
import { Request, Response } from "express";

class UpdateHaircutController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const { name, price, haircut_id, status } = request.body;

    const updateHaircut = new UpdateHaircutService();

    const haircut = await updateHaircut.execute({
      user_id,
      name,
      price,
      haircut_id,
      status,
    });

    return response.json(haircut);
  }
}

export { UpdateHaircutController };
