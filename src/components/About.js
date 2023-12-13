import React from 'react'

export default function About(props) {
    return (
        <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1 className="text-center">About Us</h1><br />
            <p>The Text Modification Web Application is a versatile tool designed to empower users in enhancing, transforming, and manipulating text content.
                Key features include text formatting and styling options, content transformation capabilities, robust text encryption and decryption functionalities, linguistic analysis tools,
                collaborative editing features, version control for tracking changes, and convenient export and sharing options. Whether users are content creators, linguists,
                or collaborative teams, this application provides a user-friendly interface and powerful
                functionalities to redefine the way text is edited and manipulated in the digital realm.</p>

        </div>
    )
}
