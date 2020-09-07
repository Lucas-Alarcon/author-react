import { INIT_AUTHORS, GET_AUTHOR_DETAILS, GET_EDIT_AUTHOR, ADD_AUTHOR, EDIT_AUTHOR, ADD_BOOK, INPUT_CHANGE, DELETE_AUTHOR } from '../constants/actions';

export const initAuthors = authors => {
    return {
        type: INIT_AUTHORS, authors
    }
};

export const getAuthorDetails = author_id => {
    return {
        type: GET_AUTHOR_DETAILS, author_id
    }
};

export const inputChange = (input, value) => {
    return {
        type: INPUT_CHANGE, input: input, value: value
    }
};

export const addAuthor = () => {
    return {
        type: ADD_AUTHOR
    }
};

export const editAuthor = () => {
    return {
        type: EDIT_AUTHOR
    }
};

export const getEditAuthor = edit_author => {
    return {
        type: GET_EDIT_AUTHOR, edit_author
    }
};

export const addBook = book => {
    return {
        type: ADD_BOOK, book
    }
};

export const deleteAuthor = author_id => {
    return {
        type: DELETE_AUTHOR, author_id
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

export const fetchEditAuthor = async (author) => {

    const options = {
        method: 'PUT',
        body: JSON.stringify(author),
        headers: { "Content-Type": "application/json" }
    }

    const response = await fetch("http://localhost:3000/author/" + author.id, options);

}

export const fetchDeleteAuthor = async (id) => {

    const options = {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    }

    const response = await fetch("http://localhost:3000/author/" + id, options);

}
