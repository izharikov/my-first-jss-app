import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import styles from './index.module.scss';

const Footer = ({fields}) => (
  <div>
    <Text field={fields.text} />
  </div>
);

export default Footer;
