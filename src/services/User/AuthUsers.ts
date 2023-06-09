import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    console.log(email);
    console.log(password);

    //Verificação  se o email existe//

    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
      include: {
        subscriptions: true,
      },
    });

    if (!user) {
      throw new Error("Email/password wrong");
    }
    // verificação senha correta //

    const passwordSame = await compare(password, user?.password);

    if (!passwordSame) {
      throw new Error("Email/Password Wrong");
    }

    // gerando token jwt//

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30 day",
      }
    );

    // retorando status do user //
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      endereco: user?.endereco,
      token: token,
      subscriptions: user?.subscription
        ? {
            id: user?.subscription?.id,
            status: user?.subscription?.status,
          }
        : null,
    };
  }
}

export { AuthUserService };
