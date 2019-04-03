

import React from 'react'
import FilterLink from '../container/FilterLink'

import { visibleFilter } from '../action/index'

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={visibleFilter.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={visibleFilter.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={visibleFilter.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
)

export default Footer