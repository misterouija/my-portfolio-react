function ThanksMessage(props) {
    //console.log(props);
    return <p className='text-light fs-1'>Your name is: {props.name}</p>;
}

function Thanks() {
    return (
        <div
            className='modal fade'
            id='thanksModal'
            tabIndex='-1'
            aria-labelledby='thanksModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='thanksModalLabel'>
                            Modal title
                        </h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>
                    <div className='modal-body'>
                        <ThanksMessage />
                        <p>Hello</p>
                    </div>
                    <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                        >
                            Close
                        </button>
                        <button type='button' className='btn btn-primary'>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Thanks, ThanksMessage };
