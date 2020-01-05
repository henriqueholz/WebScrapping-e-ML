const cheerio = require('cheerio')
const request = require('request')
const analisaFrases = require('./treino')

function sanitizar(text) {
  const allines = text.split('\n')
  const dellines = allines.filter((linha) => {
    if (linha.trim().length === 0 || linha.trim().startsWith('=')) {
      return false
    }
    return true
  })
  return dellines
}

function scraping() {
  request({
    method: 'GET',
    url: 'https://www.youtube.com/user/pedropachecoa/videos'
  }, (err, res, body) => {
    if (err) return console.log(err)
    const $ = cheerio.load(body)
    const title = $('a').text()

    const titlesanitizado = title.replace("Enviar feedbackTestar os novos recursosFaça login", "")
    const titlesanitizado1 = titlesanitizado.replace("Política e Segurança", "")
    const titlesanitizado2 = titlesanitizado1.replace("HistóricoSobreImprensaDireitos autoraisCriadores de conteúdoPublicidadeDesenvolvedoresTermosPrivacidade", "")

    const fraseSanitizada = sanitizar(titlesanitizado2)

    const asfrases = fraseSanitizada.map(function (name) {
      return analisaFrases(name)
    })
    console.log(asfrases)
  })
}

module.exports = scraping