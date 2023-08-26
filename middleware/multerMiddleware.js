import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // sets directory where img uploads go
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;
