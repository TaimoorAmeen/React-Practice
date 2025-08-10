import { useRef } from "react";
import { useFormStatus } from "react-dom";
const App = () =>{
    
    const handleSubmit = async() => {
       await new Promise(res => setTimeout(res,2000));
       console.log("submit");
    }

    function CustomerForm(){
        const {pending} = useFormStatus();
        console.log(pending);
        return(
            <>
                <input type="text" placeholder="Enter Name"/><br /><br />
                <input type="text" placeholder="Enter Password"/><br /><br />
                <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
            </>
        )
    }
    return( 
    <div>
        <h1>useFormStatus Hook in React Js 19</h1>
        <form action={handleSubmit}>
            <CustomerForm/>
        </form>
    </div>
    );  
}
export default App;
