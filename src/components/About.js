

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })


    return (
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Random Password Generator
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div  className="accordion-body">
                            <strong>This is a all in one Random Password Generator app.</strong><br/> You can generate random password with many customizations and secure your files, folders and accounts.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Developer
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div  className="accordion-body">
                            <strong>Harsh Prakash - RCCIIT, Kolkata</strong><br/> Hello everyone, I am the developer of the Random Password Generator. Hope it would help you secure your account.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
