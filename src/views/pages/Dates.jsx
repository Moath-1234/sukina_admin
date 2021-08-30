import React, { Component } from "react";
import Table from "../base/tables/Tables";
import { MainLoader } from "../../reusable/MainLoader";
import { generalServices } from "../../services";
import { CCol, CLink, CRow } from "@coreui/react";
import { displayAlert, getStatus } from "src/utils";
import moment from "moment";

class Dates extends Component {
    state = { Dates: [], isLoading: true };

    tableHeaders = [
        "id",
        { label: "نوع الاستشارة", key: "TypeOfConsultation" },
        { label: "طريقة الاستشارة", key: "status" },
        { label: "موعد الاستشارة", key: "date" },
        { label: "الخيارات", key: "action" },
    ];

    render() {
        const { isLoading, Dates } = this.state;

        if (isLoading) return <MainLoader />;

        return (
            <div className="Dates">
                <CRow className="mb-5">
                    <CCol md={6}></CCol>
                </CRow>

                <Table fields={this.tableHeaders} data={Dates} title="المواعيد" />
            </div>
        );
    }

    componentDidMount() {
        this.getAllDates().then();
    }

    async getAllDates() {
        const {
            data: { response },
        } = await generalServices.getAllDates();

        const newDates = response.map(({ ConsultationID, ConsultationMethod, ConsultationType, ConsultationTime }) => ({
            id: ConsultationID,
            status: getStatus(ConsultationMethod),
            TypeOfConsultation: ConsultationType,
            date: moment(ConsultationTime).format("ls"),
            action: (
                <td>
                    <span onClick={() => this.deleteDate(ConsultationID)} style={{ color: "red", cursor: "pointer" }}>
                        حذف
                    </span>
                </td>
            ),
        }));

        this.setState({ Dates: newDates, isLoading: false });
    }

    async deleteDate(itemId) {
        const { Dates } = this.state;

        const confirmed = await displayAlert("تحذير", "هل انت متأكد من حذف هذا العنصر", "warning", ["الغاء", "حذف"]);

        if (!confirmed) return;

        this.setState({ Dates: Dates.filter(({ id }) => +id !== +itemId) });

        let formData = new FormData();
        formData.append("id", itemId);
        const {
            success,
            data: { response },
        } = await generalServices.deleteDate(formData).then();

        if (!success) return displayAlert("خطأ", "هناك خطأ ما يرجى المحاولة مرة اخرى ", "error", "موافق");

        displayAlert("تم", response, "success", "موافق");
    }
}

export default Dates;
