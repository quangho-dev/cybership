import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrder = async (req, res) => {
  const { customer, status } = req.body;

  if (!customer || !status) {
    return res
      .status(400)
      .json({ message: "customer and status fields are required" });
  }

  try {
    const newOrder = await prisma.order.create({
      data: {
        customer,
        status: status.toUpperCase(),
      },
    });
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getOrders = async (req, res) => {
  const { customer, status } = req.query;

  let result = [];

  try {
    if (!customer && !status) {
      result = await prisma.order.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      result = await prisma.order.findMany({
        where: {
          OR: [
            { customer },
            { status: status ? status.toUpperCase() : undefined },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
