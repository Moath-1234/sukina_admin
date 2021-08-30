import React, { Component } from "react";
import Table from "../base/tables/Tables";
import { MainLoader } from "../../reusable/MainLoader";
import { generalServices } from "../../services";
import { CCol, CLink, CRow } from "@coreui/react";
import { displayAlert } from "src/utils";

class Messages extends Component {
    state = { Messages: [], isLoading: true };

    // tableHeaders = ["id", "name", "email", "messege", "date", "action"];
    tableHeaders = [
        "id",
        { label: "الاسم", key: "name" },
        { label: "البريد الالكتروني", key: "email" },
        { label: "الرسالة", key: "messege" },
        { label: "تاريخ الارسال", key: "date" },
        { label: "الخيارات", key: "action" },
    ];
    render() {
        const { isLoading, Messages } = this.state;

        if (isLoading) return <MainLoader />;

        return (
            <div className="Messages">
                <CRow className="mb-5">
                    <CCol md={6}></CCol>
                </CRow>

                <Table fields={this.tableHeaders} data={Messages} title="الرسائل" />
            </div>
        );
    }

    componentDidMount() {
        this.getAllMessages().then();
    }

    async getAllMessages() {
        const {
            data: { response },
        } = await generalServices.getAllMessages();

        const messages = response.map(({ ContactID, ContactEmail, ContactMessage, ContactName, CreatedAt }) => ({
            id: ContactID,
            name: ContactName,
            email: ContactEmail,
            messege: ContactMessage,
            date: CreatedAt,
            action: (
                <td>
                    <span onClick={() => this.deleteMessage(ContactID)} style={{ color: "red", cursor: "pointer" }}>
                        حذف
                    </span>
                </td>
            ),
        }));

        this.setState({ Messages: messages, isLoading: false });
    }

    async deleteMessage(itemId) {
        const { Messages } = this.state;

        const confirmed = await displayAlert("تحذير", "هل انت متأكد من حذف هذا العنصر", "warning", ["الغاء", "حذف"]);

        if (!confirmed) return;

        this.setState({ Messages: Messages.filter(({ id }) => +id !== +itemId) });

        let formData = new FormData();
        formData.append("id", itemId);
        const {
            success,
            data: { response },
        } = await generalServices.deleteItem(formData).then();

        if (!success) return displayAlert("خطأ", "هناك خطأ ما يرجى المحاولة مرة اخرى ", "error", "موافق");

        displayAlert("تم", response, "success", "موافق");
    }
}

export default Messages;
