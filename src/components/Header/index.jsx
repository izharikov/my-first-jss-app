import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import { RouterLinkList } from '../core/LinkList';

import styles from './index.module.scss';

const HeaderNavLink = props => {
  return <div className={styles.nav_link}>{props.children}</div>;
};

const headerNavLinkHoc = (component, key) => {
  return <HeaderNavLink key={key}>{component}</HeaderNavLink>;
};

const Header = ({ fields }) => {
  console.log(styles);
  return (
    <header className={`container ${styles.header}`}>
      <Image
        field={fields.headerLogo}
        className={`${styles.image} vertical-middle`}
      />
      <div className={styles.navigation}>
        <RouterLinkList
          links={fields.navigationLinks}
          activeClassName={styles.active_link}
          hoc={headerNavLinkHoc}
        />
      </div>
    </header>
  );
};

export default Header;
