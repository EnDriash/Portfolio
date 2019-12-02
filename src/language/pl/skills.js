import icons from '../../public/icons/iconslist';

let data = {
    frontend: {
        header: "Frontend:",
        basics: {
            name: "Podstawowe:",
            icons: [
                {
                    title: 'Redux',
                    svg: icons.reduxicon
                },
            ]
        },
        intermediate: {
            name: "Średnio-zaawansowane:",
            icons: [
                {
                    title: 'JavaScript',
                    svg: icons.jsicon
                },
                {
                    title: 'React.js',
                    svg: icons.reacticon
                },
               
            ]
        },
        advanced: {
            name: "Zaawansowane:",
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
            ]
        }
    },
    backend: {
        header: "Backend:",
        basics: {
            name: "Podstawowe:",
            icons: [
                {
                    title: 'Node.js',
                    svg: icons.nodeicon
                },
                {
                    title: 'Node Package Module',
                    svg: icons.npmicon
                },
                {
                    title: 'Express.js',
                    svg: icons.expressicon
                },
                {
                    title: 'MongoDB',
                    svg: icons.mongodbicon
                },
                {
                    title: 'MySQL',
                    svg: icons.mysqlicon
                },
            ]
        },
        intermediate: {
            name: "Średnio-zaawansowane:",
            icons: [
                {}
            ]
        },
        advanced: {
            name: "Zaawansowane:",
            icons: [
                {}
            ]
        }
    },
    others: {
        header: "Inne:",
        Programs: {
            name: "Programy i Aplikacje:",
            icons: [
                {
                    title: 'PhotoShop',
                    svg: icons.psicon
                },
                {
                    title: 'Gimp',
                    svg: icons.gimpicon
                },
            ]
        },
        DeveloperTools: {
            name: "Narzędzia Developerskie:",
            icons: [
                {
                    title: 'GitHub',
                    svg: icons.giticon
                },
                {
                    title: 'Visual Studio Code',
                    svg: icons.vscode
                },
                {
                    title: 'Jira',
                    svg: icons.jiraicon
                },
            ]
        }
    } 
} 
export default data;