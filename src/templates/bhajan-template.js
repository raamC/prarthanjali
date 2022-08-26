import React, { useState } from "react"
import Layout from "../components/layout"

export default function BhajanTemplate({ pageContext: { bhajanData } }) {
    const [showTranslation, setShowTranslation] = useState(true)

    return (
        <Layout>
            <section class="section">
                <div class="container">
                    <div class="">
                        <div class="notification page-title cursive-heading is-primary">
                            <h1 class="title is-1">{bhajanData.title.transliteration}</h1>
                        </div>
                    </div>
                </div>
            </section >
            <section class="section">
                <div class="container">
                    <div class="columns" style={{ display: 'flex', 'flex-wrap': 'wrap-reverse' }}>
                        <div class="column is-two-thirds" style={{ 'min-width': '60%' }}>
                            <div class="notification">
                                {bhajanData.sections.map(section => (
                                    <div class="bhajan-section">
                                        <div class="section-transliteration">
                                            {section.transliteration}
                                        </div>
                                        <div class="section-translation" style={showTranslation ? {} : { display: 'none' }}>
                                            {section.translation}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="box">
                                <h3 class="title">Videos</h3>
                                {bhajanData.youtubeLinks.map(link => (
                                    <iframe
                                    width="100%"
                                    src={link}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                                ))}
                            </div>
                            <div class="box notification is-warning">
                                <h3 class="title">Display options</h3>
                                <button class="button options-button" onClick={() => setShowTranslation(!showTranslation)}>
                                    {showTranslation ? "Hide" : "Show"} translation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}