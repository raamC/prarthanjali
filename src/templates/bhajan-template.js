import React, { useState } from "react"
import BhajanTextContainer from "../components/bhajanTextContainer"
import Layout from "../components/layout"
import VideoContainer from "../components/videoContainer"

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
                            <BhajanTextContainer bhajanText={bhajanData.sections} showTranslation={showTranslation} />
                        </div>
                        <div class="column is-one-third">
                            <VideoContainer youtubeLinksArray={bhajanData.youtubeLinks} />
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