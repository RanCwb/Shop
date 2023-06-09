import prismaClient from "../../prisma";

interface FinishRequest {
  schedule_id: string;
  user_id: string;
}

class FinishScheduleService {
  async execute({ schedule_id, user_id }: FinishRequest) {
    if (schedule_id === "" || user_id === "") {
      throw new Error("Bad Request Send");
    }

    try {
      const sameUser = await prismaClient.service.findFirst({
        where: {
          id: schedule_id,
          user_id: user_id,
        },
      });

      if (!sameUser) {
        throw new Error("NOT USERS FIND, NOT AUTORIZED");
      }

      // Deletando serviço//
      await prismaClient.service.delete({
        where: {
          id: schedule_id,
        },
      });

      return { message: "Serviço finalizado com sucesso!" };
    } catch (err) {
      console.log(err);
    }
  }
}

export { FinishScheduleService };
