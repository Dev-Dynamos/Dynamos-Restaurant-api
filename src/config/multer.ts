import multer from "multer";
import { v4 as uuidV4 } from "uuid";

const tmpFolder = "./tmp";

const storage = multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
        const uuid = uuidV4();

        const filename = `${uuid}-${file.originalname}`;

        return callback(null, filename);

    }
});

const multerConfig = multer({
    storage,
    fileFilter: (request, file, callback) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            "application/pdf"
        ]

        if (allowedMimes.includes(file.mimetype)) {
            return callback(null, true);
        }

        callback(new Error('Extensão de ficheiro inválida!'))

    }
});

export { multerConfig }