
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