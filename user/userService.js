
var user=require("./userModel")
function add(req,res,next){
    console.log(req.params)
    new user({
        name:req.params.name,
        pwd:req.params.pwd
    } ).save((err,data)=>{
        if(err)
        {
            console.log(err)

        }else{
            console.log(data)
            res.json(data)
        }
    })
}
const addUser = async (req, res, next) => {
    const { name, pwd } = req.body;
    let User;
    
    try {
        User = new user({
        
        name: name,   
        pwd: pwd,
      
        
      });
      await User.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!User) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ User });
  };
  
const list=(req,res,nexr)=>{
    
    user.find((err,data)=>{
        if(err)
        {
            console.log(err)

        }else{
            console.log(data)
            res.json(data)
        }
    })
}
 const deleteUser = async(req,res,next)=>{
    try {
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted !")
    } catch (error) {
        res.json(error)
    }
}
 const update = (req, res)=>{
    const id = req.params.id;
    user.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

module.exports={add,list,addUser,deleteUser,update}

