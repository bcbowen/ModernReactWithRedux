import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ESCNSZfu6heGIRCRCg7rK9d1gquO-HdnKda_tVTloko'
    }
});