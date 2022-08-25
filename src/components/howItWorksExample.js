import React, { useState } from "react"
import Layout from "./layout"
import JSONData from "../content/hanumanChalisa.json"

const HowItWorksExample = () => {
  const [showGujarati, setShowGujarati] = useState(true)
  const [showTranslation, setShowTranslation] = useState(true)

  const exampleSubsections = JSONData.sections.slice(23, 25)

  return (
    <div>
      <div class="columns" style={{ display: 'flex', 'flex-wrap': 'wrap-reverse' }}>

        <div class="column is-two-thirds" style={{ 'min-width': '60%' }}>
          <div class="notification">

            {exampleSubsections.map(section => (
              <div class="bhajan-section">
                <div class="section-gujarati" style={showGujarati ? {} : { display: 'none' }} >
                  {section.gujarati}
                </div>
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
          <div class="notification">
            <h3 class="title">Options</h3>
            <button class="button options-button" onClick={() => setShowGujarati(!showGujarati)}>
              {showGujarati ? "Hide" : "Show"} Gujarati
                    </button>
            <button class="button options-button" onClick={() => setShowTranslation(!showTranslation)}>
              {showTranslation ? "Hide" : "Show"} translation
                    </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksExample
