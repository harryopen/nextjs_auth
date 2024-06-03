import mongoose  from "mongoose";
export default function connect(){
try{
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection ;
    connection.on('connected',()=>{
        console.log('MOngodb connected succesfully ');
    })

    connection.on('error',(err)=>{
        console.log('error' + err);
        process.exit();
    })
}
catch (error){
    console.log('Something  goes wrong ');
    console.log(error);
}

}