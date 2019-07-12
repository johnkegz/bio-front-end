import axios from 'axios';

const url = 'http://localhost:8000/people';
class BioApi {
    static async fetchBio() {
        return axios.get(url);
    }

    static async getOnePerson(id) {
        return axios.get(`${url}/${id}`);
    }

    static async handleSubmit(data) {
        return axios.post(url, data);
    }
}

export default BioApi;