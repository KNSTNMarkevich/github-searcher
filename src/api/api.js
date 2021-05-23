import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com/"
});

export const userAPI = {

    getUserInfo(username){
        return instance.get(`user/${username}`)
            .then(response => response)
    }

}
