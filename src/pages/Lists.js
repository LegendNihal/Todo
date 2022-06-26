import { MDBContainer,MDBBtn,MDBIcon,MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';



const Lists = ({lists,handleClick}) => {

    return ( 
        <div className="m-5">
            <MDBContainer className="text-center">
                <Link to='/create'>
                    <MDBBtn outline className='mx-2' color='dark'>
                        ADD
                    </MDBBtn>
                </Link>
            </MDBContainer>
            {lists.map((list)=> (
                <div key={list.id} className='square border rounded-pill m-4'>
                    <MDBRow>
                        <MDBCol md='8'>
                            <div style={{height: "122px", position: "relative"}}>
                                <div className="display-6 m-3" style={{position: "absolute",left: "8rem"}}>{list.title}</div>
                                <p className="lead m-3" style={{position: "absolute",top: "3rem", left: "10.5rem"}}>By {list.author}</p>
                            </div>
                        </MDBCol>
                        <MDBCol md='4' className="d-flex justify-content-center align-items-center">
                            <MDBBtn floating tag='a' color='success' className="m-1" onClick={()=>handleClick(list.id)}>
                                <MDBIcon fas icon="check" />
                            </MDBBtn>
                            <MDBBtn floating tag='a' color='danger' className="m-1">
                                <MDBIcon fas icon="trash" />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </div>
            ))}
        </div>
     );
}
 
export default Lists;