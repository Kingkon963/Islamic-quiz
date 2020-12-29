import {useRouter} from 'next/router'
import AppScreen from '../../components/AppScreen'

export default function Syllabus(context){
    const router = useRouter()
    
    return(
        <>
            <AppScreen>
                <h1>Syllabus of {router.query.quiz_id}</h1>
            </AppScreen>
        </>
    )
}