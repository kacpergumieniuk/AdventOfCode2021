const file = await Deno.readTextFile('./input.txt')
const splited = file.split(/\r?\n/).map(str => Number(str))

//PART1

let result = 0
for(let x in splited){
    if(splited[parseInt(x)+1] > splited[x]){
        result +=1
    }
}
console.log(result)

// PART2

let result2 = 0
for(let x in splited){
    if(splited[x] + splited[parseInt(x) + 1] + splited[parseInt(x) + 2] < splited[parseInt(x) + 1] + splited[parseInt(x) + 2] + splited[parseInt(x) + 3]){
        result2++
    }
}

console.log(result2)