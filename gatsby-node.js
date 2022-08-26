const hanumanChalisa = require("./src/content/hanumanChalisa.json")
const abaSaumpaDiya = require("./src/content/abaSaumpaDiya.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions

    const bhajanList = [hanumanChalisa, abaSaumpaDiya]

    bhajanList.forEach(bhajanData => {
        createPage({
            path: `/${bhajanData.url}`,
            component: require.resolve(`./src/templates/bhajan-template.js`),
            context: { bhajanData },
        })
    })
}