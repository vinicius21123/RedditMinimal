import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
export class Nav extends React.Component {
  render() {   
    return (
      
      <nav className="Nav">
        <div className="Nav__container">
          

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/#">All</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/filter/hot">Hot</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/filter/new">New</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/filter/rising">Rising</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/filter/top">Top</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/subreddit">View All Subreddits</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }
}