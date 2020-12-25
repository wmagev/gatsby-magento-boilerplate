import { useStaticQuery, graphql } from "gatsby"

export const useCategoryData = () => {
    const data = useStaticQuery( graphql`
        query CategoryCollection {
            allMagentoCategory(filter: {level: {eq: 2}}) {
                edges {
                    node {
                        url_path
                        name
                        level
                        parent_category_id
                        magento_id
                        childrenMagentoCategory {
                            level
                            magento_id
                            url_path
                            childrenMagentoCategory {
                                name
                                url_path
                                level
                            }
                        }
                    }
                }
            }
        }
    `)
    
    return data.allMagentoCategory.edges
}