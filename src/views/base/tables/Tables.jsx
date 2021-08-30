import React, { Component } from "react";
import { CBadge, CCard, CCardBody, CCardHeader, CCol, CDataTable, CImg, CRow } from "@coreui/react";
import { getBadge, rolesTypes } from "../../../utils";
import { imageLink } from "../../../api";

export class Tables extends Component {
    render() {
        const { title, data, fields, pagination = true, itemsPerPage = 10, activePage = 1 } = this.props;

        return (
            <CRow>
                <CCol xs="12" lg="12">
                    <CCard>
                        <CCardHeader className="text-capitalize font-weight-bold primary-color">{title}</CCardHeader>

                        <CCardBody>
                            <div style={{ marginBottom: "20px" }}>{this.props.SearchComponent}</div>

                            <CDataTable
                                items={data}
                                fields={fields}
                                activePage={activePage}
                                pagination={pagination}
                                itemsPerPage={itemsPerPage}
                                // itemsPerPageSelect={ { label: 'items per page', values: [5, 10, 15, 20, 50] } }
                                tableFilter={this.props.SearchComponent || this.props.withoutSearch ? false : { label: "Filter" }}
                                columnFilter
                                footer
                                hover
                                sorter
                                scopedSlots={{
                                    image: this.getImage,
                                    status: this.getStatus,
                                    names: this.getNames,
                                    action: this.getAction,
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        );
    }

    getAction = ({ action }) => action;

    getNames = ({ names }) => (
        <td>
            {names.map(({ id, value }) => (
                <span key={id} className="d-block mb-2">
                    {value}
                </span>
            ))}
        </td>
    );

    getStatus = ({ status }) => (
        <td>
            <CBadge color={getBadge(status)}>{status}</CBadge>
        </td>
    );

    getImage = ({ image }) => (
        <td>{image && <CImg src={`${imageLink}${image}`} width="80px" height="auto" style={{ objectFit: "scale-down", maxHeight: 70 }} alt="" />}</td>
    );
}

export default Tables;
