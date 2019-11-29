import React, {Component} from 'react';
import personalImg from '../../../public/images/personalImg.jpg';
import styles from './AboutMe.scss';

class AboutMe extends Component {
    
    render() {
        return (
            <div className="AboutMe">
                
                <h1>About Me</h1>
                <div className="row">
                    <div className=" imageCol col-xl-3">
                        <div className="img personalImg">
                            <img src={personalImg} alt="My Personal IMG"></img>
                        </div>
                        <div>
                           <p></p> 
                        </div>
                    </div>
                    <div className="contentCol col-xl-9">
                        <p>
                            Uwielbiam rozwijać swoje pasje i umiejętności. 
                            Pierwsze linie kodu  napisałem na studiach (Mechanika i Budowa Maszyn) i to wtedy zrozumiałem, że mój analityczny umysł stworzony jest do programowania.
                            Wszystkie swoje projekty publikuję na moim githubie @Endriash. Jestem graczem zespołowym,
                            nie jest mi obca praca w dużej korporacji i świetnie dogaduje się z ludźmi.
                            Szukam możliwości rozpoczęcia kariery zawodowej jako młodszy programista JavaScript lub Frontend we Frameworku React.js.
                        </p>
                    </div>
                </div>
                <div className="pagination">
                    {/* <PaginationList /> */}
                </div>
                
            </div>
        )
    }
    
}
export default AboutMe;