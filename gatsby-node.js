const abaSaumpaDiya = require("./src/content/aba-saumpa-diya.json")
const asatyoMaheThi = require("./src/content/asatyo-mahe-thi.json")
const hanumanChalisa = require("./src/content/hanuman-chalisa.json")
const hariOmTatSat = require("./src/content/hari-om-tat-sat.json")
const nirvanaShatakam = require("./src/content/nirvana-shatakam.json")
const shriRamachandra = require("./src/content/shri-ramachandra-krupalu-bhaja-mana.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions

    const bhajanList = [
        abaSaumpaDiya,
        asatyoMaheThi,
        hanumanChalisa,
        hariOmTatSat,
        nirvanaShatakam,
        shriRamachandraKrupaluBhajaMana
    ]

    bhajanList.forEach(bhajanData => {
        createPage({
            path: `/${bhajanData.url}`,
            component: require.resolve(`./src/templates/bhajan-template.js`),
            context: { bhajanData },
        })
    })
}
