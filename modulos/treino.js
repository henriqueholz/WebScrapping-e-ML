const NB = require('ml-bayes')

const by = new NB()

by.train("VIDA DOS SONHOS", 'historia de vida'),
  by.train("", 'historia de vida')

function analisaFrases(aFrase) {
  const score = by.guess(aFrase)
  const resultado = by.extractWinner(score)
  const numscore = resultado.score
  const rotulo = resultado.label

  return aFrase + " - " + "SCORE: " + numscore.toFixed(2) + " ROTULO: " + rotulo
}

module.exports = analisaFrases