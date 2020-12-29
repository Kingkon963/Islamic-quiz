import {useCookies} from 'react-cookie'
import Header from '../../components/Header'
import Avatar from '../../components/Avatar'
import QuizCard from '../../components/QuizCard'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Dashboard(){
    const [cookies, setCookie, removeCookie] = useCookies()
    const router = useRouter()
    useEffect(() => {
        if(!cookies.name){
            router.replace('/')
        }
    })

    return(
        <>
            <Header>
                <div className="col-8">
                    <h1>কুইজ বেছে নিন</h1>
                </div>
                <div className="col-4">
                    <Avatar />
                </div>
            </Header>

            <div className="container">
                <div className="row">
                    <div className="col-12 px-0">
                        <div className="quizContainer">
                            <QuizCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid prizeContainer">
                <div className="row">
                    <div className="col-12 px-0">
                        <h4>১ম পুরষ্কার</h4>
                    </div>
                    <div className="col-12 px-0 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="prize-text prize-title">১০৳</h1>
                        <h5 className="prize-text prize-subtitle">মোবাইল রিচার্জ</h5>                         
                    </div>
                </div>
            </div>



            <button onClick={() => removeCookie('name')}>Remove Cookie</button>

            <style jsx>{`
                * {
                    color: floralwhite;
                }
                h1 {
                    color: floralwhite;
                }
                .quizContainer{
                    margin: 0 1em;
                    border: 1px solid #256DC3;
                }
                .prizeContainer{
                    background-color: #020043;
                    height: 36vh;
                    padding: 1em 2em;
                }
                .prize-text{
                    color: floralwhite;
                    border: 1px solid yellow;
                }
                .prize-title{
                    font-size: 8em;
                }
                .prize-subtitle{
                    font-size: 2em;
                }
            `}
            </style>
        </>
    )
}