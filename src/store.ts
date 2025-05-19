interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string
    searchText: string;
}


import {create} from 'zustand';


create<GameQuery>((set) => {

    
    }
)