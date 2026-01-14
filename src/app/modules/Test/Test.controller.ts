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

export const TestControllers = {
  createTest,
};
