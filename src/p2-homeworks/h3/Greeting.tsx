import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any!
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void  // need to fix any!
    addUser: () => void // need to fix any!
    error: string // need to fix any!
    totalUsers: number // need to fix any!
    onKeyHandler: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)!

    const inputDisabled = error ? true : false // need to fix with (?:)!

    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyHandler}
            />
            <SuperButton onClick={addUser} disabled={inputDisabled}>
                add
            </SuperButton>
            <span>count: {totalUsers}</span>
            <div>_{error}</div>
        </div>
    )
}

export default Greeting
