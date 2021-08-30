import { handleResponse } from "../utils";
import { apiService } from "./ApiService";
import { apiEndpoints } from "../api";

class GeneralService {
    async uploadFile(file) {
        try {
            return handleResponse({
                success: true,
                ...(await apiService
                    .processes()
                    .post(apiEndpoints.uploadFile, file)
                    .then(({ data }) => data)),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response.data });
        }
    }
    async getAllArticles() {
        try {
            const data = await apiService
                .processes()
                .get(apiEndpoints.getAllArticles)
                .then(({ data }) => data);

            return handleResponse({ success: true, data });
        } catch (response) {
            console.log(response);
            // return handleResponse({ success: false, ...response.data });
        }
    }

    async addBlog(blogData) {
        try {
            return handleResponse({
                success: true,
                data: await apiService
                    .processes()
                    .post(apiEndpoints.addBlog, blogData)
                    .then(({ data }) => data),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response.data });
        }
    }

    async EditBlog(blogData) {
        try {
            return handleResponse({
                success: true,
                data: await apiService
                    .processes()
                    .post(apiEndpoints.EditBlog, blogData)
                    .then(({ data }) => data),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response.data });
        }
    }

    async getAllMessages() {
        try {
            const data = await apiService
                .processes()
                .get(apiEndpoints.getAllMessages)
                .then(({ data }) => data);

            return handleResponse({ success: true, data });
        } catch (response) {
            console.log(response);
            // return handleResponse({ success: false, ...response.data });
        }
    }

    async getAllDates() {
        try {
            const data = await apiService
                .processes()
                .get(apiEndpoints.getAllDates)
                .then(({ data }) => data);

            return handleResponse({ success: true, data });
        } catch (response) {
            console.log(response);
            // return handleResponse({ success: false, ...response.data });
        }
    }

    async deleteItem(blog_id) {
        try {
            return handleResponse({
                success: true,
                data: await apiService
                    .processes()
                    .post(apiEndpoints.deleteItem, blog_id)
                    .then(({ data }) => data),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response.data });
        }
    }

    async deleteMessage(itemId) {
        try {
            return handleResponse({
                success: true,
                data: await apiService
                    .processes()
                    .post(apiEndpoints.deleteMessage, itemId)
                    .then(({ data }) => data),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response.data });
        }
    }
    async deleteDate(itemId) {
        try {
            return handleResponse({
                success: true,
                data: await apiService
                    .processes()
                    .post(apiEndpoints.deleteDate, itemId)
                    .then(({ data }) => data),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response.data });
        }
    }
}

export const generalServices = new GeneralService();
