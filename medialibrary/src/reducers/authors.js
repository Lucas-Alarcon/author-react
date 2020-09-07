import { INIT_AUTHORS, GET_AUTHOR_DETAILS, GET_EDIT_AUTHOR, ADD_AUTHOR, EDIT_AUTHOR, ADD_BOOK, INPUT_CHANGE, DELETE_AUTHOR, CLEAN_AUTHOR } from '../constants/actions';
import { fetchAddAuthor, fetchEditAuthor, fetchDeleteAuthor } from '../actions/actions-types';

let stateInit = {
    authors: [],
    authors_id_details: [],
    id: "",
    name: "",
    bio: "",
    shop_name: "",
    book: "",
    books: [],
    message: ""
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case INIT_AUTHORS:
            return {
                ...state,
                authors: action.authors
            }

        case GET_AUTHOR_DETAILS:

            if (state.authors_id_details.includes(action.author_id)) {
                const authors_display = state.authors_id_details.filter(author_id => author_id !== action.author_id);
                return {
                    ...state,
                    authors_id_details: authors_display
                }
            }

            return {
                ...state,
                authors_id_details: [...state.authors_id_details, action.author_id]
            }

        case INPUT_CHANGE:
            const { input, value } = action;
            return {
                ...state,
                [input]: value,
                message: ""
            }

        case ADD_AUTHOR:
            const author = { id: String(Date.now()), name: state.name, bio: state.bio, shop_name: state.shop_name, books: state.books }

            if (state.name.trim() === '' || state.shop_name.trim() === '' || state.bio.trim() === '')
                return {
                    ...state,
                    message: "Erreur un champ est vide !"
                }
            else {
                fetchAddAuthor(author)
            }

            return {
                ...state,
                message: `Autheur ${state.name} ajouté !`,
                authors: [...state.authors, author],
                name: '', bio: '', shop_name: '', books: []
            }

        case EDIT_AUTHOR:

            const author_edit = { id: state.id, name: state.name, bio: state.bio, shop_name: state.shop_name, books: state.books }

            if (state.name.trim() === '' || state.shop_name.trim() === '' || state.bio.trim() === '')
                return {
                    ...state,
                    message: "Erreur un champ est vide !"
                }
            else {
                fetchEditAuthor(author_edit)
            }

            return {
                ...state,
                message: `Autheur ${state.name} édité !`
            }

        case GET_EDIT_AUTHOR:
            const { edit_author } = action;

            return {
                ...state,
                id: edit_author.id,
                name: edit_author.name,
                bio: edit_author.bio,
                shop_name: edit_author.shop_name,
                book: '',
                books: edit_author.books,
                message: ""
            }

        case ADD_BOOK:
            if (action.book.trim() === '')
                return {
                    ...state,
                    message: "Le champ book est vide"
                }

            return {
                ...state,
                books: [...state.books, action.book],
                message: `Livre ${action.book} ajouté !`,
                book: ''
            }

        case DELETE_AUTHOR:
            const authors_keep = state.authors.filter(author => author.id !== action.author_id);
            fetchDeleteAuthor(action.author_id)
            return {
                ...state,
                authors: authors_keep
            }

        case CLEAN_AUTHOR:
            return {
                ...state,
                id: "",
                name: "",
                bio: "",
                shop_name: "",
                book: "",
                books: [],
                message: ""
            }

        default:
            return state;
    }
}

export default reducer;