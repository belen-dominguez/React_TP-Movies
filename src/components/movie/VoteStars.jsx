import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const ICONS = {
    star: [<BsStarFill />, <BsStarHalf />, <BsStar />]
}

const renderIcons = (icon,  numero) => {
    console.log(numero)
    let icons
    let number = Math.round(numero)
    const totalIcons = 5

    const isOdd = number % 2;
    const fullIcons = (number - isOdd) / 2
    const fullIconsArr = [...new Array(fullIcons)].map(() => ICONS[icon][0])
    const halfIcons = isOdd ? ICONS[icon][1] : null;
    const emptyIconsArr = [...new Array(totalIcons - fullIcons - isOdd)].map(() => ICONS[icon][2])
    icons = [...fullIconsArr, halfIcons, ...emptyIconsArr]

    return icons
}

const VoteStars = ({ numero, icon }) => {
    return (
        <div className="score">
        {renderIcons(icon, numero)}
    </div>
    )
}

export default VoteStars
