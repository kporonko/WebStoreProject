import React from 'react'
import { useState } from 'react'

export default function Categories({chooseCategory, products}) {

    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'All',
        },
        {
            key: 'women\'s clothing',
            name: 'Women\'s clothing',
        },
        {
            key: 'men\'s clothing',
            name: 'Men\'s clothing',
        },
        {
            key: 'electronics',
            name: 'Electronics',
        },
        {
            key: 'jewelery',
            name: 'Jewelery',
        },
    ])

  return (
    <div className='categories'>
        {categories.map(category => (
            <div onClick={() => chooseCategory(category.key)} key={category.key}>{category.name}</div>
        ))}
    </div>
  )
}
