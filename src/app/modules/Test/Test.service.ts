import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { prisma } from '../../lib/prisma';
import { ITest } from './Test.interface';

interface ITestUpdate {
  title?: string;
  content?: string;
}

const createTestIntoDB = async (payload: ITest) => {
  const data = await prisma.test.create({
    data: payload,
  });
  return data;
};

const getAllTestsFromDB = async () => {
  const data = await prisma.test.findMany();
  return data;
};

const getSingleTestFromDB = async (id: number) => {
  const data = await prisma.test.findUnique({ where: { id } });
  return data;
};

const updateTestIntoDB = async (id: number, payload: ITestUpdate) => {
  // check if test exist
  const isExist = await prisma.test.findUnique({ where: { id } });
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This test not found!');
  }

  const data = await prisma.test.update({
    where: { id },
    data: payload,
  });
  return data;
};

const deleteTestFromDB = async (id: number) => {
  // check if test exist
  const isExist = await prisma.test.findUnique({ where: { id } });
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This test not found!');
  }

  const data = await prisma.test.delete({ where: { id } });
  return data;
};

export const TestServices = {
  createTestIntoDB,
  getAllTestsFromDB,
  getSingleTestFromDB,
  updateTestIntoDB,
  deleteTestFromDB,
};
