import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const BhajansPage = () => (
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Bhajans</h1>
        <ul>
          <li>
            <Link to="/aba-saumpa-diya/">Aba Saumpa Diya</Link>
          </li>
          <li>
            <Link to="/asatyo-mahe-thi/">Asatyo Mahe Thi</Link>
          </li>
          <li>
            <Link to="/hanuman-chalisa/">Hanuman Chalisa</Link>
          </li>
          <li>
            <Link to="/hari-om-tat-sat/">Hari Om Tat Sat</Link>
          </li>
          <li>
            <Link to="/mangal-mandir-kholo/">Mangal Mandir Kholo</Link>
          </li>
          <li>
            <Link to="/nirvana-shatakam/">Nirvana Shatakam</Link>
          </li>
          <li>
            <Link to="/shri-ramachandra-krupalu-bhaja-mana/">Shri Ramachandra Krupalu Bhaja Mana</Link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default BhajansPage
