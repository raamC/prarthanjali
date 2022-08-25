import React from "react"
import Layout from "../components/layout"
import HowItWorksExample from "../components/howItWorksExample"
import satyanarayan from "../images/satyanarayan.jpg"
import ganesh from "../images/ganesh.jpg"

const IndexPage = () => (
  <Layout>
    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 cursive-heading">Prarthanjali</h1>
          <h2 class="subtitle">A shared effort to explain and preserve our bhajans</h2>
        </div>
      </div>
    </section>

    <div class="columns">
      <div class="column is-one-third">
        <section class="section">
          <div class="container">
            <img src={ganesh} alt="Ganesh" class="home-page-image" />
          </div>
        </section>
      </div>
      <div class="column is-one-third">
        <section class="section">
          <div class="container home-page-tiles">
            <div class="tile is-ancestor is-vertical">
              <div class="tile is-parent ">
                <article class="tile is-child box notification is-warning">
                  <h1 class="title has-text-centered is-1 cursive-heading-blue">
                    Collect</h1>
                  <p class="has-text-centered">
                    We hope to gather together bhajans and make them easily available in one place
              </p>
                </article>
              </div>
              <div class="tile is-parent ">
                <article class="tile is-child box notification is-warning">
                  <h1 class="title has-text-centered is-1 cursive-heading-blue">Translate</h1>
                  <p class="has-text-centered">We aim to translate the bhajans to share the meanings with future generations</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box notification is-warning">

                  <h1 class="title has-text-centered is-1 cursive-heading-blue">Preserve</h1>
                  <p class="has-text-centered">
                    We want to digitise the bhajans and make sure they are in an accessible format
              </p>
                </article>
              </div>

            </div>
          </div>
        </section>
      </div>
      <div class="column is-one-third">
        <section class="section">
          <div class="container">
            <img src={satyanarayan} alt="Satyanarayan" class="home-page-image" />
          </div>
        </section>
      </div>

    </div>

    <section class="section">
      <div class="container">
        <h1 class="title">How it works</h1>
        <HowItWorksExample />
      </div>
    </section>

  </Layout>
)

export default IndexPage
