import axios from "axios";

class ApiService {
    auth() {
        return axios.create({ mode: "cors", baseURL: "https://www.moeabahre.com/sukina/auth/" });
    }
    processes() {
        return axios.create({ mode: "cors", baseURL: "https://www.moeabahre.com/sukina/processes/" });
    }
}

export const apiService = new ApiService();
