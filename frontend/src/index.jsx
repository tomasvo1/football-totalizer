import React from 'react'
import ReactDOM from 'react-dom'

import App from './pages/App'

const providers = []

function reduceProvider(children, Provider) {
    return <Provider>{children}</Provider>
} 

function Providers({ children }) {
    return providers.reduce(reduceProvider, <React.Fragment>{children}</React.Fragment>)
}

ReactDOM.render(
    <Providers>
        <App />
    </Providers>,
    document.getElementById('app')
)
