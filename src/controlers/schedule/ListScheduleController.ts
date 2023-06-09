import { listScheduleService } from "../../services/Schedule/ListSchedule";
import { Response, Request } from "express";

class ListScheduleController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const listSchedule = new listScheduleService();

    const schedule = await listSchedule.execute({
      user_id,
    });

    return response.json(schedule);
  }
}
export { ListScheduleController };
