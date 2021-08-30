import { generalServices } from "./GeneralServices";
import { uploadDataFactory } from "../utils";

// Core Service
// Service to group all needed actions in any component that has a form
// Currently support upload image locally to render it on client side & another method to upload to the server
class AddEditActionsService {
    createDataURL = (files) => {
        const file = files.item?.(0) ?? files[0];

        if (!file) return uploadDataFactory({});

        const blob = (window.URL || window.webkitURL).createObjectURL(file);

        return { file, blob, prefix: "", isUploaded: true };
    };

    uploadFile = async (file) => {
        if (!file) return null;

        const formData = new FormData();

        formData.append("file", file);

        return (await generalServices.uploadFile(formData)).data;
    };
}

export const addEditActionsService = new AddEditActionsService();
