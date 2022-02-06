import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: string // need to fix any!
    addUserCallback: (name: string) => void // need to fix any!
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any!
    const [error, setError] = useState<string>('error') // need to fix any!

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any!
        setName(e.currentTarget.value) // need to fix!
        if (e.currentTarget.value) {
            setError('')
        } else {
            setError('error')
        }
    }

    const addUser = () => {
        if (name) {
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix!
            setName(name)
        }
    }

    const onKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
        }
    }


    const totalUsers = users.length // need to fix!

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyHandler={onKeyHandler}
        />
    )
}

export default GreetingContainer
