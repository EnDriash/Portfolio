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
                        <div className="row">
                            <div className="presentation-col col-xl-6">
                            <h3>Kilka słów o mnie:</h3>
                                <p>
                                    <b>Jędrzej Krawczyk. Junior JavaScript Developer.</b> Z wykształcenia inżynier Mechanik, z zamiłowania programista zafascynowany możliwościami jakie niesie ze sobą programowanie 
                                    – począwszy od budowania interfejsów, poprzez wdrażanie UX, aż po przetwarzanie danych. Należę do tej grupy ludzi, którzy zawsze są czegoś ciekawi,
                                    którym radość sprawia samo poszukiwanie odpowiedzi i droga, która trzeba przejść by do niej dotrzeć. 
                                    Poza programowaniem pasjonat akrobatyki, freeruningu/parkouru oraz nurkowania.
                                </p>
                            </div>
                            <div className="intrest-col col-xl-6">
                            <h3>Zainteresowania:</h3>
                                <p>
                                    <b>Freerun, freerunning, 3run  – </b>sport ekstremalny, który polega na wykonywaniu efektownych i trudnych tricków w czasie pokonywania przeszkód na trasie biegu.
                                    <br />Freerun wywodzi się z parkouru, ale prostota i szybkość pokonywania przeszkód nie odgrywa w nim znaczącej roli. We freerun zmieniono znacząco technikę. Elementy, które pozwalały przedostać się biegnącemu przez przeszkodę jak najłatwiej i jak najszybciej, zostały zastąpione przez tricki, które są trudne do wykonania, ale mają wartość pokazową, dołączone zostały także elementy akrobatyczne.
                                </p>
                                <iframe width="1519" height="554" 
                                    src="https://www.youtube.com/embed/7z6AA5jTKsg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
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