import { prisma } from '../../lib/prisma';
import { ITest } from './Test.interface';

const createTestIntoDB = async (payload: ITest) => {
  const data = await prisma.test.create({
    data: payload,
  });
  return data;
};

export const TestServices = {
  createTestIntoDB,
};
