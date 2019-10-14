import axios from 'axios';

const KEY = 'AIzaSyBe5U8824C69eXbtVSTb0ye7tsiu86ZJGg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,  
        key: KEY
    }
});

