console.log('client side advanced js file has loaded')

//elements from the page

const $messageOne = document.querySelector('#message-1')
const $messageTwo = document.querySelector('#message-2')
const $messagePuzzle = document.querySelector('#puzzle')
const $messageIncorrect = document.querySelector('#incorrect')
const $messageTitle = document.querySelector('#title')
const $homeLink = document.querySelector('#home-link')


//setting up links between the pages

$homeLink.addEventListener('click', function (e) {
    location.assign('/index.html')
    localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
    localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))

})


//get the saved data 

const getSavedDataTotal = () => {
    const dataJSON = localStorage.getItem('questionCount')

    try {
        return dataJSON ? JSON.parse(dataJSON) : []
    } catch (e) {
        return []
    }
}


const getSavedDataCorrect = () => {
    const dataJSON = localStorage.getItem('correctRecord')

    try {
        return dataJSON ? JSON.parse(dataJSON) : []
    } catch (e) {
        return []
    }
}


let correctRecord = getSavedDataCorrect()
let questionCount = getSavedDataTotal()

console.log(questionCount)
console.log(correctRecord)


var keysTyped = []
var resultsArray = []

$messageIncorrect.textContent = ''

//generate the numbers

const computerInteger = function (max) {
    return Math.floor(Math.random() * max) + 1
   }

const valueOne = computerInteger(12)
const valueTwo = (-1)*computerInteger(12)
let valueThree = computerInteger(10)
//valueThree = 1
const valueFour = (-1)*valueTwo

answer = ''


//set up the question type and the answer


if (valueThree ===1) {
    
    answer = valueTwo + valueOne
    console.log(answer)

    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `${valueTwo}  +  ${valueOne} = `
        }
    }
    generateQuestion(2000)


    //set up the key pressing

    window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    

        if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${keysTyped[0]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo} + ${valueOne} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
                   

        else if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)
                                               
        }


        else if (answer>-0.5 && answer.toString().length===2&&keysTyped.length===1) {
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${keysTyped[0]}`
        
        }

        else if (answer>-0.5 && keysTyped.length===2 && answer.toString().length===2 && (10*Number(keysTyped[0])+Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  +  ${valueOne} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
        

        else if (answer>-0.5 &&keysTyped.length===2 && answer.toString().length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer<0 && answer.toString().length===2&&keysTyped.length===1) {
            $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${keysTyped[0]} `
    
        }


        else if (answer<0 && keysTyped.length===2 && answer.toString().length===2 && (keysTyped[0]!=='-' || (-1)*Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  +  ${valueOne} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }


        else if (answer<0 && keysTyped.length===2 && answer.toString().length===2 && keysTyped[0]==='-' && (-1)*Number(keysTyped[1])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===1) {
            $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${keysTyped[0]}`
        }

        else if (answer<0 && answer.toString().length===3 && keysTyped.length===2) {
            $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}`
    
        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===3 && (keysTyped[0]!=='-' || -10*Number(keysTyped[1])-Number(keysTyped[2])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  +  ${valueOne} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)

        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===3 && keysTyped[0]==='-' && (-10*Number(keysTyped[1])-Number(keysTyped[2])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  +  ${valueOne} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }



    }


    })

    }

    




else if (valueThree === 2) {

    answer = valueTwo * valueOne
    console.log(answer)
    
    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `${valueTwo}  x  ${valueOne} = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `${valueTwo}  x  ${valueOne} = `
        }
    }

    generateQuestion(2000)


//set up the key pressing

window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    

        if (answer.toString().length===2&&keysTyped.length===1) {
            $messageOne.textContent = `${valueTwo}  x  ${valueOne} = ${keysTyped[0]} `
        }


        else if (keysTyped.length===2 && answer.toString().length===2 && (keysTyped[0]!=='-' || (-1)*Number(keysTyped[1]))!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  x  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  x  ${valueOne} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }


        else if (keysTyped.length===2 && answer.toString().length===2 && keysTyped[0]==='-' && (-1)*Number(keysTyped[1])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  x  ${valueOne} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer.toString().length===3 && keysTyped.length===1) {
            $messageOne.textContent = `${valueTwo}  x  ${valueOne} = ${keysTyped[0]}`
        }


        else if (answer.toString().length===3 && keysTyped.length===2) {
            $messageOne.textContent = `${valueTwo}  x  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}`
    
        }


        else if (answer.toString().length===3 && keysTyped.length===3 && (keysTyped[0]!=='-' || -10*Number(keysTyped[1])-Number(keysTyped[2])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  x  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  x  ${valueOne} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)

        }


        else if (answer.toString().length===3 && keysTyped.length===3 && keysTyped[0]==='-' && (-10*Number(keysTyped[1])-Number(keysTyped[2])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  x  ${valueOne} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }



    }


    })



    }







else if (valueThree === 3) {

    answer = valueTwo - valueOne
    console.log(answer)

    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `${valueTwo}  -  ${valueOne} = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `${valueTwo}  -  ${valueOne} = `
        }
    }

    generateQuestion(2000)





