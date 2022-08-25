import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const BhajansPage = () => (
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Bhajans</h1>
        
        <ul>
          <li><Link to="/hanuman-chalisa/">Hanuman Chalisa</Link></li>
          <li><Link to="/aba-saumpa-diya/">Aba Saumpa Diya</Link></li>
        </ul>
      </div>
    </section>





  </Layout>
)

export default BhajansPage
