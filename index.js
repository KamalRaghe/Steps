const string = document.getElementById('string')

let steps = 4

for(let row = 0; row < steps; ++row){
    let eachSteps = ''
    for(let column = 0; column < steps; ++column){
        if(column <= row){
            eachSteps += '#'
        }else{
            eachSteps += ' '
        }
       
    } console.log(eachSteps)

}

