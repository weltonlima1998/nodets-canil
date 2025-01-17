import { Request, Response } from "express";
import { creatMenuObject } from "../help/createMenuObjeto";
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll()
    res.render('pages/page', {
        menu: creatMenuObject('all'),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list
    });
}
export const cachorro = (req: Request, res: Response) => {  
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: creatMenuObject('cachorro'),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        list
    });
}
export const gato = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: creatMenuObject('gato'),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        list
    });
}
export const peixe = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: creatMenuObject('peixe'),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        list
    });
}