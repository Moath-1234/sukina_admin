import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CCreateElement, CImg, CSidebar, CSidebarBrand, CSidebarMinimizer, CSidebarNav, CSidebarNavDivider, CSidebarNavDropdown, CSidebarNavItem, CSidebarNavTitle } from '@coreui/react';

import navigation from './_nav';
import { sidebarActivation } from '../store/sidebar';

const TheSidebar = () => {
    const dispatch = useDispatch();
    const show = useSelector(({ sidebarShow }) => sidebarShow);

    return (
        <CSidebar show={ show } onShowChange={ val => dispatch(sidebarActivation(val)) }>
            <CSidebarBrand className="d-md-down-none navbar__logo" to="/"><CImg src="images/logo.png" alt="app logo" /></CSidebarBrand>

            <CSidebarNav>
                <CCreateElement items={ navigation } components={ { CSidebarNavDivider, CSidebarNavDropdown, CSidebarNavItem, CSidebarNavTitle } } />
            </CSidebarNav>

            <CSidebarMinimizer className="c-d-md-down-none" />
        </CSidebar>
    );
};

export default React.memo(TheSidebar);
