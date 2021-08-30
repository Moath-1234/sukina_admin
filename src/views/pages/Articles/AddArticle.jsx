import React, { Suspense, Component } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CForm, CFormGroup, CRow } from "@coreui/react";
import { MainLoader } from "src/reusable/MainLoader";
import { InputBlock } from "src/blocks/InputBlock";
import { SubmitBtn } from "src/reusable/SubmitBtn";
import { displayAlert, uploadDataFactory } from "src/utils";
import { generalServices } from "src/services";
import { addEditActionsService } from "src/services/AddEditActionsService";
import { UploadFileBlock } from "src/blocks/UploadFileBlock";
import { TextAreaBlock } from "src/blocks/TextAreaBlock";

class AddArtical extends Component {
    currentStatus = "اضافة";

    state = {
        imageData: uploadDataFactory({}),
        fields: { blog_title: "", blog_text: "" },
        isSubmitting: false,
    };

    render() {
        const { isLoading, fields, isSubmitting, imageData } = this.state;

        if (isLoading) return <MainLoader />;

        return (
            <Suspense fallback={<MainLoader />}>
                <CRow>
                    <CCol md={12}>
                        <CCard>
                            <CCardHeader className="primary-color font-weight-bold">اضافة مقال</CCardHeader>

                            <CCardBody>
                                <CForm>
                                    <CFormGroup row>
                                        <CCol md={7} className="mb-4">
                                            <InputBlock
                                                type="text"
                                                label="عنوان المقال"
                                                name="blog_title"
                                                value={fields.blog_title}
                                                onFieldChange={this.onFieldChange}
                                            />
                                        </CCol>

                                        <CCol md={7} className="mb-4">
                                            <TextAreaBlock
                                                label="وصف المقال"
                                                type="text"
                                                name="blog_text"
                                                value={fields.blog_text}
                                                onFieldChange={this.onFieldChange}
                                            />
                                        </CCol>
                                    </CFormGroup>

                                    <CFormGroup row>
                                        <CCol md={7}>
                                            <CRow>
                                                <CCol md={12} className="mb-2">
                                                    <img
                                                        alt=""
                                                        src={`${imageData.prefix}${imageData.blob ?? "images/image-placeholder.png"}`}
                                                        className="image image--contained"
                                                        width="100"
                                                        height="100"
                                                    />
                                                </CCol>

                                                <CCol md={12}>
                                                    <UploadFileBlock label="Choose file..." name="image" onFileFieldChange={this.onFileFieldChange} />
                                                </CCol>
                                            </CRow>
                                        </CCol>
                                    </CFormGroup>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

                <SubmitBtn textContent={this.currentStatus} onSubmit={this.onSubmit} isLoading={isSubmitting} disabled={isSubmitting} />
            </Suspense>
        );
    }

    onFileFieldChange = ({
        target: {
            files,
            dataset: { name },
        },
    }) => this.setState({ [name]: addEditActionsService.createDataURL(files) });

    uploadFile = (file) => addEditActionsService.uploadFile(file);

    onFieldChange = (name, value) => this.setState({ fields: { ...this.state.fields, [name]: value } });

    onSubmit = async () => {
        const { fields, imageData } = this.state;

        this.setState({ isSubmitting: true });
        if (fields.blog_title && fields.blog_text && imageData.file) {
            var formdata = new FormData();

            formdata.append("blog_title", fields.blog_title);
            formdata.append("blog_text", fields.blog_text);
            formdata.append("file", imageData.file);

            const { success } = await generalServices.addBlog(formdata);

            if (!success) return displayAlert("خطأ", "هناك خطأ ما", "success").then();

            this.props.history.push("/Articles");

            displayAlert("تم", "اضافة المقال", "success").then();
        } else {
            displayAlert("خطأ", "الرجاء تعبئة جميع الحقول", "error").then();
        }
        this.setState({ isSubmitting: false });
    };
}

export default AddArtical;
