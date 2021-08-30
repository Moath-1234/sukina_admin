import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CBreadcrumbRouter, CButton, CHeader, CHeaderBrand, CHeaderNav, CImg, CSubheader, CToggler } from "@coreui/react";

// routes config
import routes from "../routes";

import { HeaderDropdown } from "./index";
import { sidebarActivation } from "../store/sidebar";

const Header = () => {
    const dispatch = useDispatch();
    const sidebarShow = useSelector(({ sidebarShow }) => sidebarShow);

    const toggleSidebar = () => {
        const val = [true, "responsive"].includes(sidebarShow) ? false : "responsive";

        dispatch(sidebarActivation(val));
    };

    const toggleSidebarMobile = () => {
        const val = [false, "responsive"].includes(sidebarShow) ? true : "responsive";

        dispatch(sidebarActivation(val));
    };
    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
        // props.history.push("/");
    };

    return (
        <CHeader withSubheader>
            <CToggler inHeader className="ml-md-3 d-lg-none" onClick={toggleSidebarMobile} />

            <CToggler inHeader className="ml-3 d-md-down-none" onClick={toggleSidebar} />

            <CHeaderBrand className="mx-auto d-lg-none navbar__logo navbar__logo--small" to="/">
                <CImg src="images/logo.png" alt="" />
            </CHeaderBrand>

            <CHeaderNav className="d-md-down-none mr-auto"></CHeaderNav>

            <CHeaderNav className="px-3">
                {/* <HeaderDropdown /> */}

                <CButton className="btn-danger logoutButton" onClick={() => logout()}>
                    تسجيل الخروج
                </CButton>
            </CHeaderNav>

            <CSubheader className="px-3 justify-content-between">
                <CBreadcrumbRouter className="border-0 c-subheader-nav m-0 px-0 px-md-3" routes={routes} />
            </CSubheader>
        </CHeader>
    );
};

export default Header;
