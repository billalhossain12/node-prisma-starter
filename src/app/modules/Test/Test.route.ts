/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { TestControllers } from './Test.controller';

const router = express.Router();

router.post(
  '/create-test',
  TestControllers.createTest,
);

export const TestRoutes = router;
