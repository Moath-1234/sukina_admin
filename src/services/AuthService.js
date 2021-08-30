import { handleResponse } from "../utils";
import { apiService } from "./ApiService";
import { apiEndpoints } from "../api";

// Service to handle any Authentication process
class AuthService {
    async login(userData) {
        try {
            const data = await apiService
                .auth()
                .post(apiEndpoints.login, userData)
                .then(({ data }) => data);

            // apiService.storeAccessToken(currentUser.access_token);

            return handleResponse({ success: true, currentUser: data });
        } catch (response) {
            console.log(response);
            // return handleResponse({ success: false, ...response.data });
        }
    }

    logout() {
        apiService.removeAccessToken();
    }
}

export const authService = new AuthService();
