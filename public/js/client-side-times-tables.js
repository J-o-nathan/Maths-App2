console.log('client side times tables js file has loaded')

//elements from the page

const $messageOne = document.querySelector('#message-1')
const $messageTwo = document.querySelector('#message-2')
const $messagePuzzle = document.querySelector('#puzzle')
const $messageIncorrect = document.querySelector('#incorrect')
const $messageTitle = document.querySelector('#title')
const $homeLink = document.querySelector('#home-link')

//get the saved data and generate the new numbers

let correctRecord = getSavedDataCorrect()
let questionCount = getSavedDataTotal()

console.log(questionCount)
console.log(correctRecord)

   
const valueOne = computerInteger(12)
const valueTwo = computerInteger(12)
   

//set messages to empty and respond to the document interaction

$messageIncorrect.textContent = ''
const answer = valueOne*valueTwo


//setting up links between the pages

$homeLink.addEventListener('click', function (e) {
    location.assign('/index.html')
})

//generate question text function with a 1 second delay

questionMessageMultiplication(2000)

//Create a record of the typed keys

var keysTyped = []
var resultsArray = []

//Run the function when the student submits an answer

window.addEventListener('keypress', (e) => {
    

    // if (e.key === 'Enter') {
    //    location.reload()
    // }

    // //Set up the finishing 'f' key

    // else if (e.key === 'f') {
        
    //    const totalQuestionsMessage = function (a, b) {
                  
    //        if (a===0) {
    //            $messageOne.textContent = ''
    //            }
           
    //        else {
    //            $messageOne.textContent = `${b} out of ${a} correct`}
    //            $messageTwo.textContent = ''
    //            $messageIncorrect.textContent = ''
    //         }
       
    //    totalQuestionsMessage(questionCount.length, correctRecord.length)
    //    resultsArray.push({
    //        Correct: correctRecord.length,
    //        Total: questionCount.length
    //    })

    //    localStorage.setItem('questionCount', JSON.stringify(questionCount=[]))
    //    localStorage.setItem('correctRecord', JSON.stringify(questionCount=[]))
    // }

    //Set up the reset 'r' key

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
 
    //Run the program based on the keys pressed

    else {
       
       keysTyped.push(e.key)
       console.log(keysTyped.length)
       
               if (answer.toString().length===1&&Number(keysTyped[0])!==answer) {
                   $messageTitle.textContent = 'Incorrect'
                   $messageIncorrect.textContent = `*${valueOne} x ${valueTwo} does not equal ${keysTyped[0]}` 
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${answer}`
                   questionCount.push('I')
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 5000)
               }
                   
               if (answer.toString().length===1&&Number(keysTyped[0])==answer) {
                   $messageTitle.textContent = 'Correct'
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${answer}`
                   correctRecord.push('C')
                   questionCount.push('C')                 
                   localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 1000)
                                   
               }


               else if (answer.toString().length===2&&keysTyped.length===1) {
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${keysTyped[0]}`

               }

               else if (answer.toString().length===2&&keysTyped.length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1]))!==answer) {
                   $messageTitle.textContent = 'Incorrect'
                   $messageIncorrect.textContent = `*${valueOne} x ${valueTwo} does not equal ${keysTyped[0]}${keysTyped[1]}`
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${answer}` 
                   questionCount.push('I')
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 5000)
                    
               }

               else if (answer.toString().length===2&&keysTyped.length===2&&(10*Number(keysTyped[0])+Number(keysTyped[1]))==answer) {
                   $messageTitle.textContent = 'Correct'
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${answer}`
                   questionCount.push('C')
                   correctRecord.push('C')
                   localStorage.setItem('correctRecord', JSON.stringify(correctRecord))
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 1000)
                   
               }


               else if (answer.toString().length===3&&keysTyped.length===1) {
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${keysTyped[0]}` 
               }

               else if (answer.toString().length===3&&keysTyped.length===2) {
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${keysTyped[0]}${keysTyped[1]}` 
               }

               
               else if (answer.toString().length===3&&keysTyped.length===3&&Number(100*keysTyped[0]+Number(10*keysTyped[1])+Number(keysTyped[2]))!==answer) {
                   $messageTitle.textContent = 'Incorrect'
                   $messageIncorrect.textContent = `*${valueOne} x ${valueTwo} does not equal ${keysTyped[0]}${keysTyped[1]}${keysTyped[2]}`
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${answer}`
                   questionCount.push('I')
                   localStorage.setItem('questionCount', JSON.stringify(questionCount))
                   setTimeout(()=>{
                    location.reload()
                    }, 5000)
                    
               }

               else if (answer.toString().length===3&&keysTyped.length===3&&Number(100*keysTyped[0]+Number(10*keysTyped[1])+Number(keysTyped[2]))==answer) {
                   $messageTitle.textContent = 'Correct'
                   $messageOne.textContent = `${valueOne} x ${valueTwo} = ${answer}`
                   correctRecord.push('C')
                   questionCount.push('C')
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
