
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default function Timeline() {
    return (
        <MDBContainer fluid className="py-5" >
            <div className="main-timeline">
                <div className="timeline left">
                    <MDBCard>
                        <MDBCardBody className="p-4">
                            <h3>Software Engineer Fellow</h3>
                            <h5>July - August 2024</h5>
                            <blockquote>Build 5 AI Projects in 5 weeks, with a final team project of creating a program
                                tackling the backlog of a startup company.</blockquote>
                            {/* <p className="mb-0"> */}
                            {/* As a SWE Fellow at Headstarter, I built five AI projects in 7 weeks. 
                The program highlighted networking, collaboration, and project-based learning. */}
                            {/* Using Python, Next.js, and Firebase, I built a customer support chatbot, a recipe recommender, a rate my professor clone, a complaint categorizer, and  */}
                            {/* </p> */}
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="timeline right">
                    <MDBCard>
                        <MDBCardBody className="p-4">
                            <h3>Junior Software Developer</h3>
                            <h5>January 2023 - April 2024</h5>
                            <blockquote>Developed a web application for an ecommerce company, using Vue.js, C#, Node.js, and
                                MongoDB.</blockquote>
                            {/* <p className="mb-0">
                As Novvia sales were ramping down, I was offered a full-time position at eComsystems as a junior software developer.
              </p> */}
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="timeline left">
                    <MDBCard>
                        <MDBCardBody className="p-4">
                            <h3>Junior Software Developer</h3>
                            <h5>January 2022 - December 2022</h5>
						<blockquote>Developed a mobile and web application for a startup company, using Flutter, Vue.js,
							Node.js, and MongoDB.</blockquote>
                            <p className="mb-0">
                                Gained a full-time position at Novvia as a junior software developer after my internship.
                                During that time I lead a team of developers and client communications to convert web applications from Php to JavaScript.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="timeline right">
                    <MDBCard>
                        <MDBCardBody className="p-4">
                            <h3>Software Development Intern</h3>
                            <h5>June 2021 - December 2021</h5>
                            <p className="mb-0">
                                Worked as a software development intern at a small startup, Novvia which sadly no longer exists.
                                Working with a team of developers to create mobile and web applications for clients.
                                I developed the front-end and back-end of applications using Flutter, Firebase, and Bitbucket.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="timeline left">
                    <MDBCard>
                        <MDBCardBody className="p-4">
                            <h3>Engineering Internship</h3>
                            <p className="mb-0">
                                I did a year-long internship at Hirschvogel Incorporated. I worked on a team of engineers to maintain and optimize manufacturing operations.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </MDBContainer>
    );
}