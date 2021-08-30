import swal from "sweetalert";

export const handleResponse = ({ success, ...rest }) => ({ success, ...rest });

export const displayAlert = (title, text, icon, buttons) => swal({ title, text, icon, buttons });

export const mapSelectData = (options) =>
    Array.isArray(options) ? options.map((option) => ({ label: option.name, value: option.id, ...option })) : [];

export const uploadDataFactory = ({ file = "", blob = null, prefix = "", isUploaded = false }) => ({ file, blob, prefix, isUploaded });

export const getBadge = (status) => {
    switch (status) {
        case "Active":
        case "Online":
            return "success";
        case "Inactive":
            return "secondary";
        case "Direct":
        case "Pending":
            return "warning";
        case "Rejected":
        case "Canceled":
        case "Closed":
            return "danger";
        default:
            return "primary";
    }
};

export const getStatus = (status) => (+status === 1 ? "Direct" : "Online");
