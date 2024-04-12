import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

function QuotesApp(){

    const [quote,setQuote] = useState(null);

    const getQuote = async ()=>{

        try {
            const apiResponse = await fetch("https://api.quotable.io/random");
        const apiData = await apiResponse.json();
        const {content,author} = apiData;
        setQuote({content,author});
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    useEffect(()=>{
        getQuote()

    },[])





    return(
        <>
        <img style={{width:'100vw',height:"100vh"}} src="https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="d-flex justify-content-center align-items-center" style={{position:"absolute",top:"0",left:"0", width:'100vw',height:"100vh",backdropFilter:"blur(3px)",backgroundColor:"rgba(0,0,0,0.3)"}}>
            {
                quote 
                ?
                <div className="w-75 text-center">
                <h3 className="display-2 text-white fst-italic fw-bold ">{quote.content}</h3>
                <p className="text-white lead">~{quote.author}</p>
                <button onClick={()=> getQuote()} className="btn btn-primary">New Quote</button>
            </div>

                :

                <Spinner/>



            }
            
        </div>


        </>
    )
}

export default QuotesApp;