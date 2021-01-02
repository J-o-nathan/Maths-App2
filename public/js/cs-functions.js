// fetch existing todos from localStorage
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



const getSavedResultsArray = () => {
    const dataJSON = localStorage.getItem('correctRecord')

    try {
        return dataJSON ? JSON.parse(dataJSON) : []
    } catch (e) {
        return []
    }
}


//generate computer integer

const computerInteger = function (max) {
    return Math.floor(Math.random() * max) + 1
   }


//generate question text function with a 1 second delay

const questionMessageMultiplication = function (wait) {
    if (questionCount.length<1) {
        setTimeout(() => {
    
            const questionMessageCount = function (a) {
                if (a < 10) {
                 $messageOne.textContent = `${valueOne} x ${valueTwo} = _`
             }
             else if (a < 100) {
                 $messageOne.textContent = `${valueOne} x ${valueTwo} = _ _`
             }
             else {$messageOne.textContent = `${valueOne} x ${valueTwo} = _ _ _`} 
             }
             
             questionMessageCount(answer)
            
            }, wait)
            

    }

    else {
          const questionMessageCount = function (a) {
                if (a < 10) {
                 $messageOne.textContent = `${valueOne} x ${valueTwo} = _`
             }
             else if (a < 100) {
                 $messageOne.textContent = `${valueOne} x ${valueTwo} = _ _`
             }
             else {$messageOne.textContent = `${valueOne} x ${valueTwo} = _ _ _`} 
             }
             
             questionMessageCount(answer)  
    }
}



