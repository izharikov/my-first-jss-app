import React from 'react';
import { NavLink } from 'react-router-dom';

export const RouterLink = ({ link, children, ...otherProps }) => {
  return (
    <NavLink to={link.value.href} exact {...otherProps}>
      {link.value.text}
      {children}
    </NavLink>
  );
};

export const RouterLinkList = ({
  links,
  hoc = component => component,
  ...otherProps
}) => {
  return (
    <React.Fragment>
      {links.map(navLinkField =>
        hoc(
          <RouterLink link={navLinkField.fields.link} {...otherProps} />,
          navLinkField.fields.link.value.href
        )
      )}
    </React.Fragment>
  );
};
