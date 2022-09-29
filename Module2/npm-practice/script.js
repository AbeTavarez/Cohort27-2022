const request = require('request')

request('http://jsonplaceholder.typicode.com/users', 
function(error, response, body){
    console.error(error)
    console.log(body)
    console.log(response.statusCode);
})