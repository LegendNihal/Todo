import { MDBContainer,MDBInput,MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [pending,setPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const list = {title,author};

        setPending(true);
        fetch('http://localhost:8000/lists', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(list)
        }).then(()=>{
            setPending(false);
            history.push('/');
        })
    }

    return ( 
        <>
            <div className="display-5 text-center mt-5 mb-2">Add Something To The List</div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className='mb-5 text-center form-outline' style={{width: "480px"}}>
                    <div>
                        <MDBInput label='Title' className="m-3" type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
                        <MDBInput label='Name' className="m-3" type='text' required value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    {!pending && <MDBBtn rounded className='mx-2 mt-3' color='dark'>Submit</MDBBtn>}
                    {pending && <MDBBtn rounded className='mx-2 mt-3' color='dark' disabled>Adding...</MDBBtn>}
                </form>
            </div>
        </>
     );
}
 
export default Create;
<div></div>