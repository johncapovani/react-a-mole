import { useEffect } from "react"
import moleHill from "../images/molehill.png"

function EmptySlot(props) {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setShowMole(true)
        }, randomSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={moleHill} onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot