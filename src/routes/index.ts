import { Router } from "express";
import * as pageController from "../controllers/pageController";
import * as pesquisaController from "../controllers/pesquisaController";

const router = Router();

router.get('/', pageController.home);
router.get('/cachorro', pageController.cachorro);
router.get('/gato', pageController.gato);
router.get('/peixe', pageController.peixe);

router.get('/pesquisa', pesquisaController.pesquisa);

export default router;