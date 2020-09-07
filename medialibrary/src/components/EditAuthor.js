import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editAuthor, inputChange, addBook } from '../actions/actions-types';
import styled from "styled-components";

const EditAuthor = () => {

    const { name, bio, shop_name, book, books, message } = useSelector(state => state.authors);
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(editAuthor())
    }

    return (
        <Form>
            <Titre>Editer un auteur</Titre>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <Input type="text" name="name" id="name" value={name} onChange={e => dispatch(inputChange(e.target.name, e.target.value))} />

                    <label htmlFor="bio">Bio :</label>
                    <Input type="text" name="bio" id="bio" value={bio} onChange={e => dispatch(inputChange(e.target.name, e.target.value))} />

                    <label htmlFor="shop_name">Shop :</label>
                    <Select name="shop_name" id="shop_name" onChange={e => dispatch(inputChange(e.target.name, e.target.value))} value={shop_name}>
                        <option value="" defaultValue>Sélectionner un magasin </option>
                        <option value="fnac">Fnac</option>
                        <option value="eyrolles">Eyrolles</option>
                        <option value="gibert jeune">Gibert Jeune</option>
                    </Select>

                    <label htmlFor="book">Book :</label>
                    <Input type="text" name="book" id="book" value={book} onChange={e => dispatch(inputChange(e.target.name, e.target.value))} />
                    {books.map((book, i) => {
                        return (<li key={i}>{book}</li>)
                    })}
                    <Message>{message}</Message>
                    <Button type="button" onClick={() => dispatch(addBook(book))}>Ajouté un livre</Button>
                </div>
                <Submit type="submit" value="Valider" />
            </form>
        </Form>
    );
}

const Form = styled.div`
    margin: 40px;
`;

const Titre = styled.h2`
    margin-bottom: 30px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 10px 0 25px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Select = styled.select`
    width: 100%;
    padding: 12px 20px;
    margin: 10px 0 25px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 30%;
    background-color: black;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Message = styled.p`
    margin: 25px 0 25px;
`;

const Submit = styled.input`
    width: 100%;
    background-color: black;
    color: white;
    padding: 14px 20px;
    margin-top: 40px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export default EditAuthor;
