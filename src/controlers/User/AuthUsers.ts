import { Request, Response, response } from "express";

import { AuthUserService } from "../../services/User/AuthUsers";

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUserService = new AuthUserService();

    const session = await authUserService.execute({ email, password });
    return response.json(session);
  }
}

export { AuthUserController };
