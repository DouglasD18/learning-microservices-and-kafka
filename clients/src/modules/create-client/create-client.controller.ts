import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-client.useCase";

export class CreateClientController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateClientUseCase();

    try {
      const client = await useCase.execute(request.body);

      return response.status(201).json(client);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}