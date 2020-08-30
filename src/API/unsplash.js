import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cYvATpTLxqBXgKmbf-tRapIlggOXyEt6MXMioB9OkxM'
    }
});