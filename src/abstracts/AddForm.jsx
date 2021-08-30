import { Component } from "react";
import { addEditActionsService, languageService } from "../services";
import { displayAlert, getSelectedLanguagesTD, mapSelectData } from "../utils";

export class AddForm extends Component {
    state = { fields: {}, errors: {}, isLoading: true, languages: [], CountryLanguages: [] };

    // Track and control component between add & edit
    currentState = "Add";

    // Get language across all sub components to inherit language
    componentDidMount() {
        this.getAllLanguages().then();
    }

    async getAllLanguages() {
        const { data: languages } = await languageService.getAllLanguages();

        this.setState({ languages: mapSelectData(languages), isLoading: false });
    }

    async getCountryLanguages(CountryId) {
        const { data: languages } = await languageService.getCountryLanguages(CountryId);

        this.setState({ CountryLanguages: mapSelectData(languages), isLoading: false });
    }

    onFieldChange = (name, value) => this.setState({ fields: { ...this.state.fields, [name]: value } });

    onFileFieldChange = ({
        target: {
            files,
            dataset: { name },
        },
    }) => this.setState({ [name]: addEditActionsService.createDataURL(files) });

    uploadFile = (file) => addEditActionsService.uploadFile(file);

    // Handle add selected language and language value, and checking if a language with a value already exist

    addSelected(language, languageValue, selectedData, removeAction) {
        // (language : object , languageValue : string , selectedData : Array<object> , removeAction : (id : string) => void )

        if (!language || !languageValue) return null;

        const isLanguagePresent = selectedData.some(({ languageId }) => languageId === language.id);

        if (isLanguagePresent) {
            displayAlert("Warning", `${language.name} language already added with a value!`, "warning").then();

            return null;
        }

        return getSelectedLanguagesTD({ languageId: language.id, languageType: language.name, languageValue, removeAction });
    }

    // Remove a language from languages table
    removeSelected = (collectionName) => (id) => this.setState({ [collectionName]: this.state[collectionName].filter(({ languageId }) => languageId !== id) });

    // Get languages with there values to send to the api in the api data shape
    getLanguageNames = (selectedLanguages) => selectedLanguages.map(({ languageId, languageValue }) => ({ language_id: languageId, value: languageValue }));

    // Filter fields to remove local needed fields that the api don't need
    getCommonSubmitFields = (fields, unwantedKeys) => Object.fromEntries(Object.entries(fields).filter(([fieldName]) => !unwantedKeys.includes(fieldName)));
}
