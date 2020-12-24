import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Home = ({
  data: {
    allMagentoCategory: {
      edges: categories
    }
  }
}) => {

  return (
    <Layout>
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
    </Layout>
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