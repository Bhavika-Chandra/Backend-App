import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        //Method given below is used to avoid file overwrite 
        //if two or more files comes with the same name.
      //cb(null, file.fieldname + '-' + uniqueSuffix)
      cb(null, file.originalname)
    }
  })
  
 export const upload = multer({ 
    storage, 
})