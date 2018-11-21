const axios = require('axios');
const GoogleSpreadSheet = require('google-spreadsheet');
const _ = require('lodash');
const creds = require('./aloetv-222617-c3481ab5e923');

const apiKey = 'AIzaSyAMyMZFjNns6Uu_RvuOJyVqQpfpKvh6sG0';

export default {
  async fetchVideos() {
    try {
      const docs = new GoogleSpreadSheet('1DQ_yIJ1AJWPLfmhJsLSoe3tkOsnhsg31k9knhsT12gQ');
      await new Promise((resolve) => {
        docs.useServiceAccountAuth(creds, () => {
          docs.getInfo((err, info) => {
            resolve(info.worksheets[0]);
          });
        });
      });
      let database = await new Promise((resolve) => {
        docs.getRows(1, {
          offset: 1,
          limit: 9999,
        }, (err, cells) => {
          resolve(cells);
        });
      });
      database = _.reverse(_.sortBy(database, ['publishtime']));

      const prs = [];
      database.forEach((data) => {
        const pr = axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${data.id}&maxResults=1&key=${apiKey}`);
        prs.push(pr);
      });
      const results = await Promise.all(prs);
      return results.map(t => t.data.items[0]);
    } catch (err) {
      throw err;
    }
  },
};

