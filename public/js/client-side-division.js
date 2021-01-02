console.log('client side division js file has loaded')

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

//generate the numbers

const computerInteger = function (max) {
    return Math.floor(Math.random() * max) + 1
   }

const valueOne = computerInteger(12)
const answer = computerInteger(12)
const valueThree = valueOne*answer   


//set messages to empty and respond to the document interaction

$messageIncorrect.textContent = ''


//generate question text function with a 1 second delay

const generateQuestion = function (wait) {
    if (questionCount.length<1 && answer<10) {
        setTimeout(() => {
            $messageOne.textContent = `${valueThree}  /  ${valueOne} = _`
    }, wait)
}

    else if (questionCount.length<1 && answer>9) {
        setTimeout(() => {
            $messageOne.textContent = `${valueThree}  /  ${valueOne} = _ _`
    }, wait)
    }

    else if (questionCount.length>0 && answer<10) {
        $messageOne.textContent = `${valueThree}  /  ${valueOne} = _`
    }

    else {
        $messageOne.textContent = `${valueThree}  /  ${valueOne} = _ _`
    }
}

generateQuestion(2000)


//create a record of the typed keys

var keysTyped = []
var resultsArray = []


//run the function when the student submits an answer

window.addEventListener('keypress', (e) => {
    

    // if (e.key === 'Enter') {
    //    location.reload()
    // }

    // //set up the finishing 'f' key

    // else if (e.key === 'f') {
        
    //    const totalQuestionsMessage = function (a, b) {
                  
    //        if (a===0) {
    //            $messageOne.textContent = ''
    //            }
           
    //        else {
    //            $messageOne.textContent = `${b} out of ${a} correct`}
    //            $messageTwo.textContent = ''
    //            $messageIncorrect.textContent = ''
    //            localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
    //            localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
    //    }
       
    //    totalQuestionsMessage(questionCount.length, correctRecord.length)
    //    resultsArray.push({
    //        Correct: correctRecord.length,
    //        Total: questionCount.length
    //    })     

    // }

    
    //set up the reset 'r' key

    if (e.key === ';') {
        localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
        localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
        location.reload()
        console.log(questionCount)
        console.log(correctRecord)
    }
   
    //only respond to numbers

    if (isNaN(Number(e.key))) {
        console.log('not a number')
    }
 
    //run the program based on the keys pressed

    else {
       
       keysTyped.push(e.key)
       console.log(keysTyped.length)
       
               if (answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                   $messageTitle.textContent = 'Incorrect'
                   $messageIncorrect.textContent = `*${valueThree} / ${valueOne} does not equal ${keysTyped[0]}` 
                   $messageOne.textContent = `${valueThree} / ${valueOne} = ${answer}`
                   questionCount.push('I')
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 3000)
               }
                   
               if (answer.toString().length===1&&Number(keysTyped[0])==answer) {
                   $messageTitle.textContent = 'Correct'
                   $messageOne.textContent = `${valueThree} / ${valueOne} = ${answer}`
                   correctRecord.push('C')
                   questionCount.push('C')                 
                   localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 1000)
                                   
               }


               else if (answer.toString().length===2&&keysTyped.length===1) {
                   $messageOne.textContent = `${valueThree} / ${valueOne} = ${keysTyped[0]}`

               }

               else if (answer.toString().length===2&&keysTyped.length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1]))!==answer) {
                   $messageTitle.textContent = 'Incorrect'
                   $messageIncorrect.textContent = `*${valueThree} / ${valueOne} does not equal ${keysTyped[0]}${keysTyped[1]}`
                   $messageOne.textContent = `${valueThree} / ${valueOne} = ${answer}` 
                   questionCount.push('I')
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 3000)
                    
               }

               else if (answer.toString().length===2&&keysTyped.length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1]))==answer) {
                   $messageTitle.textContent = 'Correct'
                   $messageOne.textContent = `${valueThree} / ${valueOne} = ${answer}`
                   questionCount.push('C')
                   correctRecord.push('C')
                   localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 1000)
                   
               }


               
   } 
       
})


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
