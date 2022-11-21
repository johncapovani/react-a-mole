import { useEffect } from 'react'
import moleImg from '../images/mole.png'

function Mole(props) {
    useEffect(() => {

        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '30vh' }}
                src={moleImg}
                onClick={props.handleClick} />
        </div>
    )
}

export default Mole