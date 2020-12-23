const path = require(`path`)
const Promise = require('bluebird');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    {
                        allMagentoProduct {
                            edges {
                                node {
                                    url_key
                                }
                            }
                        }                        
                        allMagentoCategory {
                            edges {
                                node {
                                    magento_id
                                    url_key
                                    url_path
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                // Create pages for each product
                result.data.allMagentoProduct.edges.forEach(({node}) => {
                    createPage({
                        path: `/${node.url_key}/`,
                        component: path.resolve(`./src/pages/product.js`),
                        context: {
                            url_key: node.url_key,
                        },
                    });
                });

                result.data.allMagentoCategory.edges.forEach(({ node }) => {
                    createPage({
                        path: `/${node.url_path}/`,
                        component: path.resolve(`./src/pages/category.js`),
                        context: {
                            category_id: node.magento_id,
                            url_key: node.url_key,
                        },
                    });
 
                    // id is gatsby.js node id. we need to put magento_id there instead
                    const dstCategory = {
                        ...node,
                        id: node.magento_id,
                    };
 
                    delete dstCategory.magento_id;
                });

            })
        );
    });
};
