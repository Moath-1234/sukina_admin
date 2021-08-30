import axios from "axios";

class ApiService {
    baseURL = "https://www.moeabahre.com/sukina/processes/";
    token = process.env.REACT_APP_API_TOKEN;

    get accessToken() {
        return window.localStorage.getItem("accessToken") ?? "";
    }

    get language() {
        return window.localStorage.getItem("language") ?? "en";
    }

    // authenticated() {
    //     return axios.create({ baseURL: this.baseURL, headers: { Token: this.token, Authorization: `Bearer ${this.accessToken}` } });
    // }

    auth() {
        return axios.create({ mode: "cors", baseURL: "https://www.moeabahre.com/sukina/auth/" });
    }
    processes() {
        return axios.create({ mode: "cors", baseURL: "https://www.moeabahre.com/sukina/processes/" });
    }

    storeToken(token) {
        window.localStorage.setItem("accessToken", token);
    }
}

export const apiService = new ApiService();
