import axios from 'axios';

const url = 'http://localhost:8000/people';
class BioApi {
    static async fetchBio() {
        return axios.get(url);
    }

    static async getOnePerson(id) {
        // console.log('`${url}/${id}`', axios.get(`${url}/${id}`));
        return axios.get(`${url}/${id}`);
    }
}

export default BioApi;