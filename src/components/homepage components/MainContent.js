import React from 'react';

const MainContent = () => {
    return (
        <div className='mt-5 m-5'>
            <h1 className='fw-bold text-white mb-4'>Reasons I'm excited to learn React</h1>
            <ol >
                <li className='fw-medium fs-5 me-5 text-white mb-3'>React.js is a highly popular and widely
                    adopted JavaScript library. It has gained 
                    significant popularity in the web
                    development industry and is widely 
                    used by companies and developers worldwide. 
                </li>
                <li className='fw-medium fs-5 me-5 mb-3  text-white'>React.js is based on a component-based 
                    architecture, which promotes reusable and 
                    modular code. Components allow you to break down 
                    complex user interfaces into smaller, manageable 
                    parts, making development and maintenance easier.
                </li>
                <li className='fw-medium fs-5 mb-3 me-5 text-white'>React.js utilizes a virtual DOM 
                    (Document Object Model) which provides 
                    efficient rendering and updates to the user 
                    interface.
                </li>
                <li className='fw-medium fs-5 mb-3 me-5 text-white'> React.js encourages code reusability. 
                    With React components, you can create 
                    reusable UI elements and build a library 
                    of components that can be easily reused 
                    across different projects. 
                </li>
                <li className='fw-medium fs-5 mb-3 me-5 text-white'> React.js has a vibrant and active 
                    community.
                </li>
            </ol>
        </div>
    );
};

export default MainContent;