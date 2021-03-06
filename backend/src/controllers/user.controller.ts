
import express, { Router, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { verifyToken } from '../middlewares/checkAuth';
import {checkPasswordStrength} from '../middlewares/checkPasswordStrength';

const userController: Router = express.Router();
const userService = new UserService();

userController.post('/register', checkPasswordStrength,
    (req: Request, res: Response) => {
        userService.register(req.body).then(registered => res.send(registered)).catch(err => res.status(500).send(err));
    }
);

userController.post('/login',
    (req: Request, res: Response) => {
        console.log(req.body);
        userService.login(req.body).then(login => res.send(login)).catch(err => res.status(500).send(err));
    }
);

userController.get('/', verifyToken, // you can add middleware on specific requests like that
    (req: Request, res: Response) => {
        userService.getAll().then(users => res.send(users)).catch(err => res.status(500).send(err));
    }
);

export const UserController: Router = userController;
