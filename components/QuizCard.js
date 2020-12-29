import Link from 'next/link'
import Button from '@material-ui/core/Button'

function DescriptionRow({left, right}){
    return(
        <div className="row mb-2">
            <div className="col-6">
                {left}
            </div>
            <div className="col-6 text-right">
                {right}
            </div>
            <style jsx>
                {`
                    .text-right{
                        text-align: right;
                    }
                `}
            </style>
        </div>
    )
}

export default function QuizCard(){
    return(
        <>
            <div className="card">
                <div className='container-fluid px-2'>
                    <div className='row'>
                        <div className='col-12 px-0'>
                            <h1 className="title">
                                আখলাক
                            </h1>
                        </div>

                        <div className="col-12 px-0 mt-3">
                            <Link href="/syllabus/0">
                                <Button variant="contained" style={{width: '100%', borderRadius: '0px', padding: '3px 16px'}}>
                                    <div className="syllabus-btn-inside">
                                        <span>সিলেবাস</span>
                                        <img src="images/arrow.svg" alt="" style={{width: '.7em', height: 'auto'}}/>
                                    </div>
                                </Button>
                            </Link>
                        </div>

                        <div className="col-12 px-0 mt-3">
                            <div className="container-fluid px-0">
                                <DescriptionRow left="প্রশ্ন" right="১০টি"/>
                                <DescriptionRow left="রেজিস্ট্রেশন" right="২৪৩ জন"/>
                                <DescriptionRow left="তারিখ" right="১২/১০/২০২১"/>
                                <DescriptionRow left="সময়" right="বিকাল ৫:৩০"/>
                            </div>
                        </div>

                        <div className="col-12 px-0  time-left">
                            <h5 className="text-center">সময় বাকি</h5>
                            <div className="bg-light text-dark p-1 text-center">
                                535H : 36M : 13S
                            </div>
                        </div>

                        <div className="col-12 px-0 mt-1 card-btn">
                            <Button variant="contained" style={{width:'100%', outline:'none', 
                            borderRadius:'0px', backgroundColor:'#16FFB8', fontSize:'1.2em'}}>Register</Button>
                        </div>

                    </div>
                </div>
                


            </div>

            <style jsx>
            {` 
                .card{
                    background-color: rgba(255, 255, 255, 22%);
                    padding: 1em;
                    height: 54vh;
                    border-radius: 0px;
                    //max-width: 300px;
                    //overflow: scroll;
                    position: relative;
                }
                .title{
                    color: #16FFFF;
                    border: 1px solid #256DC3;
                    padding: 5px;
                    text-align: center;
                    font-size: 2em;
                    font-family: "Baloo Da 2", cursive;
                    letter-spacing: 1px;
                    margin: 0px;
                }
                .syllabus-btn-inside{
                    display: flex;
                    justify-content: space-between;
                    //border: 1px solid #256DC3;
                    width: 100%;
                }
                .time-left{
                    position: absolute;
                    bottom: 4.3em;
                    width: 93.5%;
                }
                .card-btn{
                    position: absolute;
                    bottom: 1em;
                    width: 93.5%;
                }
            `}
            </style>
        </>
    )
}