//set up the key pressing

window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    

        if (answer.toString().length===2&&keysTyped.length===1) {
            $messageOne.textContent = `${valueTwo}  -  ${valueOne} = ${keysTyped[0]} `
        }


        else if (keysTyped.length===2 && answer.toString().length===2 && (keysTyped[0]!=='-' || (-1)*Number(keysTyped[1]))!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  -  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  -  ${valueOne} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }


        else if (keysTyped.length===2 && answer.toString().length===2 && keysTyped[0]==='-' && (-1)*Number(keysTyped[1])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  -  ${valueOne} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer.toString().length===3 && keysTyped.length===1) {
            $messageOne.textContent = `${valueTwo}  -  ${valueOne} = ${keysTyped[0]}`
        }


        else if (answer.toString().length===3 && keysTyped.length===2) {
            $messageOne.textContent = `${valueTwo}  -  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}`
    
        }


        else if (answer.toString().length===3 && keysTyped.length===3 && (keysTyped[0]!=='-' || -10*Number(keysTyped[1])-Number(keysTyped[2])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  -  ${valueOne} = ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  -  ${valueOne} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)

        }


        else if (answer.toString().length===3 && keysTyped.length===3 && keysTyped[0]==='-' && (-10*Number(keysTyped[1])-Number(keysTyped[2])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  -  ${valueOne} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }



    }


    })



    }




