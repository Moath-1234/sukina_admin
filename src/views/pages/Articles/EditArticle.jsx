import { generalServices } from "src/services";
import { displayAlert } from "src/utils";
import AddArtical from "./AddArticle";

export default class EditArticle extends AddArtical {
    currentStatus = "تعديل";
    // async componentDidMount() {

    //     // await this.getSingleBlog();

    //     // this.setState({ isLoading: false });
    // }

    onSubmit = async () => {
        const { fields, imageData } = this.state;

        this.setState({ isSubmitting: true });
        // const image = imageData.file ? await this.uploadFile(imageData.file) : imageData.blob;
        if (fields.blog_title && fields.blog_text && imageData.file) {
            var formdata = new FormData();

            formdata.append("blog_title", fields.blog_title);
            formdata.append("blog_text", fields.blog_text);
            formdata.append("blog_id", this.props.match.params.id);
            formdata.append("file", imageData.file);

            const { success } = await generalServices.EditBlog(formdata);

            if (!success) return displayAlert("خطأ", "هناك خطأ ما", "success").then();

            this.props.history.push("/Articles");

            displayAlert("تم", "تعديل المقال", "success").then();
        } else {
            displayAlert("خطأ", "الرجاء تعبئة جميع الحقول", "error").then();
        }
        this.setState({ isSubmitting: false });
    };
}
