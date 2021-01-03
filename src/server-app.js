//require the modules

const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
const express = require('express')
const moment = require('moment')

//set up express

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


//get the data posted from the HTML form

app.use(express.urlencoded())
app.use(express.json())


app.post('/index.html', function(request, response) {
        console.log(request.body)
            
                
        //get all the required data from the user input
        
        let results = request.body
            
        //create time and date to be used in the saved data 
        moment.locale()
        const dateStamp = moment().format('DD/MM/YYYY')
            
        
        //append information to a file when button clicked
        
        if (results.totalQs==0 || results.student==='') {
                console.log('Missing Data, No action on logbook')
                //response.sendFile(path.join(publicDirectoryPath, '/index.html'))    
                }
        
        
        else {
                fs.appendFileSync('record.csv', results.student + "," + results.activity + "," + results.percentage+"%" + "," + results.totalQs + "," + dateStamp + "\n")
                response.sendFile(path.join(publicDirectoryPath, '/index.html'))
            }
        
        })
 


app.listen(port, () => {
    console.log('Server is up on port '+ port)
})





