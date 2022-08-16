import React from 'react'
import { useState } from 'react'

export default function Categories({chooseCategory, categories}) {

  return (
    <div className='categories'>
        {categories.map(category => (
            <div onClick={() => {
                window.scrollTo({top: 1050, behavior:'smooth'});
                chooseCategory(category.key);
            }} key={category.key}>{category.name}</div>
        ))}
    </div>
  )
}
