import React, { Component } from "react";
import { CBadge, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import CIcon from "@coreui/icons-react";

export class TheHeaderDropdownMssg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin_id: localStorage.getItem("AmmenlyAdminAccessToken"),
            messages: [],
            Loader: false,
            count: 0,
        };
    }

    componentDidMount() {
        /** Admin Info */
        /*
        fetch(Global.api_link + "getTopMessages", {
          method: "GET",
          headers: {
            Token: Global.token,
            Language: "en",
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.state.admin_id
          }
        })
          .then(response => response.json())
          .then(result => {
            this.setState({
              messages: result.data.messages,
              count: result.data.count,
              Loader: false
            });
          })
          .catch(error => {
            console.error(error);
          });*/
        /** Admin Info  End*/
    }

    render() {
        if (this.state.Loader) {
            return null;
        } else {
            const itemsCount = this.state.count;
            return (
                <CDropdown inNav className="c-header-nav-item mx-2" direction="down">
                    <CDropdownToggle className="c-header-nav-link" caret={false}>
                        <CIcon name="cil-envelope-open" />
                        <CBadge shape="pill" color="info">
                            {itemsCount}
                        </CBadge>
                    </CDropdownToggle>
                    <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem header tag="div" color="light">
                            <strong>You have {itemsCount} messages</strong>
                        </CDropdownItem>

                        {this.state.messages.map((item, index) => {
                            return (
                                <CDropdownItem href="/#/Contact" style={{ minWidth: 300 }}>
                                    <div className="message">
                                        <div>
                                            <small className="text-muted">{item.email}</small>
                                        </div>
                                        <div className="text-truncate font-weight-bold">{item.name}</div>
                                        <div className="small text-muted text-truncate">{item.message}</div>
                                    </div>
                                </CDropdownItem>
                            );
                        })}

                        <CDropdownItem href="/#/Contact" className="text-center border-top">
                            <strong>View all messages</strong>
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            );
        }
    }
}

export default TheHeaderDropdownMssg;
