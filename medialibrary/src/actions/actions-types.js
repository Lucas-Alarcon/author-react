import { INIT_AUTHORS, GET_AUTHOR_DETAILS, ADD_AUTHOR, ADD_BOOK, INPUT_CHANGE, DELETE_AUTHOR } from '../constants/actions';

export const initAuthors = payload => {
    return {
        type: INIT_AUTHORS, payload
    }
};

export const getAuthorDetails = payload => {
    return {
        type: GET_AUTHOR_DETAILS, payload
    }
};

export const inputChange = (input, value) => {
    return {
        type: INPUT_CHANGE, input: input, value: value
    }
};

export const addAuthor = (name, bio, shop_name) => {
    return {
        type: ADD_AUTHOR, name: name, bio: bio, shop_name: shop_name
    }
};

export const addBook = payload => {
    return {
        type: ADD_BOOK, payload
    }
};

export const deleteAuthor = payload => {
    return {
        type: DELETE_AUTHOR, payload
    }
};

export const fetchAddAuthor = async (author) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(author),
        headers: { "Content-Type": "application/json" }
    }

    const response = await fetch("http://localhost:3000/add", options);

}

export const fetchDeleteAuthor = async (id) => {

    const options = {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    }

    const response = await fetch("http://localhost:3000/author/" + id, options);

}
