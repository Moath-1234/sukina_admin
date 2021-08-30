import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import Table from "../views/base/tables/Tables";
import { getBadge, getOrderStatus, rolesTypes } from "../utils";
import { dateService } from "../services";

export const Invoice = ({ tracking_ref, user, provider, dropoffs, pickups, order_type, items_amount, delivery_amount, discount_amount, total_amount, created_at, status }) => {
    const pickupsTableHeaders = ["id", "name", "text", "address", "orderImages"];

    const dropoffsTableHeaders = ["id", "name", "text", "address"];

    const tablePickups = pickups.map(({ id, text, store, address, latitude, longitude, order_images }, idx) => ({ id, name: store?.name ?? `Pickup #${idx + 1}`, text: text ?? "", address: { address, latitude, longitude }, orderImages: order_images }));

    const tableDropoffs = dropoffs.map(({ id, text, store, address, latitude, longitude }, idx) => ({ id, name: store?.name ?? `Dropoff #${idx + 1}`, text: text ?? "", address: { address, latitude, longitude } }));

    return (
        <div className="invoice">
            <CRow>
                <CCol md={6}>
                    <CCard>
                        <CCardHeader className="text-capitalize font-weight-bold">user details</CCardHeader>

                        <CCardBody>
                            <p className="user__detail">
                                <span>user name:</span> {user.name}
                            </p>
                            <p className="user__detail">
                                <span>user email:</span> {user.email}
                            </p>
                            <p className="user__detail">
                                <span>user phone:</span> {user.phone}
                            </p>
                            <p className="user__detail">
                                <span>user gender:</span> {user.gender === rolesTypes.gender.male ? "Male" : "Female"}
                            </p>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol md={6}>
                    <CCard>
                        <CCardHeader className="text-capitalize font-weight-bold">order details</CCardHeader>

                        <CCardBody>
                            <p className="order__detail">
                                <span>invoice #</span>
                                {tracking_ref}
                            </p>
                            <p className="order__detail">
                                <span>creation date:</span> {dateService.getDate(created_at).format("yyyy-MM-DD")}
                            </p>
                            <p className="order__detail">
                                <span>creation time:</span> {dateService.getDate(created_at).format("LT")}
                            </p>
                            <p className="order__detail">
                                <span>order status:</span> <span className={`p-2 ml-1 badge badge-${getBadge(getOrderStatus(status))}`}>{getOrderStatus(status)}</span>
                            </p>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol md={6} />

                <CCol md={6}>
                    {provider && (
                        <CCard>
                            <CCardHeader className="text-capitalize font-weight-bold">provider details</CCardHeader>

                            <CCardBody>
                                <p className="provider__detail">
                                    <span>provider name:</span> {provider.name}
                                </p>
                                <p className="provider__detail">
                                    <span>provider email:</span> {provider.email}
                                </p>
                                <p className="provider__detail">
                                    <span>provider phone:</span> {provider.phone}
                                </p>
                                <p className="provider__detail">
                                    <span>provider gender:</span> {provider.gender === rolesTypes.gender.male ? "Male" : "Female"}
                                </p>
                            </CCardBody>
                        </CCard>
                    )}
                </CCol>
            </CRow>

            <Table fields={pickupsTableHeaders} data={tablePickups} title="pickups" />

            <Table fields={dropoffsTableHeaders} data={tableDropoffs} title="dropoffs" />

            <ul className="complete-totals">
                <li className="complete-totals__heading">Totals Info</li>

                {order_type !== rolesTypes.userTypes.customer && (
                    <>
                        <li className="text-capitalize">
                            <strong>items amount:</strong> {items_amount} {user.country?.currency}
                        </li>

                        <li className="text-capitalize">
                            <strong>delivery amount:</strong> {delivery_amount} {user.country?.currency}
                        </li>

                        <li className="text-capitalize">
                            <strong>discount amount:</strong> {discount_amount} {user.country?.currency}
                        </li>
                    </>
                )}

                <li className="text-capitalize">
                    <strong>totals:</strong> {total_amount} {user.country?.currency}
                </li>
            </ul>
        </div>
    );
};
