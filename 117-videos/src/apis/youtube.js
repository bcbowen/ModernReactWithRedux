import axios from 'axios';

const KEY = "AIzaSyDQ4r1_zDkoUubwBwvuzDr-ZPVJbBfZJmo";

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5, 
        key: KEY
    }
});