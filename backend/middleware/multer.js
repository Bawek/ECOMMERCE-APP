import multer from "multer"
const storage=multer.diskStorage([{

    filename:(req,file,cb)=>{
        cb(null,file.orginalname)
    }
}])

const upload=multer({storage})
export default upload