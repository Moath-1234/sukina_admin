class RolesTypes {
    defaultOptions = [
        { label: "Yes", value: true },
        { label: "No", value: false },
    ];

    getDefaultOptions = (value) => (!!value ? this.defaultOptions[0] : this.defaultOptions[1]);
    gender = { female: 0, male: 1 };

    genderOptions = [
        { label: "Female", value: this.gender.female },
        { label: "Male", value: this.gender.male },
    ];

    statusOptions = [
        { label: "Active", value: 1 },
        { label: "inactive", value: 0 },
    ];

    getStatusSelectedOption = (status) => (status === 1 ? this.statusOptions[0] : this.statusOptions[1]);
}

export const rolesTypes = new RolesTypes();
