import React, {useState} from 'react'
import Affairs from './Affairs'
//import {strict} from "assert";

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = Array<ArrType>
export type ArrType = {
    id: number
    name: string
    priority: string
    }
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType = [
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: FilterType): any => {
    if (filter === 'all') return affairs
    if (filter === 'low') return affairs.filter(f => f.priority === 'low')
    if (filter === 'middle') return affairs.filter(f => f.priority === 'middle')
    if (filter === 'high') return affairs.filter(f => f.priority === 'high')
    //else return // need to fix
}
export const deleteAffair = (affairs: AffairType, id: number): Array<any> => {
    return affairs.filter(f => f.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id))

    return (
        <div>
            <hr/>
            {/*homeworks 2*/}

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
