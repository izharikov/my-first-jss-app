import React from 'react';
import { NavLink } from 'react-router-dom';

export const RouterLink = ({ link, children, ...otherProps }) => {
    return <NavLink to={link.value.href} exact {...otherProps}>
        {link.value.text}
        {children}
    </NavLink>
}

export const RouterLinkList = ({links, ...otherProps}) => {
    return <React.Fragment>
        {links.map(navLinkField => (<RouterLink key={navLinkField.fields.link.value.href} link={navLinkField.fields.link} {...otherProps}/>))}
    </React.Fragment>
}