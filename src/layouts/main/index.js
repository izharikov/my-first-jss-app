import React from 'react';
import {
  Placeholder,
  VisitorIdentification,
} from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';

import './index.scss';

const Layout = ({route}) => (
  <React.Fragment>
    <Helmet>
      <title>
        {(route.fields &&
          route.fields.pageTitle &&
          route.fields.pageTitle.value) ||
          'Page'}
      </title>
    </Helmet>
    <VisitorIdentification />
    <div className="grid-container">
      <Placeholder name="jss-header" rendering={route} />
      <Placeholder name="jss-main" rendering={route} />
      <Placeholder name="jss-footer" rendering={route} />
    </div>
  </React.Fragment>
);

export default Layout;
