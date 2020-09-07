import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { getAuthorDetails, getEditAuthor, deleteAuthor } from '../actions/actions-types';
import AuthorDetails from './AuthorDetails';

const Authors = () => {

    const { authors, auhtorIdSelected } = useSelector(state => state.authors);

    const dispatch = useDispatch();

    const history = useHistory();

    const redirectEditAuthor = (author) => {
        dispatch(getEditAuthor(author));
        let path = `/author/edit/${author.id}`;
        history.push(path);

    };

    return (
        <>
            <Container>
                <Titre>Liste des autheurs</Titre>
                <Row>
                    {authors.map((author, i) => {
                        return (
                            <Author key={i}>
                                <h3>{author.name}</h3>
                                <Button onClick={() => dispatch(getAuthorDetails(author.id))}>Details</Button>
                                <Button onClick={() => redirectEditAuthor(author)}>Editer</Button>
                                <Button onClick={() => dispatch(deleteAuthor(author.id))}>Supprimer</Button>
                                {author.id === auhtorIdSelected && <AuthorDetails key={i} author={author}></AuthorDetails>}
                            </Author>
                        )
                    })}
                </Row>
            </Container>
        </>
    )

}

const Container = styled.div`
    margin: 40px;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Titre = styled.h2`
    margin-bottom: 20px;
`;

const Author = styled.article`
    width: 400px;
    background-color:#222;
    color: white;
    box-shadow: 0px 5px 20px #555;
    text-align:center; 
    padding: 15px 20px;
    margin: 15px 20px; 
    box-sizing: border-box;
`;

const Button = styled.a`
    background-color: #e7e7e7;
    color: black;
    padding: 15px 32px;
    margin-top: 20px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
`;


export default Authors;