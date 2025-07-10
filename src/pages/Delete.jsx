import React from 'react'
import './Delete.css'

const Delete = () => {
    return (
        <div>
            <button className="delete-button">Post</button>

            <div className="dropdown">
                <a href="#"><span>📝</span> Add Comment</a>
                <a href="#"><span>⚙️</span> Manage Blog Post</a>
                <a href="#" className="edit"><span>✏️</span> Edit Blog Post</a>
                <a href="#" ><span>🗑️</span> Delete Blog Post</a>
            </div>
        </div>
    )
}

export default Delete