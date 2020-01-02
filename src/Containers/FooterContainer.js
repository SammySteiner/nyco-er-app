import React from 'react';
import { ReactComponent as Logo } from '../svg/icon-logo-secondary.svg'

export default(props) => {
  return (
    <footer className="o-footer color-dark-background screen-tablet:layout--four-columns-gutter">
      <nav>
        <a className="o-footer__nav-link" href="/">Home</a>
        <a className="o-footer__nav-link" href="http://www.nyc.gov/opportunity" title="products@nycopportunity.nyc.gov<NYC Opportunity>">NYC Opportunity</a>
      </nav>
      <div>

      </div>
      <div className="o-footer__info">
        <a href="http://nyc.gov/opportunity" title="products@nycopportunity.nyc.gov<NYC Opportunity>">
          <svg aria-hidden="true" className="icon-logo-secondary o-footer__logo text-base-white" style={{height: '52px !important'}}>
            <Logo/>
          </svg>
        </a>
        <p>NYC Opportunity is the
          <a href="http://nyc.gov/opportunity">New York City Mayor's Office for Economic Opportunity</a>. We are committed to sharing open source software that we use in our products. Feel free to ask questions and share feedback. Follow @nycopportunity on&nbsp;
          <a href="https://twitter.com/nycopportunity" target="_blank" rel="noopener noreferrer">Twitter</a>,&nbsp;
          <a href="https://www.facebook.com/NYCOpportunity/" target="_blank" rel="noopener noreferrer">Facebook</a>,&nbsp;
          <a href="https://medium.com/@nycopportunity" target="_blank" rel="noopener noreferrer">Medium</a>, and&nbsp;
          <a href="https://github.com/orgs/CityOfNewYork/teams/nycopportunity" target="_blank" rel="noopener noreferrer" title="Viewable by github.com/orgs/CityOfNewYork/ members.">Github</a>.</p>
        <small>© City of New York, 2019 All Rights Reserved.
          <br/>NYC is a trademark and service mark of the City of New York.</small>
      </div>
    </footer>
  );
}
