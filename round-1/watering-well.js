const fs = require('fs');
const input = fs.readFileSync('interview prep/problem-solving/hackercup/2022/round-1/watering_well_chapter_1_input2.txt', 'utf8').trim().split('\n');
const stream = fs.createWriteStream('interview prep/problem-solving/hackercup/2022/round-1/watering-well2.txt');


let currentline = 0;

let T = readline();

for(let i = 1; i <= T; i++){
    
    let N = parseInt(readline());
    let trees = Array(N)
    


    for(let j = 0; j < N; j++){
        let [a,b] = readline().split(' ').map( x => parseInt(x))
        trees[j] = [a,b]

    }

    let Q = parseInt(readline());
    let wells = Array(Q)

    for(let j = 0; j < Q; j++){
        let [x,y] = readline().split(' ').map( x => parseInt(x))
        wells[j] = [x,y]
    }


    write(`Case #${i}: ${calculateInconvenience(N,Q,trees,wells)}`);
}


function calculateInconvenience(N,Q,trees,wells){
    const MOD = 1000000007;
    let tXSum = 0;
    let tYSum = 0;
    let tXSquareSum = 0;
    let tYSquareSum = 0;
    for(let i = 0; i < N; i++){
        tXSum = (tXSum + trees[i][0]) % MOD;
        tYSum = (tYSum + trees[i][1]) % MOD;
        tXSquareSum = (tXSquareSum +  trees[i][0]*trees[i][0]) % MOD  ;
        tYSquareSum = (tYSquareSum +  trees[i][1]*trees[i][1]) % MOD  ;
    }

    tXSum = tXSum % MOD;
    tYSum = tYSum % MOD;
    tXSquareSum = tXSquareSum % MOD;
    tYSquareSum = tYSquareSum % MOD;

    let wXSum = 0;
    let wYSum = 0;
    let wXSquareSum = 0;
    let wYSquareSum = 0;

    for(let i = 0; i < Q; i++){
        wXSum = wXSum + wells[i][0]
        wYSum = wYSum + wells[i][1]
        wXSquareSum = wXSquareSum + (wells[i][0]*wells[i][0]) % MOD
        wYSquareSum = wYSquareSum + (wells[i][1]*wells[i][1]) % MOD
    }



    wXSum = wXSum % MOD;
    wYSum = wYSum % MOD;
    wXSquareSum = wXSquareSum % MOD;
    wYSquareSum = wYSquareSum % MOD;

    let totalInconvenience = 0
    totalInconvenience = (Q*tXSquareSum) % MOD + (Q*tYSquareSum) % MOD + (N*wXSquareSum) % MOD + (N*wYSquareSum) % MOD ;
    totalInconvenience = totalInconvenience % MOD;
    let sub = (2*tXSum*wXSum + 2*tYSum*wYSum) % MOD;
    console.log(totalInconvenience, sub )
    console.log((totalInconvenience- sub + MOD) % MOD)
    totalInconvenience = (totalInconvenience - sub + MOD) % MOD
    return totalInconvenience
   
}


// Language: javascript
function readline(){
    return input[currentline++];
}

function write(text){
    stream.write(text+'\n');
}