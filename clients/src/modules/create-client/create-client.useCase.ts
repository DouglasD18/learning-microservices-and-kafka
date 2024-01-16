import { prismaClient } from "../../infra/database/prisma-client";

type CreateClientRequest = {
  name: string;
  password: string;
  email: string;
  phone: string;
}

export class CreateClientUseCase {
  constructor() {}

  async execute(data: CreateClientRequest) {
    const exists = await prismaClient.client.findFirst({
      where: {
        email: data.email
      }
    });

    if (exists) throw new Error("Client already exists!");

    const client = await prismaClient.client.create({
      data: {
        ...data
      }
    });

    return client;
  }
}