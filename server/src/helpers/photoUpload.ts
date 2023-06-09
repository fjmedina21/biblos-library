import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { UploadedFile } from "express-fileupload";
import { config } from "../config";
import { ErrorHandler } from './error.handler';
import { response } from 'express';

cloudinary.config({
    cloud_name: config.CLOUDINARY_NAME,
    api_key: config.CLOUDINARY_KEY,
    api_secret: config.CLOUDINARY_SECRET,
    secure: true
});

function validateFileExt(file: UploadedFile) {
    try {
        const validExtensions = ["jpg", "jpeg", "webp", "png", "svg"];
        const [, ext] = file.name.split('.');

        if(!validExtensions.includes(ext.toLocaleLowerCase())) throw new ErrorHandler("Invalid file type", 400);
    } catch(error: unknown) {
        if (error instanceof ErrorHandler) return Promise.reject(error);
    }
};

export async function PhotoUpload(file: UploadedFile, subfolder: string): Promise<UploadApiResponse> {
    const error = validateFileExt(file);
    if (error) return error;

    const { tempFilePath } = file;
    return await cloudinary.uploader.upload(tempFilePath, { folder: `bibloslibrary/${subfolder}` });
}

export async function PhotoDelete(public_id: string): Promise<void> {
    await cloudinary.uploader.destroy(public_id)
        .catch((reason: unknown) => { return Promise.reject(reason); });
}

export async function PhotoUpdate(public_id: string, file: UploadedFile, subfolder: string): Promise<UploadApiResponse> {
    const error = validateFileExt(file);
    if (error) return error;

    await PhotoDelete(public_id);
    return await PhotoUpload(file, subfolder);
}