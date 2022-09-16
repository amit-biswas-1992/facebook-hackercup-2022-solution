const fs = require('fs');
const input = fs.readFileSync('interview prep/problem-solving/hackercup/2022/qualification-round-practice/second-hand.in', 'utf8').trim().split('\n');
const stream = fs.createWriteStream('./output.txt');


let currentline = 0;

let T = readline();

for(let i = 1; i <= T; i++){
    
    let [partsCount,capacity] = readline().split(' ').map( x => parseInt(x))
    let styles = readline().split(' ').map( x => parseInt(x))
    write(`Case #${i}: ${isPossibleArrangement(partsCount,capacity, styles)}`);
}


function isPossibleArrangement(partsCount, capacity, styles){

    if(partsCount>2*capacity) return "NO"
    
    let styleFrequencyMap = new Map()


    for(let style of styles){
    
        if(!styleFrequencyMap.has(style)) styleFrequencyMap.set(style,0)
        if(styleFrequencyMap.get(style)==2) return "NO"
        
        let frequency  = styleFrequencyMap.get(style)

        styleFrequencyMap.set(style,frequency+1)
    }
    
    return "YES"
}

function readline(){
    return input[currentline++];
}

function write(text){
    stream.write(text+'\n');
}