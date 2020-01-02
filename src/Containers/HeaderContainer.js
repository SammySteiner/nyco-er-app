import React from 'react';
import { ReactComponent as LogoHeader } from '../svg/icon-logo-nyco.svg'

export default(props) => {
  return (
    <header className="o-header color-dark-background screen-tablet:layout--sidebar">
        <div className="o-header__banner-main color-primary-button">
          <h1 className="o-header__main-title"><span className="hidden"></span>
            <svg aria-hidden="true" className="o-header__logo-main icon-logo-nyco" viewBox="0 0 692 358" xmlns="http://www.w3.org/2000/svg">
              <LogoHeader/>
            </svg>
            <svg aria-hidden="true" className="o-header__logo-secondary icon-logo-nyco" viewBox="0 0 692 358" xmlns="http://www.w3.org/2000/svg">
              <LogoHeader/>
            </svg>
          </h1>
        </div>
        <div className="o-header__banner-secondary color-dark-background">
          <h1 className="o-header__secondary-title text-jumbo">Emergency Response</h1>
        </div>
      </header>
  );
}
