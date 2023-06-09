import prismaClient from "../../prisma";

interface NewScheduleRequest {
  user_id: string;
  haircut_id: string;
  customer: string;
}
class NewScheduleService {
  async execute({ user_id, haircut_id, customer }: NewScheduleRequest) {
    if (customer === "" || haircut_id === "") {
      throw new Error("Error Schedule request");
    }

    const schema = await prismaClient.service.create({
      data: {
        haircut_id,
        customer,
        user_id,
      },
    });

    return schema;
  }
}

export { NewScheduleService };
