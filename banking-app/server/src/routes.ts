import express from 'express';
import { UserController } from './controller/user.controller';
import { TransactionController } from './controller/transaction.controller';

export function getRouter() {
  const router = express.Router();

  const userController = new UserController;

  router.get('/user', userController.getAll);
  router.get('/user/:id', userController.getOne);
  router.post('/user', userController.create);
  router.put('/user', userController.update);
  router.delete('/user/:id', userController.delete);

  const transactionController = new TransactionController();

  router.get('/transactions', transactionController.getAll);
  router.post('/transactions', transactionController.create);

  router.get('/transaction/created-by/:useId', transactionController.transactionsOfUser)

  return router;
}
