import axios from 'axios';

const url = 'http://localhost:8000/people';
class BioApi {
    static async fetchBio() {
        return axios.get(url);
    }

    static async getOnePerson(id) {
        return axios.get(`${url}/login`);
    }

    static async handleSubmit(data) {
        return axios.post(url, data);
    }

    static async login(data) {
        console.log('here ++', axios.post(`${url}/login`, data));
        return axios.post(`${url}/login`, data);
    }
}

export default BioApi;