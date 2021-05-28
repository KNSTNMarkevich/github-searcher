import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com/",
});

export const userAPI = {

    getUserInfo(username){
        return instance.get(`users/${username}`)
            .then(response => response.data)
    },

    getRepos(username, currentPage, perPage){
        return instance.get(`users/${username}/repos?page=${currentPage}&per_page=${perPage}`)
            .then(response => response.data)
    }
}

