import React from 'react'
import { LinkPreview } from '@dhaiwat10/react-link-preview';

export default function Preview() {
    return (
        <div className="d-flex justify-content-around">
            <LinkPreview url='https://www.who.int/' width='400px' height='350px' /><LinkPreview url='https://rapidapi.com/hub' width='400px' height='350px' />
        </div>
    )
}
