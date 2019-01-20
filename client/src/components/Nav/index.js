import React from 'react';

const Nav = (props) => {
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Google Book Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Browse <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Saved </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://mig9tx.github.io/#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/mig9tx/nyt_google_book_search">GitHub</a>
                </li>

            </ul>
            </div>
        </nav>
        
        
      
    )
}

export default Nav;