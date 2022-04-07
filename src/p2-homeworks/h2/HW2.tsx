import React, {useState} from 'react'
import Affairs from './Affairs'
import AlternativeAffairs from './AlternativeAffairs';

// types
export type AffairPriorityType = 'high' | 'low' |'middle'
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') {return affairs}
    else
        if (filter === 'low') {return affairs.filter(f=>f.priority===filter)}
    else
        if (filter === 'middle') {return affairs.filter(f=>f.priority===filter)}
    else
    {return affairs.filter(f=>f.priority===filter)}
     // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(f=>f._id!==_id) // need to fix
}

export const HW2 =() => {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any


    const addAffair = (nameAffair: string, priorityAffair: string) => {
        let newAffair = {
            _id: affairs[affairs.length-1]._id+1,
            name: nameAffair,
            priority: priorityAffair
        }
        let newAffairs =[...affairs, newAffair]
        setAffairs(newAffairs)
    }


    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
           <h1>Homework 2</h1>

            <AlternativeAffairs addAffair={addAffair}/>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

        </div>
    )
}

export default HW2
