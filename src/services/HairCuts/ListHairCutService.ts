import prismaClient from "../../prisma";

interface HairCutRequest {
  user_id: string;
  status: boolean | string;
}

class CreateListHaircutService {
  async execute({ user_id, status }: HairCutRequest) {
    const haircut = await prismaClient.haircuts.findMany({
      where: {
        user_id: user_id,
        status: status === "true" ? true : false,
      },
    });

    return haircut;
  }
}

export { CreateListHaircutService };
