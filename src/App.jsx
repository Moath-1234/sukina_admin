import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./containers/TheLayout";
import Login from "./views/pages/auth/Login";
import { MainLoader } from "./reusable/MainLoader";

import { generalServices } from "./services";
import { setCurrentUser } from "./store/currentUser";

import "./assets/styles/main.scss";

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    // const currentUser = useSelector(({ currentUser }) => currentUser);

    const currentUser = localStorage.getItem("userId");

    // const dispatch = useDispatch();

    // const getAdminProfile = useCallback(async () => {
    //     const { success, adminProfile } = await generalServices.getAdminProfile();

    //     success && dispatch(setCurrentUser(adminProfile));

    //     setIsLoading(false);
    // }, [dispatch]);

    // useEffect(() => {
    //     getAdminProfile().then();
    // }, [getAdminProfile]);

    if (isLoading) return <MainLoader />;

    return (
        <HashRouter>
            <Suspense fallback={MainLoader} base="/">
                <Switch>
                    {currentUser ? (
                        <Route path="/" name="Home" render={(props) => <Home {...props} />} />
                    ) : (
                        <Route exact path="/" name="Login Page" render={(props) => <Login {...props} />} />
                    )}

                    <Redirect from="/" to="/" />
                </Switch>
            </Suspense>
        </HashRouter>
    );
};

export default App;
