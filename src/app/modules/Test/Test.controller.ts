import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TestServices } from './Test.service';

const createTest = catchAsync(async (req, res) => {
  const result = await TestServices.createTestIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Test is created succesfully',
    data: result,
  });
});

const getAllTests = catchAsync(async (req, res) => {
  const result = await TestServices.getAllTestsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tests are retrieved succesfully',
    data: result,
  });
});

const getSingleTest = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TestServices.getSingleTestFromDB(Number(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Test is retrieved succesfully',
    data: result,
  });
});

const updateTest = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TestServices.updateTestIntoDB(Number(id), req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Test is updated succesfully',
    data: result,
  });
});

const deleteTest = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TestServices.deleteTestFromDB(Number(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Test is deleted succesfully',
    data: result,
  });
});

export const TestControllers = {
  createTest,
  getAllTests,
  getSingleTest,
  updateTest,
  deleteTest,
};
