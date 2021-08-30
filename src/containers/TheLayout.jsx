import React from 'react';
import { TheContent, TheFooter, Header, TheSidebar } from './index';

const TheLayout = () => (
    <div className="c-app c-default-layout">
        <TheSidebar />

        <div className="c-wrapper">
            <Header />

            <div className="c-body"><TheContent /></div>

            <TheFooter />
        </div>
    </div>
);

export default TheLayout;
