import axios from 'axios';

const url = 'http://localhost:8000/people/';
class BioApi {
    // const params = {
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    // }
    static async fetchBio() {
        return axios.get(url);
    }

    static async getOnePerson(id) {
        console.log("getOnePerson here +++", axios.get(`${url}people/${id}`));
        return axios.get(`${url}person/${id}`);
    }

    static async handleSubmit(data) {
        return axios.post('https://bio-back.herokuapp.com/people/people', data);
    }

    static async login(data) {
        return axios.post('http://localhost:8000/user/login', data);
    }
    //get auto data
    static async getAutoData() {
        return axios.get('http://localhost:8000/people/auto');
    }

    //Submit feeds
    static async submitFeed(data){
        console.log("API  ++++++++++++++++", data)
        return axios.post('http://localhost:8000/feed', data);
    }
}

export default BioApi;