const hanumanChalisa = require("./src/content/hanuman-chalisa.json")
const abaSaumpaDiya = require("./src/content/aba-saumpa-diya.json")
const nirvanaShatakam = require("./src/content/nirvana-shatakam.json")
const hariOmTatSat = require("./src/content/hari-om-tat-sat.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions

    const bhajanList = [hanumanChalisa, abaSaumpaDiya, nirvanaShatakam, hariOmTatSat]

    bhajanList.forEach(bhajanData => {
        createPage({
            path: `/${bhajanData.url}`,
            component: require.resolve(`./src/templates/bhajan-template.js`),
            context: { bhajanData },
        })
    })
}