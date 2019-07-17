import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { RouterLinkList } from '../core/LinkList';

import styles from './index.module.scss';

const Header = ({ fields }) => {
  console.log(styles);
  return (
    <header className={styles.header}>
      <Image field={fields.headerLogo} className={styles.image} />
      <div className={styles.content}>
        <p>
          <Text field={fields.pageTitle} />
        </p>
        <RouterLinkList
          links={fields.navigationLinks}
          activeClassName={styles.active_link}
        />
      </div>
    </header>
  );
};

export default Header;
