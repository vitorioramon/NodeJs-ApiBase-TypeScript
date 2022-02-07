import { Router } from 'express';
import { HomeController } from '../controllers/home-controller';
import { AuthorizationService } from '../services/authorization-service';

const homeRouter: Router = Router();

homeRouter.get('/', HomeController.get);
homeRouter.get('/logado', AuthorizationService.usuarioLogado, HomeController.get);
homeRouter.get('/admin', AuthorizationService.administrador, HomeController.get);

export {homeRouter};