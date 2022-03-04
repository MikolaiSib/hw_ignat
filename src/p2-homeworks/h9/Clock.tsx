import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date()) //new Date()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        setDate(date)// stop
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())// setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
        // show
    }
    const onMouseLeave = () => {
        setShow(false)
        // close
    }

    const stringTime = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2) //'Time' // fix with date
    const stringDate = ('0' + date.getDay()).slice(-2) + '.' + ('0' + date.getMonth()).slice(-2) + '.' + date.getFullYear() // fix with date


    return (
        <div style={{height: '75px', position: 'relative'}}>
            {!!timerId && (
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    style={{width: '50px'}}
                >
                    {stringTime}
                </div>
            )}
            {show && (
                <div>
                    {stringDate}
                </div>
            )}
            <div style={{position: 'absolute', width: '100%', bottom: '0'}}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock


