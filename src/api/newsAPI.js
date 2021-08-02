import axiosInstance from "./axiosInstance";

const newsApi = {
    getUkraineNews: limit => axiosInstance.get("/news/UkraineNews", {params: {limit}}).then(response => response.data),
    getCurrentNewsArticle: id => axiosInstance.get(`/news/${id}`).then(response => response.data),
    getWorldNews: limit => axiosInstance.get("/news/worldNews", {params: {limit}}).then(response => response.data)
}
export default newsApi