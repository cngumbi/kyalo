/*import { upload } from "../middleware/upload";
import express from 'express';
import expressAsyncHandler from "express-async-handler";

const uploadRouter = express.Router();

upload.post("/upload", upload.single("file"), (req, res) => {
    if (req.file === undefined) return res.send("you must select a file");
    const imgURL = `http://localhost:8080/file/${req.file.filename}`;
    return res.send(imgURL);
})

export default uploadRouter;*/