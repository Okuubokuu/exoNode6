class Cour {
    constructor(){
        this.cour = [
            {id: 1, name: 'name cour', quantity: 6, img: 'https://monImage', date: '10/1/2010', dispo: false}
        ]
    }

    get getCour(){
        return this.cours
    }

    saveCour(){}
    updateCour(){}
    deleteCour(){}
}

module.exports = new Cour();