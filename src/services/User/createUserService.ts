import prismaClient from "../../prisma/index";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    console.log(name);
    console.log(email);
    console.log(password);

    //  validação se não foi digitado nenhum email //
    if (!email || email === "") {
      throw new Error("email not found");
    }
    // validação se já tem um email igual registrado//
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userExists) {
      throw new Error("email already exists");
    }
    // criando usuario //
    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        name: true,
        email: true,
        id: true,
      },
    });

    return { ok: user };
  }
}

export { CreateUserService };

// function hello world
