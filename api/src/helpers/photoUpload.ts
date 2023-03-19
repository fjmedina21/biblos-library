import { v2, UploadApiResponse } from "cloudinary";
import { UploadedFile } from "express-fileupload";

const cloudinary = v2;
cloudinary.config("cloudinary://468217321751245:TOQrIGdU6h6RmaTbdH41FqXFagg@fjmedina");

function validateFileExt(file: UploadedFile) {
    try {
        const validExtensions = ["jpg", "jpeg", "webp", "png", "svg"];
        const [, ext] = file.name.split('.');

        if (!validExtensions.includes(ext.toLocaleLowerCase())) throw new Error("Invalid file type");
    } catch (error: unknown) {
        if (error instanceof Error) return Promise.reject(error.message);
    }
}

export async function PhotoUpload(file: UploadedFile, subfolder: string): Promise<UploadApiResponse> {
    const error = validateFileExt(file);
    if (error) return error;

    const { tempFilePath } = file;
    const data = await cloudinary.uploader.upload(tempFilePath, { folder: `bibloslibrary/${subfolder}` });
    return data;
}

export async function PhotoDelete(public_id: string): Promise<void> {
    await cloudinary.uploader.destroy(public_id)
        .catch((reason: unknown) => { return Promise.reject(reason); });
}

export async function PhotoUpdate(public_id: string, file: UploadedFile, subfolder: string): Promise<UploadApiResponse> {
    const error = validateFileExt(file);
    if (error) return error;

    await PhotoDelete(public_id);
    return await PhotoUpload(file, subfolder);;

}