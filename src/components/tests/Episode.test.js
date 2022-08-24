import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = {
    id: 578663,
    image: "https://static.tvmaze.com/uploads/images/medium_landscape/342/855787.jpg",
    name: "Chapter Two: The Weirdo on Maple Street",
    number: 2,
    runtime: 56,
    season: 1,
    summary: "words"
}

const testEpisodeImage = {
    id: 578663,
    image: 'https://i.ibb.co/2FsfXqM/stranger-things.png',
    name: "Chapter Two: The Weirdo on Maple Street",
    number: 2,
    runtime: 56,
    season: 1,
    summary: "words"
}

test("renders without error", () => { 
    render(<Episode episode={testEpisode}/>)
});

test("renders the summary test passed as prop", () => { 
    render(<Episode episode={testEpisode}/>);
    const summary = screen.queryByText(/words/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('words'),
    expect(summary).toBeTruthy();
});

test("renders default image when image is not defined", () => { 
    render(<Episode episode={testEpisodeImage}/>);
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(image).toBeInTheDocument();
});
