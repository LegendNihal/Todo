import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';

const Contact = () => {
    return ( 
        <MDBContainer>
            <h1 className='d-flex justify-content-center m-5'>Contact Us</h1>
            <MDBRow className='mt-5 mb-3'>
                <MDBCol xl="12">
                    <MDBContainer>
                        <MDBCard background='dark' className='text-white' style={{ maxWidth: '1296px' }}>
                            <MDBCardHeader>Profile</MDBCardHeader>
                                <MDBCardBody className='text-center'>
                                    <MDBCardTitle>MD Tanveer Hossain Nihal and My Future Wife</MDBCardTitle>
                                    <MDBCardText>
                                        Wanna Contact ?? Find Us Below
                                    </MDBCardText>
                                </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
            <MDBRow className='my-5'>
                <MDBCol md='4'>
                    <MDBContainer>
                        <h3>ME</h3>
                        <p>Contact No : 01320578602</p>
                        <p>Email : officialgamernihal@gmail.com</p>
                    </MDBContainer>
                </MDBCol>
                <MDBCol md='8'>
                    <MDBContainer>
                        <h3 className='d-flex justify-content-end'>My Wifu</h3>
                        <p className='d-flex justify-content-end'>Contact No : 018********</p>
                        <p className='d-flex justify-content-end'>Email: punammahi@gmail.com</p>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
     );
}
 
export default Contact;
