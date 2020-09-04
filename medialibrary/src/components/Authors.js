import React from 'react';
import { useSelector } from 'react-redux';
import AuthorDetails from './AuthorDetails';
import { useDispatch } from 'react-redux';
import { getAuthorDetails, deleteAuthor } from '../actions/actions-types';
import styled from "styled-components";

const Authors = () => {

    const { authors, auhtorIdSelected } = useSelector(state => state.authors);

    const dispatch = useDispatch();

    return (
        <>
            <Container>
                <h2>Liste des autheurs</h2>
                <div>
                    <Ul>
                        {authors.map((author, i) => {
                            return (
                                <Li key={i}>
                                    <p>{author.name}</p>
                                    <button onClick={() => dispatch(getAuthorDetails(author.id))}>Details</button>
                                    {author.id === auhtorIdSelected && <AuthorDetails key={i} author={author}></AuthorDetails>}
                                    <button onClick={() => dispatch(deleteAuthor(author.id))}>Supprimer</button>
                                </Li>
                            )
                        })}
                    </Ul>
                </div>
            </Container>
        </>
    )

}

const Container = styled.div`
    padding-left: 50px;
    padding-right: 50px;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const Li = styled.li`
    padding-left: 50px;
    padding-right: 50px;
    list-style:none;
`;

export default Authors;