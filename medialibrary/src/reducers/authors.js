import { INIT_AUTHORS, GET_AUTHOR_DETAILS, ADD_AUTHOR, INPUT_CHANGE, ADD_BOOK, DELETE_AUTHOR } from '../constants/actions';
import { fetchAddAuthor, fetchDeleteAuthor } from '../actions/actions-types';

let stateInit = {
    authors: [],
    auhtorIdSelected: null,
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
                authors: action.payload
            }

        case GET_AUTHOR_DETAILS:
            return {
                ...state,
                auhtorIdSelected: action.payload
            }

        case INPUT_CHANGE:
            const { input, value } = action;
            return {
                ...state,
                [input]: value,
                message: ""
            }

        case ADD_AUTHOR:
            const { name, bio, shop_name } = action;

            const author =  { id: String(Date.now()), name: name, bio: bio, shop_name: shop_name, books: state.books }

            if (name.trim() === '' || shop_name.trim() === '' || bio.trim() === '')
                return {
                    ...state,
                    message: "Un des champs est vide"
                }
            else {
                fetchAddAuthor(author)
            }

            return {
                message: `Autheur ${state.name} ajouté !`,
                name: '', bio: '', shop_name: '', books: []
            }

        case ADD_BOOK:
            if (action.payload.trim() === '')
            return {
                ...state,
                message: "Le champ book est vide"
            }

            return {
                ...state,
                books: [...state.books, action.payload],
                message: `Livre ${action.payload} ajouté !`,
                book: ''
            }

        case DELETE_AUTHOR:
            const author_delete = state.authors.filter(author => author.id !== action.payload);
            fetchDeleteAuthor(action.payload)
            return {
                ...state,
                authors: author_delete
            }

        default:
            return state;
    }
}

export default reducer;