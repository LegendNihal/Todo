

const About = () => {
    return ( 
        <header>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 736 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>About</h1>
                            <h4 className='mb-3'>Grocery List</h4>
                            <p>Produced By Wives</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default About;