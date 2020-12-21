import {useCookies} from 'react-cookie'
export default function Dashboard(){
    const [cookies, setCookie, removeCookie] = useCookies()
    return(
        <>
            <h1>Dashboard</h1>
            <button onClick={() => removeCookie('name')}>Remove Cookie</button>
        </>
    )
}