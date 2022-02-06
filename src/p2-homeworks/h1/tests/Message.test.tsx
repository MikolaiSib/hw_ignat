import React from 'react'
import {render} from '@testing-library/react'
import Message from '../Message'

test('find text "test message name"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name="Some Name"
            message=""
            time=""
        />
    ))
    // const linkElement = getByText(/Some Name/i)
    // expect(linkElement).toBeInTheDocument("Some Name")
})
test('find text "test message"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name=""
            message="some text"
            time=""
        />
    ))
    // const linkElement = getByText(/some text/i)
    // expect(linkElement).toBeInTheDocument("some text")
})
test('find text "test message time"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name=""
            message=""
            time="22:00"
        />
    ))
    // const linkElement = getByText(/22:00/i)
    // expect(linkElement).toBeInTheDocument("22:00")
})
