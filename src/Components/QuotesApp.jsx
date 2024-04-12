import React from "react";

function QuotesApp(){
    return(
        <>
        <img style={{width:'100vw',height:"100vh"}} src="https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="d-flex justify-content-center align-items-center" style={{position:"absolute",top:"0",left:"0", width:'100vw',height:"100vh",backdropFilter:"blur(3px)",backgroundColor:"rgba(0,0,0,0.3)"}}>
            <div className="w-75 text-center">
                <h3 className="display-2 text-white fst-italic fw-bold ">Go confidently in the direction of your dreams!</h3>
                <p className="text-white lead">~Author</p>
                <button className="btn btn-primary">New Quote</button>
            </div>
        </div>


        </>
    )
}

export default QuotesApp;