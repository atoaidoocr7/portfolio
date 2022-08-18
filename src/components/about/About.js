import './About.css'
import Award from '../../images/temple.svg.png'

export default function About() {

    return (
        <div className="a">


            {/* LEFT DIV */}
            <div className="a-left">
                <h1 className="a-title">Skills</h1>
                

                <div className="skills-container">
                    <div className="parent-container">
                       
                    </div>
                </div>
            </div>



            {/* RIGHT DIV */}
            <div className="a-right">

                <div className="title-container">
                    <h1 className="a-title">About Me</h1>
                </div>
                <div className="about-desc">
                    <p>
                        Lifetime student, Software Engineer with a strong passion for tackling complex problems using technology.
                        My aim is to make an impact wherever I find myself.
                    </p>

                    <br />
                    <p >
                        Aspiring Software Engineer pursuing a B.S. in Computer Science. Ambitious with a strong willingness
                        to learn new things and also enjoy solving challenging problems. Adept at working independently but
                        also a team player. Feel free to connect, or contact me at ato.aidoo@temple.edu
                    </p>
                </div>

                <div className="about-award">
                    <div className="award-image">
                        <img src={Award} alt="" />
                    </div>
                    <div className="award-texts">
                        <h4 className="a-award-title">Temple University CO 2023</h4>
                        <p className="a-award-desc">
                            B.S. Computer Science

                        </p>
                        <p>Affiliations: NSBE, ColorStack, CodePath</p>
                    </div>
                </div>

            </div>
            {/* <div className="a-right">
                <div className="a-about">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-sub">
                        Lifetime student, Software Engineer with a strong passion for tackling complex problems using technology.
                        My aim is to make an impact wherever I find myself.
                    </p>
                    <p className="a-desc">
                        Aspiring Software Engineer pursuing a B.S. in Computer Science. Ambitious with a strong willingness
                        to learn new things and also enjoy solving challenging problems. Adept at working independently but
                        also a team player. Feel free to connect, or contact me at ato.aidoo@temple.edu
                    </p>
                </div>

                <div className="a-award">
                    <div className="a-award-img-wrapper">
                        <img src={Award} alt="" className="a-award-img" />
                    </div>

                    <div className="a-award-texts">
                        <h4 className="a-award-title">Temple University CO 2023</h4>
                        <p className="a-award-desc">
                            B.S. Computer Science

                        </p>
                        <p>Affiliations: NSBE, ColorStack, CodePath</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}