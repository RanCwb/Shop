import { CheckSubService } from "../../services/HairCuts/CheckSubService";
import { Request, Response } from "express";

class CheckSubController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const checksub = new CheckSubService();

    const status = await checksub.execute({
      user_id,
    });
    return response.json(status);
  }
}

export { CheckSubController };
