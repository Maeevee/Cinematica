export interface IPopular{title:string; poster_path:string; vote_average:number; id:number}

export interface IFilm{backdrop_path: string; poster_path:string; title: string; genres:{id: number; name: string}[]; homepage: string; overview: string;  release_date: string; runtime: number; vote_average: number; id: number; spoken_languages:{english_name: string; id: string}[]; production_countries:{name: string; id: string}[]}

export interface IReview{author_details:{avatar_path: string; username: string; rating: number}; content: string; created_at: string}

export interface ITrailer{key: string; name: string}