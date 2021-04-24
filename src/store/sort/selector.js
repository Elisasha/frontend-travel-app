import { createSelector } from 'reselect';

const sortType = state => state.sortType
const trips = state => Object.values(state.trips)

//to change
// const asc = true

export const getSortedTrips = createSelector(
    [sortType, trips],
    (sortType, trips) => {
        if (trips.length > 1) {
            switch (sortType) {
                case 'sortByName':
                    return trips.sort((a, b) => a.country > b.country)
                case 'sortByDate':
                    return trips.sort((a, b) => a.startDate > b.startDate)
                case 'sortByRating':
                    return trips.sort((a, b) => a.rating > b.rating)
            }
        }
        return trips
    }
)