"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoUpdate = exports.PhotoDelete = exports.PhotoUpload = void 0;
const cloudinary_1 = require("cloudinary");
const cloudinary = cloudinary_1.v2;
cloudinary.config("cloudinary://468217321751245:TOQrIGdU6h6RmaTbdH41FqXFagg@fjmedina");
function validateFileExt(file) {
    try {
        const validExtensions = ["jpg", "jpeg", "webp", "png", "svg"];
        const [, ext] = file.name.split('.');
        if (!validExtensions.includes(ext.toLocaleLowerCase()))
            throw new Error("Invalid file type");
    }
    catch (error) {
        if (error instanceof Error)
            return Promise.reject(error.message);
    }
}
async function PhotoUpload(file, subfolder) {
    const error = validateFileExt(file);
    if (error)
        return error;
    const { tempFilePath } = file;
    const data = await cloudinary.uploader.upload(tempFilePath, { folder: `bibloslibrary/${subfolder}` });
    return data;
}
exports.PhotoUpload = PhotoUpload;
async function PhotoDelete(public_id) {
    await cloudinary.uploader.destroy(public_id)
        .catch((reason) => { return Promise.reject(reason); });
}
exports.PhotoDelete = PhotoDelete;
async function PhotoUpdate(public_id, file, subfolder) {
    const error = validateFileExt(file);
    if (error)
        return error;
    await PhotoDelete(public_id);
    return await PhotoUpload(file, subfolder);
    ;
}
exports.PhotoUpdate = PhotoUpdate;
