const axios = require('axios');
const GoogleSpreadSheet = require('google-spreadsheet');
const _ = require('lodash');

const apiKey = 'AIzaSyAMyMZFjNns6Uu_RvuOJyVqQpfpKvh6sG0';

export default {
  async fetchVideos() {
    try {
      const docs = new GoogleSpreadSheet('1DQ_yIJ1AJWPLfmhJsLSoe3tkOsnhsg31k9knhsT12gQ');
      await new Promise((resolve) => {
        docs.useServiceAccountAuth({
          client_email: 'google-spreadsheet@aloetv-222617.iam.gserviceaccount.com',
          private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCush3nImQvg/fU\nWbAw7X/lBELkzNXOxSYhhr5bGYRcJQVXpvkIUAkFFBVcdta/gj2psP4QUNix8h//\nU1LnWPvd5F/FQUA3aNjmfqCBWVAw2CyKlqC+P4P3AbXjkTbZWjGs47xo8ZjC4D1c\n9AY13fRcZX4OQkYCBIp4hzx2AWsaduVPepvLGj3mz8QdhXz9vB/rr+oiMRwo7mmz\nBCTIJfGMoKJXcFW6vZQbmZxGWdqeNGDSUAak7R9a59rZiFeYaE4+s7/z6XG/nS9M\nlpK79Z1e5iY991rILMdF200v5imtc0FRNx2I6LKqedwaMWcgAVgfrnGbEPpQXHDx\nLsGaysodAgMBAAECgf8sWw08on7NkbRbNmqGAcd3Xp2demTPGz+TQ6MRfmkc/Ele\n+AZDFg80OuUxlPrxpSAC9e2MNvrOM6vsKDvkgbNxo4qtiuPDLdvkqkIWlZbG0Bx/\nE7+8jmPzU3vbTAOhLEVwoGI2QyGGWWk7MLpi8vgYfayD8k/UM1L1R2ESlUmcbieA\nB3zR3peP3Reoebq6I/jmVfxB2sVi7nabDC83CAmTNXF4U12fBFOGi3kyljABeKiW\nNCA9kbaaQEA+PeH+Trsgw8O6EjBTnHNlBVUC/pi10CQs/5ehf3CDwv6Wj0FGVzuN\nG7p18b/oJIv9OJrtXVGoUTFWC1nTXwnrSseG4p0CgYEA8LuB4NC5JpcAKPbbAcqV\nsifSI0Eg9ZOKiExFudli7ZYm8yVXS+3ipKpvKEEOxtUIq/RUqGHBY+7pvcmO5fHe\nqWA/Nw2XJLrluXNauWzfz7izVH6UzcCESZRIBULvs5QHZsyMRnTfb2aA0JG0pKVD\nQve+4yGVW5pmeRxekU8WCEsCgYEAucZy3wTJzrha0DwPWuTkqK713CyGMXMdlHR8\nSmQQym+ZHrzaq3yUQANliLo5zn+u/3gf8iy9ox1dNq+Cy08kVGJpJICRpglxceMx\nHCJ5zs/oksa2LAdNoRcu0GTfctAux0Be6IeKZ0xGBxM/V46N2f4LtzmIqwnDTVV6\nutrPxjcCgYEA2EeeaF0d+42ulx8xpGpeE7GzGflpozjrPYlJG7AzMUG1vL3PsGgJ\nN+fn9kJ9BCZhpBvf82fgV+hOGDT+LZkgcwwFv3B2WomP2w3IdM9cRUOr2j3fcvuD\n3pdaHWAF+1EDVVhwrtxR4cQ19yzxHvtbcs8isO17QtF1P1o9nE9xfAECgYBpNVz6\ntmB/xOIRSeI8TKK+cQ9l2IVK3fGjkHCPRKpJqvfhc3y3X38p3YKT8zsnmiIGJgaZ\nhQMErG2Mucrtzu05KN54wKM7j9+CavL2BwRKvm3tKcIjnyM0lsd5V5dAE2xahTb6\no0AbjhOekCTwNhhZm0kRQ/EFRCsp0b4GskK28wKBgQCtzkKCHXNC03qccDGlSj0N\nB/CC27k9xsUfyrUH4MiTWOOV/1ukCcHaoP6mVzvokXmeCqJ0eSBz0h3bh54loJ4S\nNAYe/ndhD4eWguyTuTOYIYrIV50NXuU8FAF5CEK7KSJ1r2o8j/USnu+49J3tQ1N2\nMGjxTRWkdyw429IZpPn9nA==\n-----END PRIVATE KEY-----\n',
        }, () => {
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

