import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { creatMenuObject } from "../help/createMenuObjeto";

export const pesquisa = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    if(!query){res.redirect('/');return};
    let list = Pet.getFromName(query);
    res.render('pages/page', {
        menu: creatMenuObject(''),
        list,
        query
    });

}