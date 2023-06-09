import prismaClient from "../../prisma";

interface CauntRequest {
  user_id: string;
}

class CauntHaircutService {
  async execute({ user_id }: CauntRequest) {
    const count = await prismaClient.haircuts.count({
      where: {
        user_id: user_id,
      },
    });

    return count;
  }
}

export { CauntHaircutService };
