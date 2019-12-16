import React from 'react';
import icons from '../../public/icons/iconslist';

import burger from '../../public/images/Project/BURGER.PNG';
import blsystem from '../../public/images/Project/BannerLinkSystem.png';
import prsgame from '../../public/images/Project/PRSgame.PNG';
import awax from '../../public/images/Project/AWAX.jpg';
import mache from '../../public/images/Project/MACHE.jpg';
import golden from '../../public/images/Project/GOLDEN.jpg';
import portfolio from '../../public/images/Project/Portfolio.JPG';

const data = {
    mainHeaderName: "Moje projekty",
    layout:{
        about: "O projekcie:",
        technologies: "Technologie:"
    },
    projects:{
    portfolio: {
        header: 'Tu gdzie się poznajemy - ',
        title: 'Moje Portfolio',
        desc: <p>Portfolio które właśnie przeglądasz zostało napisane w <b>React.js</b>. Zaimplementowana zostały paczki z <b>Node Package Menagar</b>biblioteka odpowiedzialna za animacje tj. <b>react-animation-on-scroll</b>. Całośc została rozbita na reużywalne komponenty które są automatycznie renderowane. Została wykorzystana paczka <b>react-sass</b> i zaimplementowana do webpacka stworzonego przez <b>react-creat-app</b>. Deployment strony jest realizowany za pomoca paczki <b>gh-pages</b>, a sam formularz kontaktowy został podpięty do <a href="formspree.io">formspree.io</a> abyśmy mogli się skontaktować. </p>,
        previewImg: portfolio,
        preview:{
            demo: 'https://endriash.github.io/Portfolio/',
            code: 'https://github.com/EnDriash/Portfolio',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'React.js',
                svg: icons.reacticon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    bannerlinksystem: {
        header: 'Projekt - ',
        title: 'Banner Link System',
        desc: <p>Jeden z pierwszych moich projektów stworzony z myślą o zarządzaniu linkami oraz banerami. W tym projekcie chciałem przećwiczyć: poprawną strukturę dokumentów, używanie preprocessora <b>SASS</b>, efekt <b>SPA w vanilla JS</b>, <b>Responsive Web Design</b> aby strona otwierała się na każdym typie urządzenia oraz stosowanie dodatkowych bibliotek wraz ze skrytpami w <b>NPM</b>.</p>,
        previewImg: blsystem,
        preview:{
            demo: 'https://endriash.github.io/BannerLinkSystem/.',
            code: 'https://github.com/EnDriash/BannerLinkSystem',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    paperrockscissors: {
        header: 'Prosta Gra - ',
        title: 'Papier, Kamień I Nożyce',
        desc: <p>Jest to projekt gry Papier, Kamień i Nożyce w przeglądarce napisanej za pomocą SASS, vanilla JS oraz HTML. Celem było zapoznanie sie z metodami <b>HTML DOM</b> i przećwiczenie pisania logiki w <b>JavaScript</b>. Gra umożliwia granie z komputerem oraz osobnym graczem, a nastepnie generuje tabele ze statystykami.</p>,
        previewImg: prsgame,
        preview:{
            demo: 'https://endriash.github.io/Projects/PaperRockScissors/PaperRockScissors.html',
            code: 'https://github.com/EnDriash/Projects/tree/master/PaperRockScissors',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    awax: {
        header: 'Strona Produktowa - ',
        title: 'Awax',
        desc: <p>Projekt Landing Page'a opartego na <b>Flexbox'ie</b> służył do przećwiczenia składni <b>HTML5, CSS3, SASS(CSS3), nawigacji w JS oraz zaimplementowania RWD.</b></p>,
        previewImg: awax,
        preview:{
            demo: 'https://endriash.github.io/Projects/SimplePage4/index.html',
            code: 'https://github.com/EnDriash/Projects/tree/master/SimplePage4',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    golden: {
        header: 'Strona Produktowa - ',
        title: 'Golden',
        desc: <p>Projekt Landing Page'a oparty na starej technologi pozycjonowania elementów jaką są floaty służył do przećwiczenia składni HTML5, CSS3, SASS(CSS3), nawigacji w JS oraz zaimplementowania RWD.</p>,
        previewImg: golden,
        preview:{
            demo: 'https://endriash.github.io/Projects/SimplePage3/SimplePage3.html',
            code: 'https://github.com/EnDriash/Projects/tree/master/SimplePage3',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    mache: {
        header: 'Strona Produktowa - ',
        title: 'Mache',
        desc: <p>Jeden z pierwszych projektów typu Landing Page. Służył do przećwiczenia składni HTML5, CSS3, SASS(CSS3), nawigacji w JS zaimplementowania RWD. Landing Page przeszedl refactoring. Starszą strukturę kodu można odczytać cofając się w historii commitów na GitHub.</p>,
        previewImg: mache,
        preview:{
            demo: 'https://endriash.github.io/Projects/SimplePage2/index.html',
            code: 'https://github.com/EnDriash/Projects/tree/master/SimplePage2',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    currentwork: {
        header: 'Czym się teraz zajmuje? - ',
        title: 'Burger Builder App',
        desc: <p>Jest to projekt aplikacji realizowanej wg. programu kursu na <b>Udemy</b> stworzonego przez <i>Maximilian'a a Schwarzmüller'a</i>. Kurs porusza tworzenie stron w bibliotece <b>React.js</b> z najnowszymi standardami i dobrymi praktykami. Poruszane są tematy takie jak zarządzanie stanem komponentu w <b>Redux</b> w architekturze Flux, routing po stronie frontendu czyli biblioteka <b>React Router</b>, tworzenie inteligentynych komponentów w <b>React Hooks</b>. Łącznie <b>40h</b> specjalistycznej wiedzy popartej praktyką aby wyspecjalizować się w bibliotece React.js.</p>,
        previewImg: burger,
        preview:{
            demo: 'https://endriash.github.io/BurgerApp-ReactLearning/',
            code: 'https://github.com/EnDriash/BurgerApp-ReactLearning',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'React.js',
                svg: icons.reacticon
            },
            {
                title: 'Redux',
                svg: icons.reduxicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    }
    },
    whatElse:{
        header: 'Co jeszcze?',
        showcode: 'POKAŻ KOD',
        content:{
            node:{
                name: 'node',
                header: 'Node.js - Ćwiczenia ',
                icon: {
                    title: 'Node.js',
                    svg: icons.nodeicon
                },
                desc: <p><b>Node.js</b> – wieloplatformowe środowisko uruchomieniowe o otwartym kodzie do tworzenia aplikacji typu server-side napisanych w języku JavaScript.<br /><br /> Aby zapoznać się z środowiskiem Node.js i silnikiem <b>Chrome V8</b> zostało wykonane kilkanaście ćwiczeń w modułach takich jak: <b>fileSystem, operationSystem, HTTP</b>. Powstały projekty takie jak <b>ToDoList, Image Loader</b>.</p>,
                link: 'https://github.com/EnDriash/JSlearning/tree/master/Node.js'
            },
            mongo:{
                name: 'mongo',
                header: 'MongoDB - ToDo List',
                icon: {
                    title: 'MongoDB',
                    svg: icons.mongodbicon
                },
                desc: <p><b>MongoDB</b> – otwarty, nierelacyjny system zarządzania bazą danych napisany w języku C++. Charakteryzuje się dużą skalowalnością, wydajnością oraz brakiem ściśle zdefiniowanej struktury obsługiwanych baz danych. <br /><br />Celem tej aplikacji było przećwiczenie pracy z nierelacyjną bazą danych za pomocą 4 głównych funkcjonalności <b>Create, React, Update, Delete</b> w skórcie <b>CURD</b>. Dzięki temu powstała aplikacja do organizacji zadań tak zwana <b>ToDo List</b>. Komunikacja odbywa się za pomocą konsoli w środowisku <b>Node.js</b></p>,
                link: 'https://github.com/EnDriash/JSlearning/tree/master/MongoDB'
            },
            express:{
                name: 'express',
                header: 'Express.js - Quiz App ',
                icon: {
                    title: 'Express.js',
                    svg: icons.expressicon
                },
                desc: <p>Express.js to minimalistyczny oraz elastyczny framework Node.js, która zapewnia solidny zestaw funkcji dla pracy z aplikacjami internetowymi i mobilnymi.<br /><br /> Celem tej aplikacji było przećwiczenie komunikacji między widokiem a kontrolerem oraz zapoznanie się z metodami serwowanymi przez framework.</p>,
                link: 'https://github.com/EnDriash/JSlearning/tree/master/Express.js/Quiz'
            },
            rnative:{
                name: 'reactNative',
                header: 'React Native - Comics Api ',
                icon: {
                    title: 'React Native',
                    svg: icons.reacticon
                },
                desc: <p><b>React Native</b> to framework który umożliwia budowanie interfejsów użytkownika dla urządzeń mobilnych za pomocą React.js.<br /><br /> Aplikacja powstała z myślą o pobieraniu z udostępnionego API <a href="https://xkcd.com">xkcd.com</a> najnowszych zabawnych komiksów. W kodzie można zobaczyć nową składnią <b>React Hooks</b>, elementy natywne udostępnione dzięki React Native oraz użycie biblioteki <b>react-navigation</b> do serwowania widoków dla klienta.</p>,
                link: 'hhttps://github.com/EnDriash/xkcd-App---First-React-Native-App'
            },
            grouptask:{
                name: 'grouptask',
                header: 'Furniture Shop - Group Task ',
                icon: {
                    title: 'Jira',
                    svg: icons.jiraicon
                },
                desc: <p>Udział w projekcie zespołowym. Zrealizowanie sklepu internetowego meblowego. Byłem odpowiedzialny za stworzenie sekcji Nowe meble. Sekcja miała mieć zaimplementowane takie funkcjonalności jak przełączanie miedzy kategoriami, filtrowanie listy produktów pobranych jako obiekty, wyświetlanie sekcji jako karuzeli scalowalnej  szerokosci urzadzenia. Całość została napisana w vanillia.js oraz przy pomocy zaimplementowanego modułu <b>mustache.js</b> aby uzyskać dynamiczne dodawanie komponentów. Pliki za które byłem odpowiedzialny to: <br /><br /><b>- newFurniture.js <br />-product_data.js <br />-post_data.js <br />-templateGenerator.js <br />-swiper.js (kod zapożyczony i zaimplementowany do karuzeli)</b> <br /><br /> W projekcie brało udział 4 Junior Developerów, 1 Senior Developer, 1 Project Menager. Całość była nadzorowana za pomocą metodyki <b>Kanban w Jira oraz Github</b>. Projekt miał symulować prace zespołu developerskiego: obowiązkowe <b>code review, pull requests, rebase itd</b>.</p> ,
                link: 'https://github.com/EnDriash/wdp-1907-05/tree/master/src/scripts'
            },
            codingbat:{
                name: 'codingbat',
                header: 'Logic Tasks - CodingBat ',
                icon: {
                    title: 'Java',
                    svg: icons.javaicon
                },
                desc: <p>Rozwiązanie ponad 200 logiczynych zagadek w języku Java ze strony <a href="https://codingbat.com">codingbat.com</a>.<br /> Wybranie języka Java na samym początku nauki programowania umożliwiło zrozumienie wielu konceptów w językach jeszcze wyższego poziomu. Przykładem może być TypeScript w JS lub OOP. </p>,
                link: 'https://github.com/EnDriash/CodingBat/tree/master/CodingBat%20-%20Java%20Practice'
            },
        }
    }
}
export default data;