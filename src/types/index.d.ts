import type { Pays } from "../pages/Dashboard"
export interface SidebarProps {
    id: number,
    icon: React.ElementType,
    label: string,
    path?:string,
    action?:string
    count?:number,
    active?:boolean,
    badge?:boolean,
    color?: string,
    submenu?: SidebarProps[]
}

export type Search={
    searchTerm?:string | (()=> void) 
    search?:string
    SetserchTerm?:React.Dispatch<React.SetStateAction<string>>
    SetSearch?:React.Dispatch<React.SetStateAction<string>>
    sidebarcollaps?:boolean
    ontoggle?:()=>void
}
type Props = {
  countries: Pays;
};
export type Props={
    searchTerm:string,
    search:string
    SetserchTerm: React.Dispatch<React.SetStateAction<string>>
    SetSearch:React.Dispatch<React.SetStateAction<string>>
}
type Capital = {
  name: string;
}

//typing currencies
type Monnais={
    name:string,
    symbol:string
}

//typing Pays
export type Pays = {
  names: {
    common: string;
    official: string;
  };
  flag: {
    url_png: string;
  };
  capitals: Capital[];
  population: number;
  region: string;
  subregion: string;
  languages:Capital[];
  currencies: Monnais[];
  borders: string[];
  timezones: string[];
}
export type Time = {
  name: string,
  humidity:number,
  wind_speed:number,
  pressure:number,
  main: {
    temp: number,
  },
  weather: {
    main: string,
    icon:string,
    description:string,
  }[]
}

export type Photo = {
    id:string,
    urls:{
        regular:string
    }
    alt_description:string | null
}
export interface UserProfile {
  displayName: string;
  email: string;
  createdAt: Date;
}

export type Timezone = {
    time:string
    date:string
    timeZone:string
}