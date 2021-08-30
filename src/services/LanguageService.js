import { apiEndpoints } from "../api";
import { CrudService } from "./CrudService";

class LanguageService {
    #crudService = new CrudService("/languages", "/addLanguage", "/editLanguage", apiEndpoints.languages);
    mainRoute = this.#crudService.mainRoute;
    addRoute = this.#crudService.addRoute;
    editRoute = this.#crudService.editRoute;

    getAllLanguages = () => this.#crudService.getAll();
    getCountryLanguages = (CountryID) => this.#crudService.getAllByQuery(`?country_id=${CountryID}`);

    getSingleLanguage = (languageId) => this.#crudService.getSingle(languageId);

    addLanguage = (newLanguage) => this.#crudService.add(newLanguage);

    updateLanguage = (languageId, updatedLanguage) => this.#crudService.update(languageId, updatedLanguage);

    deleteLanguage = (languageId) => this.#crudService.delete(languageId);
}

export const languageService = new LanguageService();
