import { Request, Response } from 'express';
import { UserService } from '../../services';

export const getAllUsers = (req: Request, res: Response): void => {
  const users = UserService.getAllUsers();
  res.json(users);
};

export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = UserService.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};