import axiosInstance from "./axiosInstance";

const newsApi = {
    getUkraineNews: limit => axiosInstance.get(`/news/UkraineNews?limit=${limit}`).then(response => response.data),
    getWorldNews: limit => axiosInstance.get(`/news/worldNews?limit=${limit}`).then(response => response.data)
}
export default newsApi