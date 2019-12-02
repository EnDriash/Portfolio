import icons from '../../public/icons/iconslist';

let data = {
    frontend: {
        header: "Frontend:",
        basics: {
            name: "Basic:",
            icons: [
                {
                    title: 'Redux',
                    svg: icons.reduxicon
                },
            ]
        },
        intermediate: {
            name: "Intermediate:",
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
            name: "Advanced:",
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
            name: "Basic:",
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
            name: "Intermediate:",
            icons: [
                {}
            ]
        },
        advanced: {
            name: "Advanced:",
            icons: [
                {}
            ]
        }
    },
    others: {
        header: "Others:",
        Programs: {
            name: "Programs:",
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
            name: "Developer Tools:",
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