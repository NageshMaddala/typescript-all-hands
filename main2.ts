class Point {
    // x: number;
    // y: number;
    // private z:number;

    // constructor(x?: number, y?: number) {
    //     this.x = x;
    //     this.y = y;
    // }

    constructor(public x?: number, private y?: number) {

    }


    draw() {
        console.log(this.x);
    }

    getDistance(another: Point) {

    }
}

let point = new Point();
point.x = 100;
point.draw();