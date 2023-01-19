const {Octokit} = require('octokit')
require('dotenv').config()

const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN
  })

module.exports={
    getUserDetails : async(req,res)=>{
        console.log(process.env.ACCESS_TOKEN)
        try{
        const userData = await octokit.request('GET /users/{username}', {
            username: req.params.username  
          })
          
          
        console.log("userdata",userData)
        return res.status(userData.status).json(userData)
        }catch(err){
          console.log("error",err)
          // return res.json(err.message).status(404)
          res.status(404).json({data:"Invalid Github Username",status:404});
        }
    },
    getUserRepositories : async(req,res)=>{
      console.log(req.params)
      try{
        const repositories = await octokit.request('GET /users/{username}/repos{?type,updated,direction,per_page,page}', {
            username: req.params.username,
            sort: 'created',
            per_page: '10',
            page:req.params.page
          })
          console.log("repo : ",repositories)
          return res.status(repositories.status).json(repositories)
      }catch(err){
        // console.log(err)
        res.status(404).json({data:"Invalid Github Username",status:404});
        
      }
    },    
}