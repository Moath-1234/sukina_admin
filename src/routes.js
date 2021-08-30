import React, { lazy } from "react";
// import {  } from "./services";
// import { mobileTranslationService } from "./services/MobileTranslationService";

const Toaster = React.lazy(() => import("./views/notifications/toaster/Toaster"));
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() => import("./views/base/breadcrumbs/Breadcrumbs"));
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() => import("./views/base/jumbotrons/Jumbotrons"));
const ListGroups = React.lazy(() => import("./views/base/list-groups/ListGroups"));
const Navbar = React.lazy(() => import("./views/base/navbar/Navbar"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() => import("./views/base/progress-bar/ProgressBar"));
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() => import("./views/buttons/brand-buttons/BrandButtons"));
const ButtonDropdowns = React.lazy(() => import("./views/buttons/button-dropdowns/ButtonDropdowns"));
const ButtonGroups = React.lazy(() => import("./views/buttons/button-groups/ButtonGroups"));
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));

const CoreUIIcons = React.lazy(() => import("./views/icons/coreui-icons/CoreUIIcons"));
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));

const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() => import("./views/theme/typography/Typography"));

const routes = [
    { path: "/", exact: true, name: "Home", component: lazy(() => import("./views/pages/Articles/Articles")) },
    { path: "/dashboard", name: "Dashboard", component: lazy(() => import("./views/dashboard/Dashboard")) },

    // Template Standards
    { path: "/theme", name: "Theme", component: Colors, exact: true },
    { path: "/theme/colors", name: "Colors", component: Colors },
    { path: "/theme/typography", name: "Typography", component: Typography },
    { path: "/base", name: "Base", component: Cards, exact: true },
    { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
    { path: "/base/cards", name: "Cards", component: Cards },
    { path: "/base/carousels", name: "Carousel", component: Carousels },
    { path: "/base/collapses", name: "Collapse", component: Collapses },
    { path: "/base/forms", name: "Forms", component: BasicForms },
    { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
    { path: "/base/list-groups", name: "List Groups", component: ListGroups },
    { path: "/base/navbar", name: "Navbar", component: Navbar },
    { path: "/base/navs", name: "Navs", component: Navs },
    { path: "/base/popovers", name: "Popovers", component: Popovers },
    { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
    { path: "/base/switches", name: "Switches", component: Switches },
    { path: "/base/tables", name: "Tables", component: Tables },
    { path: "/base/tabs", name: "Tabs", component: Tabs },
    { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
    { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
    { path: "/buttons/buttons", name: "Buttons", component: Buttons },
    { path: "/buttons/button-dropdowns", name: "Dropdowns", component: ButtonDropdowns },
    { path: "/buttons/button-groups", name: "Button Groups", component: ButtonGroups },
    { path: "/buttons/brand-buttons", name: "Brand Buttons", component: BrandButtons },
    { path: "/charts", name: "Charts", component: Charts },
    { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
    { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
    { path: "/icons/flags", name: "Flags", component: Flags },
    { path: "/icons/brands", name: "Brands", component: Brands },
    { path: "/notifications", name: "Notifications", component: Alerts, exact: true },
    { path: "/notifications/alerts", name: "Alerts", component: Alerts },
    { path: "/notifications/modals", name: "Modals", component: Modals },
    { path: "/notifications/toaster", name: "Toaster", component: Toaster },

    { path: "/Articles", exact: true, name: "المقالات", component: lazy(() => import("./views/pages/Articles/Articles")) },
    { path: "/AddArticle", exact: true, name: "اضافة مقال", component: lazy(() => import("./views/pages/Articles/AddArticle")) },
    { path: "/EditArticle/:id", exact: true, name: "تعديل المقال", component: lazy(() => import("./views/pages/Articles/EditArticle")) },
    { path: "/Dates", exact: true, name: "المواعيد", component: lazy(() => import("./views/pages/Dates")) },
    { path: "/Messages", exact: true, name: "الرسائل", component: lazy(() => import("./views/pages/Messages")) },
];

export default routes;
