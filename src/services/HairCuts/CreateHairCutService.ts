import prismaClient from "../../prisma";

interface HaircuteRequest {
  user_id: string;
  name: string;
  price: number;
}

// verificar modelos usuarios já tem cadastrado//
// verificar freemium e limitar modelos para cadastro//

class CreateHaircutService {
  async execute({ user_id, name, price }: HaircuteRequest) {
    if (!name || !price) {
      throw new Error("ERROR INVALID SEND NAME OR PRICE");
    }

    // // verificar modelos usuarios já tem cadastrado//

    const myhaircuts = await prismaClient.haircuts.count({
      where: {
        user_id: user_id,
      },
    });
    // verificar freemium e limitar modelos para cadastro//
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    //validação definanindo limite  de cortes fremium//

    if (myhaircuts >= 3 && user?.subscriptions?.status !== "active") {
      throw new Error("Not authorized!");
    }

    const newHair = await prismaClient.haircuts.create({
      data: {
        name: name,
        price: price,
        user_id: user_id,
      },
    });

    return newHair;
  }
}

export { CreateHaircutService };
