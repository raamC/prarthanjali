import React from "react"
const BhajanTextContainer = ({ bhajanText, showTranslation }) => {
    return (
        <div class="notification">
            {bhajanText.map(section => (
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
    )
}

export default BhajanTextContainer