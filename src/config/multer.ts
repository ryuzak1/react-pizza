import crypto from "crypto"
import multer from "multer"
import { extname, resolve } from "path"

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callBack) => {
                    const fileHash = crypto.randomBytes(4).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`

                    return callBack(null,fileName);
                }
            })
        }

    }
}