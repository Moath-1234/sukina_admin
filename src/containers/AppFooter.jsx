import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => (
    <CFooter fixed={false}>
        <div>
            <span className="ml-1">&copy; 2021.</span>
            <button>Sokina</button>
        </div>

        <div className="mfs-auto" />
    </CFooter>
);

export default React.memo(AppFooter);
