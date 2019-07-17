import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import { RouterLinkList } from '../core/LinkList';

import styles from './index.module.scss';


const Header = ({ fields }) => {
  console.log(fields)
  return (<header className={styles.header}>
    <h1><Text field={fields.pageTitle} /></h1>
    <RouterLinkList links={fields.navigationLinks} activeClassName={styles.active_link}/>
  </header>)
};

export default Header;
