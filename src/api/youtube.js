const axios = require('axios');

const database = [
  '6xJlnXOE_2o',
  'ocO470rx-Bk',
  'Mb19aQcLxBE',
  '-AXC7UzodT0',
  'E-T1gEeUqwA',
  'mBEpIqtE8Pg',
];
const apiKey = 'AIzaSyAMyMZFjNns6Uu_RvuOJyVqQpfpKvh6sG0';

export default {
  async fetchVideos() {
    const prs = [];
    database.forEach((id) => {
      const pr = axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&maxResults=1&key=${apiKey}`);
      prs.push(pr);
    });
    const results = await Promise.all(prs);
    return results.map(t => t.data.items[0]);
  },
};