else if (valueThree === 4) {

    const question = valueOne*valueFour
    answer = (-1)*valueOne
    console.log(answer)

    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `${question} \xF7 (${valueTwo}) = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `${question} \xF7 (${valueTwo}) = `
        }
    }

    generateQuestion(2000)




//set up the key pressing

window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    

        if (answer.toString().length===2&&keysTyped.length===1) {
            $messageOne.textContent = `${question} \xF7 (${valueTwo}) = ${keysTyped[0]} `
        }


        else if (keysTyped.length===2 && answer.toString().length===2 && (keysTyped[0]!=='-' || (-1)*Number(keysTyped[1]))!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${question} \xF7 (${valueTwo}) =  ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${question} \xF7 (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }


        else if (keysTyped.length===2 && answer.toString().length===2 && keysTyped[0]==='-' && (-1)*Number(keysTyped[1])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${question} \xF7 (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer.toString().length===3 && keysTyped.length===1) {
            $messageOne.textContent = `${question} \xF7 (${valueTwo}) = ${keysTyped[0]}`
        }


        else if (answer.toString().length===3 && keysTyped.length===2) {
            $messageOne.textContent = `${question} \xF7 (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
    
        }


        else if (answer.toString().length===3 && keysTyped.length===3 && (keysTyped[0]!=='-' || -10*Number(keysTyped[1])-Number(keysTyped[2])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${question} \xF7 (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                $messageIncorrect.textContent = `Solution: ${question} \xF7 (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)

        }


        else if (answer.toString().length===3 && keysTyped.length===3 && keysTyped[0]==='-' && (-10*Number(keysTyped[1])-Number(keysTyped[2])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${question} \xF7 (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }



    }


    })


}


else if (valueThree === 5) {

    answer = valueOne + valueFour
    console.log(answer)

    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `${valueOne} - (${valueTwo}) = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `${valueOne} - (${valueTwo}) = `
        }
    }

    generateQuestion(2000)



    window.addEventListener('keypress', (e) => {
        //set up the reset ';' key
    
         if (e.key === ';') {
            localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
            localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
            location.reload()
            console.log(questionCount)
            console.log(correctRecord)
        }
    
       //only respond to numbers
    
       if (isNaN(Number(e.key)) && e.key!=='-' ) {
           console.log('not a number')
       }
    
    
       //play the game
       else {
           
        keysTyped.push(e.key)
        console.log(keysTyped)
        console.log(keysTyped.length) 
    


        if (answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueOne} - (${valueTwo}) =  ${keysTyped[0]}`
                $messageIncorrect.textContent = `Solution: ${valueOne} - (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
                   

        else if (answer.toString().length===1&&Number(keysTyped[0])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueOne} - (${valueTwo}) = ${keysTyped[0]}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)
                                               
        }


        else if (answer.toString().length===2&&keysTyped.length===1) {
                $messageOne.textContent = `${valueOne} - (${valueTwo}) = ${keysTyped[0]}`
        
        }

        else if (keysTyped.length===2 && answer.toString().length===2 && (10*Number(keysTyped[0])+Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueOne} - (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${valueOne} - (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
        

        else if (keysTyped.length===2 && answer.toString().length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueOne} - (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

            }



        }
    
    
        })
    
    
    }
    



else if (valueThree === 6) {

    answer = (-1)*valueOne + valueFour
    console.log(answer)

    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = `
        }
    }

    generateQuestion(2000)

//set up the key pressing

window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    

        if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${keysTyped[0]}`
                $messageIncorrect.textContent = `Solution: - ${valueOne} - (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
                   

        else if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)
                                               
        }


        else if (answer>-0.5 && answer.toString().length===2&&keysTyped.length===1) {
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${keysTyped[0]}`
        
        }

        else if (answer>-0.5 && keysTyped.length===2 && answer.toString().length===2 && (10*Number(keysTyped[0])+Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: - ${valueOne} - (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
        

        else if (answer>-0.5 &&keysTyped.length===2 && answer.toString().length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer<0 && answer.toString().length===2&&keysTyped.length===1) {
            $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${keysTyped[0]} `
    
        }


        else if (answer<0 && keysTyped.length===2 && answer.toString().length===2 && (keysTyped[0]!=='-' || (-1)*Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: - ${valueOne} - (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }


        else if (answer<0 && keysTyped.length===2 && answer.toString().length===2 && keysTyped[0]==='-' && (-1)*Number(keysTyped[1])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===1) {
            $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${keysTyped[0]}`
        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===2) {
            $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
    
        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===3 && (keysTyped[0]!=='-' || -10*Number(keysTyped[1])-Number(keysTyped[2])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                $messageIncorrect.textContent = `Solution: - ${valueOne} - (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)

        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===3 && keysTyped[0]==='-' && (-10*Number(keysTyped[1])-Number(keysTyped[2])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `- ${valueOne} - (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }



    }


    })


}



else if (valueThree === 7) {
    
    answer = valueOne-valueFour
    //console.log(valueOne)
    //console.log(valueFour)
    //console.log(valueTwo)
    console.log(answer)
    
    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = `
        }
    }

    generateQuestion(2000)



//set up the key pressing

window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    

        if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${keysTyped[0]}`
                $messageIncorrect.textContent = `Solution: ${valueOne}  +  (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
                   

        else if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)
                                               
        }


        else if (answer>-0.5 && answer.toString().length===2&&keysTyped.length===1) {
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${keysTyped[0]}`
        
        }

        else if (answer>-0.5 && keysTyped.length===2 && answer.toString().length===2 && (10*Number(keysTyped[0])+Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${valueOne}  +  (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
        

        else if (answer>-0.5 &&keysTyped.length===2 && answer.toString().length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer<0 && answer.toString().length===2&&keysTyped.length===1) {
            $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${keysTyped[0]} `
    
        }


        else if (answer<0 && keysTyped.length===2 && answer.toString().length===2 && (keysTyped[0]!=='-' || (-1)*Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${valueOne}  +  (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }


        else if (answer<0 && keysTyped.length===2 && answer.toString().length===2 && keysTyped[0]==='-' && (-1)*Number(keysTyped[1])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===1) {
            $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${keysTyped[0]}`
        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===2) {
            $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
    
        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===3 && (keysTyped[0]!=='-' || -10*Number(keysTyped[1])-Number(keysTyped[2])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                $messageIncorrect.textContent = `Solution: ${valueOne}  +  (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)

        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===3 && keysTyped[0]==='-' && (-10*Number(keysTyped[1])-Number(keysTyped[2])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueOne}  +  (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }

    }


    })


    }




else if (valueThree === 8 ) {
    
    let a = (-1)*valueOne
    answer = valueOne*valueFour
    console.log(answer)
    
    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `${valueTwo}  x (${a}) = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `${valueTwo}  x (${a}) = `
        }
    }

    generateQuestion(2000)


//set up the key pressing

window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    

        if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  x (${a}) = ${keysTyped[0]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  x (${a}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
                   

        else if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  x (${a}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)
                                               
        }


        else if (answer>-0.5 && answer.toString().length===2&&keysTyped.length===1) {
                $messageOne.textContent = `${valueTwo}  x (${a}) = ${keysTyped[0]}`
        
        }

        else if (answer>-0.5 && keysTyped.length===2 && answer.toString().length===2 && (10*Number(keysTyped[0])+Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${valueTwo}  x (${a}) = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${valueTwo}  x (${a}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
        

        else if (answer>-0.5 &&keysTyped.length===2 && answer.toString().length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${valueTwo}  x (${a}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

            }

        }
    
    
        })
    
    
        }

        



else if (valueThree === 9) {
    
    const question = valueOne*valueFour
    let a = (-1)*question
    answer = valueOne
    console.log(answer)

    const generateQuestion = function (wait) {
        if (questionCount.length<1) {
            setTimeout(() => {
                $messageOne.textContent = `${a} \xF7 (${valueTwo}) = `
        }, wait)
    }

        else if (questionCount.length>0) {
            $messageOne.textContent = `${a} \xF7 (${valueTwo}) = `
        }
    }

    generateQuestion(2000)

//set up the key pressing

window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    

        if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${a} \xF7 (${valueTwo}) = ${keysTyped[0]}`
                $messageIncorrect.textContent = `Solution: ${a} \xF7 (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
                   

        else if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${a} \xF7 (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)
                                               
        }


        else if (answer>-0.5 && answer.toString().length===2&&keysTyped.length===1) {
                $messageOne.textContent = `${a} \xF7 (${valueTwo}) = ${keysTyped[0]}`
        
        }

        else if (answer>-0.5 && keysTyped.length===2 && answer.toString().length===2 && (10*Number(keysTyped[0])+Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${a} \xF7 (${valueTwo}) = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${a} \xF7 (${valueTwo}) = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }
        

        else if (answer>-0.5 &&keysTyped.length===2 && answer.toString().length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${a} \xF7 (${valueTwo}) = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

            }

        }
    
    
        })
    
    
        }



else {
    
    const a = computerInteger(12)
    const b = computerInteger(12)
   
        if (a > b) {

            answer = b - a
            console.log(answer)

            const generateQuestion = function (wait) {
                if (questionCount.length<1) {
                    setTimeout(() => {
                        $messageOne.textContent = `${b}  -  ${a} = `
                }, wait)
            }
        
                else if (questionCount.length>0) {
                    $messageOne.textContent = `${b}  -  ${a} = `
                }
            }
        
            generateQuestion(2000)



//set up the key pressing

window.addEventListener('keypress', (e) => {
    //set up the reset ';' key

     if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }

   //only respond to numbers

   if (isNaN(Number(e.key)) && e.key!=='-' ) {
       console.log('not a number')
   }


   //play the game
   else {
       
    keysTyped.push(e.key)
    console.log(keysTyped)
    console.log(keysTyped.length) 
    
        
        if (answer<0 && answer.toString().length===2&&keysTyped.length===1) {
            $messageOne.textContent = `${b}  -  ${a} = ${keysTyped[0]} `
    
        }


        else if (answer<0 && keysTyped.length===2 && answer.toString().length===2 && (keysTyped[0]!=='-' || (-1)*Number(keysTyped[1])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${b}  -  ${a} = ${keysTyped[0]}${keysTyped[1]}`
                $messageIncorrect.textContent = `Solution: ${b}  -  ${a} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
        }


        else if (answer<0 && keysTyped.length===2 && answer.toString().length===2 && keysTyped[0]==='-' && (-1)*Number(keysTyped[1])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${b}  -  ${a} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===1) {
            $messageOne.textContent = `${b}  -  ${a} = ${keysTyped[0]}`
        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===2) {
            $messageOne.textContent = `${b}  -  ${a} = ${keysTyped[0]}${keysTyped[1]}`
    
        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===3 && (keysTyped[0]!=='-' || -10*Number(keysTyped[1])-Number(keysTyped[2])!==answer)) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${b}  -  ${a} = ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                $messageIncorrect.textContent = `Solution: ${b}  -  ${a} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)

        }


        else if (answer<0 && answer.toString().length===3 && keysTyped.length===3 && keysTyped[0]==='-' && (-10*Number(keysTyped[1])-Number(keysTyped[2])===answer)) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${b}  -  ${a} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)

        }

    }


    })


    }




        else {

            answer = a - b
            console.log(answer)

            const generateQuestion = function (wait) {
                if (questionCount.length<1) {
                    setTimeout(() => {
                        $messageOne.textContent = `${a}  -  ${b} = `
                }, wait)
            }
        
                else if (questionCount.length>0) {
                    $messageOne.textContent = `${a}  -  ${b} = `
                }
            }
        
            generateQuestion(2000)

        
            //set up the key pressing

        window.addEventListener('keypress', (e) => {
            //set up the reset ';' key

            if (e.key === ';') {
                localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
                localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
                location.reload()
                console.log(questionCount)
                console.log(correctRecord)
            }

        //only respond to numbers

        if (isNaN(Number(e.key)) && e.key!=='-' ) {
            console.log('not a number')
        }


        //play the game
        else {
            
            keysTyped.push(e.key)
            console.log(keysTyped)
            console.log(keysTyped.length) 
            
                

            if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                $messageTitle.textContent = 'Incorrect'
                $messageOne.textContent = `${a}  -  ${b} = ${keysTyped[0]}`
                $messageIncorrect.textContent = `Solution: ${a}  -  ${b} = ${answer}`
                questionCount.push('I')
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 5000)
                
            }
                

            else if (answer>-0.5 && answer.toString().length===1&&Number(keysTyped[0])===answer) {
                $messageTitle.textContent = 'Correct'
                $messageOne.textContent = `${a}  -  ${b} = ${answer}`
                correctRecord.push('C')
                questionCount.push('C')                 
                localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                localStorage.setItem('questionCount', JSON.stringify(questionCount))
                setTimeout(() => {
                    location.reload()
                }, 1000)
                                            
            }



                else if (answer.toString().length===2&&keysTyped.length===1) {
                    $messageOne.textContent = `${a}  -  ${b} = ${keysTyped[0]} `
            
                }


                else if (keysTyped.length===2 && answer.toString().length===2 && (keysTyped[0]!=='-' || (-1)*Number(keysTyped[1])!==answer)) {
                        $messageTitle.textContent = 'Incorrect'
                        $messageOne.textContent = `${a}  -  ${b} = ${keysTyped[0]}${keysTyped[1]}`
                        $messageIncorrect.textContent = `Solution: ${a}  -  ${b} = ${answer}`
                        questionCount.push('I')
                        localStorage.setItem('questionCount', JSON.stringify(questionCount))
                        setTimeout(() => {
                            location.reload()
                        }, 5000)
                }


                else if (keysTyped.length===2 && answer.toString().length===2 && keysTyped[0]==='-' && (-1)*Number(keysTyped[1])===answer) {
                        $messageTitle.textContent = 'Correct'
                        $messageOne.textContent = `${a}  -  ${b} = ${answer}`
                        correctRecord.push('C')
                        questionCount.push('C')                 
                        localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                        localStorage.setItem('questionCount', JSON.stringify(questionCount))
                        setTimeout(() => {
                            location.reload()
                        }, 1000)

                }


                else if (answer.toString().length===3 && keysTyped.length===1) {
                    $messageOne.textContent = `${a}  -  ${b} = ${keysTyped[0]}`
                }


                else if (answer.toString().length===3 && keysTyped.length===2) {
                    $messageOne.textContent = `${a}  -  ${b} = ${keysTyped[0]}${keysTyped[1]}`
            
                }


                else if (answer.toString().length===3 && keysTyped.length===3 && (keysTyped[0]!=='-' || -10*Number(keysTyped[1])-Number(keysTyped[2])!==answer)) {
                        $messageTitle.textContent = 'Incorrect'
                        $messageOne.textContent = `${a}  -  ${b} = ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                        $messageIncorrect.textContent = `Solution: ${a}  -  ${b} = ${answer}`
                        questionCount.push('I')
                        localStorage.setItem('questionCount', JSON.stringify(questionCount))
                        setTimeout(() => {
                            location.reload()
                        }, 5000)

                }


                else if (answer.toString().length===3 && keysTyped.length===3 && keysTyped[0]==='-' && (-10*Number(keysTyped[1])-Number(keysTyped[2])===answer)) {
                        $messageTitle.textContent = 'Correct'
                        $messageOne.textContent = `${a}  -  ${b} = ${answer}`
                        correctRecord.push('C')
                        questionCount.push('C')                 
                        localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                        localStorage.setItem('questionCount', JSON.stringify(questionCount))
                        setTimeout(() => {
                            location.reload()
                        }, 1000)

                }

            }


            })


            }


}



//Set up the running total of results


const totalQuestionsMessage = function (a, b) {
   
   if (a===0) {
       $messageTwo.textContent = ''
       }
   
   else {$messageTwo.textContent = `${b} out of ${a} correct`}
}

totalQuestionsMessage(questionCount.length, correctRecord.length)



//set the hidden html input value, to be appended to a file in the nodejs file. 

let appendedResultsDecimal = correctRecord.length/questionCount.length


document.querySelector('#submit-button').addEventListener('click', (e) => {

    if (!document.getElementById("student").value) {
        window.alert('You must provide a name')
    }

    else {

        document.getElementById("user").value = appendedResultsDecimal.toFixed(2)*100
        document.getElementById("totalQs").value = questionCount.length
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.assign('/index.html')
}

})




