//import multer from 'multer';
/*import { GridFsStorage } from 'multer-gridfs-storage';
import config from '../config';

//const multer = multer;
const GridFsStorage = { GridFsStorage };

//create a storage object with a given configaration
const storage = new GridFsStorage({
    url: config.MONGODB_URL,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        }
    }

})

export const upload = multer({ storage }); //to check for error*/