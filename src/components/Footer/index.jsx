import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import styles from './index.module.scss';

const FooterLinksColumn = ({ title = '', links = [] }) => {
  return (
    <div className={styles.link_column}>
      <p className={styles.link_column_title}>{title}</p>
      <ul>
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = ({ fields }) => {
  const columnsCount = 3;
  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} container`}>
        <div className={styles.footer_logo}>
          <Image field={fields.footerLogo} className={`${styles.image}`} />
        </div>
        <div
          className={`${styles.link_columns} ${
            styles['columns-' + columnsCount]
          }`}
        >
          <FooterLinksColumn
            title="Column #1"
            links={[
              {
                href: '#1',
                title: 'Link #1'
              },
              {
                href: '#2',
                title: 'Link #2'
              }
            ]}
          />
          <FooterLinksColumn
            title="Column #2"
            links={[
              {
                href: '#1',
                title: 'Link #1'
              },
              {
                href: '#2',
                title: 'Link #2'
              }
            ]}
          />
          <FooterLinksColumn
            title="Column #3"
            links={[
              {
                href: '#1',
                title: 'Link #1'
              },
              {
                href: '#2',
                title: 'Link #2'
              }
            ]}
          />
        </div>
      </div>
      <hr />
      <p className="container">&copy; Copyright 2019</p>
    </footer>
  );
};

export default Footer;
