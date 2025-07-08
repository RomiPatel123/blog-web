import React from 'react'
import './Search.css'
const Search = () => {
    return (
        <div className='search-container'>
            {/* <div className="container"> */}
                <h1 className="title"><span></span> Search Results <span></span></h1>

                <div className="search-bar">
                    <input type="text" placeholder="Search our Blog..." />
                    <button>Search</button>
                </div>

                <h3 className="search-query">Results for “<span>Study</span>”</h3>

                <div className="results">
                    <div className="search-card">
                        <img src="https://images.stockcake.com/public/f/0/6/f06df0a9-588c-45b3-b670-92b498d9b7a1_large/group-study-session-stockcake.jpg" alt="Study" />
                        <h3>Study Services</h3>
                        <p className="date">Nov 6, 2019</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>

                    <div className="search-card">
                        <img src="https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/1.jpg" alt="Meeting" />
                        <h3>Everything you think you know about how to run a business</h3>
                        <p className="date">Oct 25, 2019</p>
                        <p>This is a heading. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu mauris...</p>
                    </div>

                    <div className="search-card">
                        <img src="https://imageio.forbes.com/specials-images/imageserve/60175d37fa8d49073c6b1d8d/Focused-multiracial-corporate-business-team-people-brainstorm-on-paperwork/960x0.jpg?format=jpg&width=960" alt="Team" />
                        <h3>Making the most out of your small business</h3>
                        <p className="date">Oct 23, 2019</p>
                        <p>Learn how small businesses can succeed in today’s market with key strategies and expert tips...</p>
                    </div>
                </div>
            </div>

        // </div>
    )
}

export default Search