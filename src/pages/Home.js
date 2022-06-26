import { MDBContainer } from 'mdb-react-ui-kit';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Lists from './Lists';

const Home = () => {

    const {data:lists,loading,error} = useFetch('http://localhost:8000/lists');
    
    console.log(lists);

    const handleClick = (id) => {
        fetch('http://localhost:8000/lists/'+id, {
            method: 'DELETE'
        }).then(()=> {
            // const {data,loading,error} = useFetch('http://localhost:8000/lists');
            // setLists(data);
            // setLoad(loading);
            // setErr(error);
        })
    }


    return ( 
        <MDBContainer>
            {error && <div>{error}</div>}
            {loading && <Loading/>}
            {lists && <Lists lists={lists} handleClick={handleClick}/>}
        </MDBContainer>
     );
}
 
export default Home;