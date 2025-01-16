



const addDoctor= async (req,res)=>{
try{
    const {name,email,password,spciality,degree,experience,about,fes,address}=req.body;
    const imageFile=req.file
    console.log({name,email,password,spciality,degree,experience,about})
}catch(error){

}
}



export{addDoctor}