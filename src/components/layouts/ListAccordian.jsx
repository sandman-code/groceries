import React from 'react'

export default function ListAccordian({items}) {

    const displayFoodItems = items.map( (item, index) => <div key={item.name + index}>{item.name}</div>)
    return (
        <div>
            {displayFoodItems}
        </div>
    )
}
