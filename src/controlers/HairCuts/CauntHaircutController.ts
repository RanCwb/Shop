import { Response, Request, request } from "express";
import { CauntHaircutService } from "../../services/HairCuts/CauntHaircutservice";

class CountHaircutController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const countHaircuts = new CauntHaircutService();

    const count = await countHaircuts.execute({
      user_id,
    });

    return response.json(count);
  }
}

export { CountHaircutController };
