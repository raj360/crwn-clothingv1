import React from 'react'

import Directory from '../../components/directory/directoryComponent'

import './homePageStyles.scss'

const HomePage = ({history}) =>(
    <div className = "homepage">
        <Directory/>
    </div>
)
export default HomePage;