class Rombo {
    DiagonalVertical:number;
    DiagonalHorizontal:number;
    constructor(_diagonalV:number, _diagonalH:number) {
        this.DiagonalHorizontal = _diagonalH;
        this.DiagonalVertical = _diagonalV;
    }

    area():number{
        return this.DiagonalHorizontal*this.DiagonalVertical;
    }
}

let rombo = new Rombo(10, 15);
console.log(`El area del rombo con dimensiones ${rombo.DiagonalHorizontal} x ${rombo.DiagonalVertical} es igual a: ${rombo.area()}`);
