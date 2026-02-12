export const getUsers =  (req , res)=> {
    const users = ['user1' , 'user2' , 'user3']  
    if( req.body.name === "Prashant"){
         res.send("Hello Prashant")
    }
    console.log(req.body);
    res.send(users)
}
