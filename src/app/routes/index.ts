import { Router } from 'express';
import { TestRoutes } from '../modules/Test/Test.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/tests',
    route: TestRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
