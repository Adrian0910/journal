import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i0.hippopx.com/photos/829/630/348/night-sky-starry-sky-star-sky-preview.jpg)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Unm nuemvo diam
                </p>
                <p className="journal__entry-content">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit 
                    
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
