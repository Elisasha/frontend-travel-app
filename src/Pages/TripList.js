import React from 'react';
import { TripCard } from "../components/TripCard";
import { Container } from '../components/Container';
import { SearchPanel } from '../components/SearchPanel';


export function Triplist() {
    return (
        <Container>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-1 px-4">
                {Array.from({ length: 10 }).map(index => <TripCard key={index}></TripCard>)}
            </div>
        </Container >
    );
}