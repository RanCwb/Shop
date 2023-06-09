import prismaClient from "../../prisma";

interface UserRequest {
  user_id: string;
  name: string;
  endereco: string;
}

class UpdateUserService {
  async execute({ user_id, name, endereco }: UserRequest) {
    try {
      const userAsExists = await prismaClient.user.findFirst({
        where: {
          id: user_id,
        },
      });

      if (!userAsExists) {
        throw new Error("User Not EXISTS");
      }

      const userUpdate = await prismaClient.user.update({
        where: {
          id: user_id,
        },
        data: {
          name,
          endereco,
        },

        select: {
          name: true,
          email: true,
          endereco: true,
        },
      });

      return userUpdate;
    } catch (err) {
      console.log(err);
      throw new Error("ERROR AN UPDATE THE USER");
    }
  }
}

export { UpdateUserService };
