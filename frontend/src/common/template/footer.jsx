import React from 'react'

export default props => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="main-footer">
            <strong>
                Copyright &copy; {year}
                <a href='http://cod3r.com.br' target="_blank"> Cod3r</a>.
            </strong>
        </footer>
    )
}