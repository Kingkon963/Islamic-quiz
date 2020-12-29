export default function Header({children}) {
    return(
    <>
        <div id="header" className="container">
            <div className="row">
                {children}
            </div>
        </div>
        <style jsx>
            {`

                #header{
                    position: relative;
                    top: 0;
                    padding: 1em 1em;
                    height: 10vh;
                }
            `}
        </style>
    </>
    )
}