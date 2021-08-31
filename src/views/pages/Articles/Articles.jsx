import React, { Component } from "react";
import { generalServices } from "../../../services";
import { CCol, CLink, CRow } from "@coreui/react";
import Tables from "src/views/base/tables/Tables";
import { MainLoader } from "src/reusable/MainLoader";
import { displayAlert } from "src/utils";

class Articles extends Component {
    state = { Articles: [], isLoading: true };

    tableHeaders = [
        "id",
        { label: "الصورة", key: "image" },
        { label: "العنوان", key: "title" },
        { label: "الوصف", key: "text" },
        { label: "الخيارات", key: "action" },
    ];

    render() {
        const { isLoading, Articles } = this.state;

        if (isLoading) return <MainLoader />;

        return (
            <div className="Articles">
                <CRow className="mb-2 ml-auto">
                    <CCol col="auto" className="d-flex justify-content-end">
                        <CLink to="AddArticle" className="btn btn--primary">
                            أضافة
                        </CLink>
                    </CCol>
                </CRow>

                <Tables fields={this.tableHeaders} data={Articles} title="المقالات" />
            </div>
        );
    }

    componentDidMount() {
        this.getAllArticles().then();
    }

    async getAllArticles() {
        const {
            data: { response },
        } = await generalServices.getAllArticles();

        const ArticlesAfterConfiguration = response.map(({ BlogID, BlogImage, BlogTitle, BlogText }) => ({
            id: BlogID,
            image: BlogImage,
            title: BlogTitle,
            text: BlogText,
            action: (
                <td>
                    <CLink to={`/EditArticle/${BlogID}`}>تعديل</CLink>
                    <br />
                    <br />
                    <span onClick={() => this.deleteItem(BlogID)} style={{ color: "red", cursor: "pointer" }}>
                        حذف
                    </span>
                </td>
            ),
        }));

        this.setState({ Articles: ArticlesAfterConfiguration, isLoading: false });
    }

    async deleteItem(BlogID) {
        const { Articles } = this.state;

        const confirmed = await displayAlert("تحذير", "هل انت متأكد من حذف هذا العنصر", "warning", ["الغاء", "حذف"]);

        if (!confirmed) return;

        this.setState({ Articles: Articles.filter(({ id }) => +id !== +BlogID) });

        let formData = new FormData();
        formData.append("id", BlogID);
        const {
            success,
            data: { response },
        } = await generalServices.deleteItem(formData).then();

        if (!success) return displayAlert("خطأ", "هناك خطأ ما يرجى المحاولة مرة اخرى ", "error", "موافق");

        displayAlert("تم", response, "success", "موافق");
    }
}

export default Articles;
