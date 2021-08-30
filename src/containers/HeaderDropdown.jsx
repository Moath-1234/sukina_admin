import React from 'react';
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { authService } from '../services';
import { useActions } from '../hooks/useActions';
import { useHookSelector } from '../hooks/useHookSelector';
import { imageLink } from '../api';

export const HeaderDropdown = () => {
    const currentAdmin = useHookSelector(({ currentUser }) => currentUser);
    const { setCurrentUser } = useActions();

    const logout = () => {
        authService.logout();

        setCurrentUser({});

        window.location.href = '/';
    };

    return (
        <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
            <CDropdownToggle tag="div" className="c-header-nav-link clickable" caret={ false }>
                <div className="c-avatar"><CImg src={ currentAdmin?.image ? `${ imageLink }${ currentAdmin?.image }` : 'avatars/admin.png' } className="c-avatar-img" /></div>
            </CDropdownToggle>

            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem header tag="div" color="light" className="text-center"><strong>{ currentAdmin?.name ?? 'User' }</strong></CDropdownItem>

                <CDropdownItem divider />

                <CDropdownItem tag="div" className="clickable" onClick={ logout }><CIcon name="cil-lock-locked" className="mfe-2" />Logout</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    );
};
