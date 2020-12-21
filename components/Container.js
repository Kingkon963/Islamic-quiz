export default function Container({children, width, height, style}){
    return(
    <div className="wrapper">
        {children}
        <style jsx>{`
        .wrapper{
            background-color: #384658;
            border: 1px solid #2680EB;
            padding: 10px;
            ${width ? `width: ${width};` : `width: auto;`}
            ${height ? `height: ${height};` : `height: auto;`}
            ${style ? `${style}`: null}
        }    
        `}</style>
    </div>
    )
}