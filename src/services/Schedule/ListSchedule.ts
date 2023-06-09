import prismaClient from "../../prisma";

interface ListRequest {
  user_id: string;
}

class listScheduleService {
  async execute({ user_id }: ListRequest) {
    const schedule = await prismaClient.service.findMany({
      where: {
        user_id: user_id,
      },
      select: {
        id: true,
        haircut: true,
        customer: true,
      },
    });

    return schedule;
  }
}

export { listScheduleService };
