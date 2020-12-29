import Avatar from './Avatar'
import BackButton from './BackButton'


export default function AppScreen({children}){

    return(
        <>
            <div className="appHeader">
                <BackButton />
                <Avatar />
            </div>

            <div className="appContainer">
                {children}
            </div>

            <style jsx>
                {`
                    .appHeader{
                        color; gray;
                        background-color: inherit;
                        //border: 1px solid yellow;
                        padding: 1em;
                        display: flex;
                        justify-content: space-between;
                    }
                    .appContainer{
                        border: 1px solid yellow;
                        height: 91vh;
                        color: floralwhite;
                        padding: 0 1em;
                    }
                `}
            </style>
        </>
    )
}