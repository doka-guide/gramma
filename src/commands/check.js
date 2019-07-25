const kleur = require("kleur")
const checkViaAPI = require("../requests/checkViaAPI")
const Mistake = require("../components/Mistake")

const print = (result) => {
  if (result.matches.length === 0) {
    console.log(kleur.green("No mistakes found!"))
  } else {
    console.log(`Found ${result.matches.length} potential mistakes`)
    console.log()
    console.log(result.matches.map(Mistake).join("\n"))
  }
}

const check = async (text) => {
  const result = await checkViaAPI(text)
  print(result)

  return result.matches.length === 0 ? 0 : 1
}

module.exports = check