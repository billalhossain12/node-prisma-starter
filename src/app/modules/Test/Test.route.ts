/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { TestControllers } from './Test.controller';

const router = express.Router();

router.post(
  '/',
  TestControllers.createTest,
);

router.get(
  '/',
  TestControllers.getAllTests,
);

router.get(
  '/:id',
  TestControllers.getSingleTest,
);

router.put(
  '/:id',
  TestControllers.updateTest,
);

router.delete(
  '/:id',
  TestControllers.deleteTest,
);

export const TestRoutes = router;
