const models = require('../model/User')

const auth = (request, response, next) => {   
    const { username } = request.headers;

    models.users.forEach(user=>{
        if(user.username === username){
            request.user = user  
        }
    })

    if(!request.user) return response.status(404).json({error: 'User not found'})

    next()
}

module.exports = auth