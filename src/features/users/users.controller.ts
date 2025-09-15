// import { Request, Response } from 'express';
// import * as usersService from './users.service';

// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await usersService.getAllUsers();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao buscar usuários.' });
//   }
// };

// export const getUserById = async (req: Request, res: Response) => {
//   try {
//     const user = await usersService.getUserById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'Usuário não encontrado.' });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao buscar usuário.' });
//   }
// };

// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const newUser = await usersService.createUser(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao criar usuário.' });
//   }
// };

// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     const updatedUser = await usersService.updateUser(req.params.id, req.body);
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'Usuário não encontrado.' });
//     }
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao atualizar usuário.' });
//   }
// };

// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const deleted = await usersService.deleteUser(req.params.id);
//     if (!deleted) {
//       return res.status(404).json({ message: 'Usuário não encontrado.' });
//     }
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao deletar usuário.' });
//   }
// };
