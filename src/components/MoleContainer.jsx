import React from 'react'
import { useState } from 'react'
import EmptySlot from './EmptySlot'
import Mole from './Mole'

function MoleContainer(props) {

    let [showMole, setShowMole] = useState(false)

    const handleClick = () => {

        if (showMole) {

            props.setScore(props.score + 1)
            setShowMole(false)
        } else {
            props.setScore(props.score - 1)
        }

    }

    return (
        <div className='mole-box' style={{ 'display': 'inline-block' }}>
            {showMole ? <Mole showMole={showMole} setShowMole={setShowMole} handleClick={handleClick} /> :
                <EmptySlot showMole={showMole} setShowMole={setShowMole} handleClick={handleClick} />}
        </div>
    )
}

export default MoleContainer