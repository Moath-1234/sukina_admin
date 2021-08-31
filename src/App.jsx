import React, { Suspense, useState } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./containers/TheLayout";
import Login from "./views/pages/auth/Login";
import { MainLoader } from "./reusable/MainLoader";

import "./assets/styles/main.scss";

const App = () => {
    const [isLoading] = useState(false);
    // const currentUser = useSelector(({ currentUser }) => currentUser);

    const currentUser = localStorage.getItem("userId");

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
