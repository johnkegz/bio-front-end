import axios from 'axios';

const url = 'http://localhost:8000/people/';
class BioApi {
    static async fetchBio() {
        return axios.get(url);
    }

    static async getOnePerson(id) {
        return axios.get(`${url}person/${id}`);
    }

    static async handleSubmit(data) {
        return axios.post(`${url}/people`, data);
    }

    static async login(data) {
        return axios.post('http://localhost:8000/user/login', data);
    }
    //get auto data
    static async getAutoData() {
        return axios.get('http://localhost:8000/people/auto');
    }
}

export default BioApi;