import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Button from '@material-ui/core/Button'
import {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'
import {parseCookies} from '../helpers/'

const placeholder = "Write Your Name Here";

/*export async function getServerSideProps(context){
  const cookies = parseCookies(context.req)
  if (context.res) {
    if (Object.keys(cookies).length === 0 && cookies.constructor === Object) {
      context.res.writeHead(301, { Location: "/" })
      context.res.end()
    }
  }

  return {
    props: {
      cookies: cookies && cookies,
    }
  }
}*/


export default function Home(data) {
  const [name, setName] = useState(placeholder)
  const [cookie, setCookie] = useCookies(["name"])
  const router = useRouter();

  if(cookie.name){ //Bypass User if has setted a Name already
    router.push('/dashboard')
  }

  function start(){
    if(!cookie.name){
      if(name && name !== placeholder){
        setCookie("name", name, {
          path: "/",
          maxAge: 2592000, // 30 Days
          sameSite: true
        })
      }
    }

    router.replace('/dashboard')
  }


  useEffect(() => {
    
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">ইসলামিক<br />কুইজ</h1>
        <div className="box p-1">
          <input type="text" className="bg-transparent border-0 input-box"
          placeholder={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        {name!==placeholder && name? <h3>আসসালামু আলাইকুম, <br />{name}</h3>:<></> }
        
        <div className="start-btn">
        {name!==placeholder && name?
         
            <Button variant="contained"
            style={
              {padding: '.2em 3em',
              fontSize: '1.5em',
              outline: 'none'
              }} onClick={start}>START
            </Button>
   
        :
        <></>
        }
        </div>
        
      </main>
      <style jsx>
        {`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: start;
          
        }

        .main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
          color: floralwhite;
        }
        .title{
          font-family: "bensen";
          text-align: center;
          font-size: 3.5em;
          margin-top: 15vh;
          //border: 1px solid white;
          width: 100%;
        }
        .start-btn{
          margin-top: 20vh;
          //border: 1px solid red;
          width: 100%;
          text-align: center;
        }
        .box{
          margin-top: 10vh;
          width: 100%;
        }
        .input-box{
          width: 100%;
          text-align: center;
          border: none;
          outline: none;
          color: floralwhite;

        }
        h3{
          margin-top: 10vh;
          text-align: center;
          line-height: 5vh;
        }
        `}
      </style>
    </div>
  )
}
