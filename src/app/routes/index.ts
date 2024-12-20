import { Router } from 'express';

const router = Router();

const moduleRoutes = [
  {
    path: '/test',
    route: (req, res) => res.send('test'),
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
