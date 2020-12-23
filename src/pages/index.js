import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const Home = ({
  data: {
    allMagentoCategory: {
      edges: categories
    }
  }
}) => {

  const sortCategoriesByLevel = items => {
    var cates = []
    items.map(({ node: item }) => {
      cates[item.level] = [...cates[item.level], item]
    })
    console.log(cates)
  }

  sortCategoriesByLevel(categories)

  return (
    <>
      { categories && categories.map(({node: item}) => {          
          return (
            <div key={item.id}>
              <Link to={item.url_path}>
                {item.name}
              </Link>
            </div>
          )
        })
      }  
    </>
  )
}

export default Home

export const query = graphql`
  query CategoryCollection {
    allMagentoCategory {
      edges {
        node {
          url_path
          name
          id
          level
        }
      }
    }
  }
`