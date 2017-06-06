/**
 * Created by christopherchao on 6/5/17.
 */
import axios from "axios";


const API_URL = "https://api.edu.chat";

export const login = (username, password) => {
    const loginURL = "/v1/api/login/";
    const user = axios.post(API_URL + loginURL, {
        username,
        password,
        platform: "web"
    }).then((response) => {
        return response.data.results;
    }).catch(error => {
        console.error("Authentication didnt work out " + error);
    });
    return user;

};
