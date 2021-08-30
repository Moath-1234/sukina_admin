import React, { Component } from "react";
import { connect } from "react-redux";
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { authService } from "../../../services";
import { setCurrentUser } from "../../../store/currentUser";
import { SubmitBtn } from "../../../reusable/SubmitBtn";
import { displayAlert } from "../../../utils";

export class Login extends Component {
    state = { email: "", password: "", isSubmitting: false };

    render() {
        return (
            <div className="c-app c-default-layout flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md="8">
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <CForm>
                                            <h1>Login</h1>
                                            <p className="text-muted">Sign In to your account</p>

                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-user" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>

                                                <CInput
                                                    type="email"
                                                    placeholder="Email"
                                                    autoComplete="Email"
                                                    onChange={({ target: { value } }) => this.setState({ email: value })}
                                                />
                                            </CInputGroup>

                                            <CInputGroup className="mb-4">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-lock-locked" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>

                                                <CInput
                                                    type="password"
                                                    placeholder="Password"
                                                    autoComplete="current-password"
                                                    onChange={({ target: { value } }) => this.setState({ password: value })}
                                                />
                                            </CInputGroup>
                                        </CForm>

                                        <SubmitBtn
                                            textContent="Login"
                                            onSubmit={this.onSubmit}
                                            classAttr=""
                                            isLoading={this.state.isSubmitting}
                                            disabled={this.state.isSubmitting}
                                        />
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        );
    }

    onSubmit = async () => {
        const { email, password } = this.state;

        this.setState({ isSubmitting: true });

        var formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        const {
            currentUser: { response, message },
        } = await authService.login(formdata);

        if (response) {
            await localStorage.setItem("userId", response);
            setTimeout(() => {
                window.location.reload();
                this.setState({ isSubmitting: false });
            }, 500);
        } else {
            displayAlert("Error", message, "error").then();
            this.setState({ isSubmitting: false });
        }
    };
}

export default connect(null, { setCurrentUser })(Login);
