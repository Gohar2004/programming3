let matrix = [];
let side = 20;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let waterArr=[];
let waterdrinkerArr=[];
function setup() {
    matrixGenerator(40, 10, 10, 30,50,30);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('grey');
    frameRate(5);

    noStroke()

    function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount,waterCount,waterdrinkerCount) {
        for (let index = 0; index < matrixSize; index++) {
            matrix[index] = [];
            for (let i = 0; i < matrixSize; i++) {
                matrix[index][i] = 0;
            }
        }
        for (let index = 0; index < grassCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 1;
        }
        for (let index = 0; index < grassEaterCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 2;
        }
        for (let index = 0; index < predatorCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 3;
        }
        for (let index = 0; index < waterCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 4;
        }
        for (let index = 0; index < waterdrinkerCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 5;
        }


    }

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                let water = new Water(x, y);
                waterArr.push(water);
            }
            else if (matrix[y][x] == 5) {
                let waterdrinker = new Waterdrinker(x, y);
                waterdrinkerArr.push(waterdrinker);
            }



        }
    }

}

function draw() {

    for (let y = 0; y < matrix.length; y++) {
        const element = matrix[y];
        for (let x = 0; x < element.length; x++) {

            if (matrix[y][x] == 1) {
                fill('green')
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('blue')
            }
            else if (matrix[y][x] == 5) {
                fill('pink')
            }


            else {
                fill('grey')
            }
            rect(x * side, y * side, side, side)
        }
    }
    for (let index = 0; index < grassArr.length; index++) {
        grassArr[index].mul();
    }
    for (let index = 0; index < grassEaterArr.length; index++) {
        grassEaterArr[index].eat();
    }
    for (let index = 0; index < predatorArr.length; index++) {
        predatorArr[index].eat();
    }
    for (let index = 0; index < waterArr.length; index++) {
        waterArr[index].mul();
    }
    for (let index = 0; index < waterdrinkerArr.length; index++) {
        waterdrinkerArr[index].eat();
    }



}