const cheerio = require('cheerio')
const request = require('request')

function scraping() {
  request({
    method: 'GET',
    url: https://www.youtube.com/user/pedropachecoa/videos
  }, (err, res, body) => {
    if (err) return console.log(err)
    const $ = cheerio.load(body)
  })
}
