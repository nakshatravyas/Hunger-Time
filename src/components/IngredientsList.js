import React from 'react'

export default function IngredientsList({ingredientsobj}) {
  return (
    <li className="ingrdients-li">
        {ingredientsobj.original}
    </li>
  )
}
