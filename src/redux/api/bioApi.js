import axios from 'axios';

const url = 'http://localhost:8000/people';
class BioApi {
    static async fetchBio(num) {
        console.log(axios.get(url));
        return axios.get(url);
    }
}

export default BioApi;