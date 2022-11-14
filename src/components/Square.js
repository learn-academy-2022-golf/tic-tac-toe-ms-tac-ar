import React from 'react'

const Square = (props) => {
    const handleClick = () => {
        props.handleMark(props.index)
    }
  return (
    <>
    <div className="square" onClick={handleClick}>{props.value}</div>
    </>
  )
}

export default Square

// **stretch goal - choose mark, x or o **
// default player mark to x.  all player clicks put an x in box, then computer randomly put o in another box until there is three in a row.

