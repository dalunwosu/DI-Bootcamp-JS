import {useState} from 'react'
import './Language.css'
const Language = (props) => {
    const [votes, setVotes] = useState(0)
    return (
        <div className='language-container'>
            <h1>{votes}</h1>
            <h1>{props.language}</h1>
            <button onClick={() => {setVotes(votes+1)}}>Vote</button>
        </div>
    )
}

export default Language