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
                <a className="Nav__link" href="/">All</a>
              </li>
              <li className="Nav__item">
                <a className="Nav__link"href="/filter/hot">Hot</a>
              </li>
              <li className="Nav__item">
                <a className="Nav__link" href="/filter/new">New</a>
              </li>
              <li className="Nav__item">
                <a className="Nav__link" href="/filter/rising">Rising</a>
              </li>
              <li className="Nav__item">
                <a className="Nav__link" href="/filter/top">Top</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }
}