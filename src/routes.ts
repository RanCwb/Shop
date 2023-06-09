import { Router, Request, Response } from "express";
import { CreateUserController } from "./controlers/User/createUserController";
import { AuthUserController } from "./controlers/User/AuthUsers";
import { DetailUserController } from "./controlers/User/DetailUserController";
import { isAuth } from "./Middlewares/isAuthenticate";
import { UpdateUserController } from "./controlers/User/UpdateUserController";
import { CreateHaircutController } from "./controlers/HairCuts/CreateHairCutController";
import { ListHaircutController } from "./controlers/HairCuts/ListHaircutController";
import { UpdateHaircutController } from "./controlers/HairCuts/UpdateHaircuteController";
import { CheckSubController } from "./controlers/HairCuts/CheckSubController";
import { CountHaircutController } from "./controlers/HairCuts/CauntHaircutController";
import { DetailHairCutController } from "./controlers/HairCuts/DetailHaircutController";
import { NewScheduleController } from "./controlers/schedule/NewScheduleController";
import { ListScheduleController } from "./controlers/schedule/ListScheduleController";
import { FinishScheduleController } from "./controlers/schedule/FinishScheduleController";

const router = Router();

// router.get("/teste", (req: Request, res: Response) => {
// return res.json({ nome: "Ranathan" });
// });

// rotas user //

router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuth, new DetailUserController().handle);
router.put("/users", isAuth, new UpdateUserController().handle);

// ROTAS HAIRCUTS//

router.post("/haircuts", isAuth, new CreateHaircutController().handle);
router.get("/hairfind", isAuth, new ListHaircutController().handle);
router.put("/haircutup", isAuth, new UpdateHaircutController().handle);
router.get("/haircheck", isAuth, new CheckSubController().handle);
router.get("/haircount", isAuth, new CountHaircutController().handle);
router.get("/haircutdetail", isAuth, new DetailHairCutController().handle);

//ROTAS SERVIÇOS //

router.post("/schedule", isAuth, new NewScheduleController().handle);
router.get("/schedule", isAuth, new ListScheduleController().handle);
router.delete("/schedule", isAuth, new FinishScheduleController().handle);
export { router };
