import axios from 'axios';

const url = 'https://bio-back.herokuapp.com';
const url2 = 'http://localhost:8000';
class BioApi {
    static async fetchBio() {
        return axios.get(url);
    }

    static async getOnePerson(id) {
        return axios.get(`${url}person/${id}`);
    }

    static async handleSubmit(data) {
        return axios.post(`${url}/people/people`, data);
    }

    static async login(data) {
        return axios.post(`${url}/user/login`, data);
    }

    //REGISTER
    static async register(data){
        return axios.post(`${url}/user/register`, data);
    }
    //get auto data
    static async getAutoData() {
        return axios.get('http://localhost:8000/people/auto');
    }

    //Submit feeds
    static async submitFeed(data){
        return axios.post(`${url}/feed`, data);
    }

    //Get feeds
    static async getFeed(){
        return axios.get(`${url}/feed`);
    }

    //Approve
    static async approve(id){
        return axios.put(`${url}/feed/${id}`);
    }

    //getDashboardFeed
    static async getDashboardFeed(){
        return axios.get(`${url}/dashboard/feed`);
    }
}

export default BioApi;