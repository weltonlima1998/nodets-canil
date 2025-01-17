type menuObject = '' | 'all' | 'cachorro' | 'gato' | 'peixe';

export const creatMenuObject = (activeMenu: menuObject) => {
    let returnObject = {
        all: false,
        cachorro: false,
        gato: false,
        peixe: false
    };
    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    } 
    return returnObject;
}