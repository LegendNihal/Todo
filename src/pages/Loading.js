import { MDBSpinner } from 'mdb-react-ui-kit';

const Loading = () => {
    return ( 
        <div className="d-flex justify-content-center m-5 p-5">
            <MDBSpinner grow className='ms-2' color='dark' style={{ width: '10rem', height: '10rem' }}>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
     );
}
 
export default Loading;