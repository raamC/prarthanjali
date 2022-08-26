const hanumanChalisa = require("./src/content/hanumanChalisa.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions

    const bhajanList = [hanumanChalisa]

    bhajanList.forEach(bhajanData => {
        createPage({
            path: `/${bhajanData.url}`,
            component: require.resolve(`./src/templates/bhajan-template.js`),
            context: { bhajanData },
        })
    })
}