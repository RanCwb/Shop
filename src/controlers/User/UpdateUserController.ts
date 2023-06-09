import prismaClient from "../../prisma";
import { UpdateUserService } from "../../services/User/UpdateUserService";
import { Response, Request } from "express";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, endereco } = request.body;

    const user_id = request.user_id;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      user_id,
      name,
      endereco,
    });

    return response.json(user);
  }
}

export { UpdateUserController };
