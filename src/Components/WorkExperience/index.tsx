import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faTimes, faCalendar, faArrowRight, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import './styles.scss'

const drawerVariants = {
    initial: {
        opacity: 0,
        y: -9999
    },
    animate: {
        opacity: 0.9,
        y: 0,
        transition: {
            duration: 0.4
        }
    },
    exit: {
        y: -9999,
        opacity: 0
    }
}

export const WorkExperience = ({ colors, theme }: any) => {
    const { t, i18n } = useTranslation()
    const [show, setShow] = React.useState(false)
    const drawer: any = React.useRef(document.getElementById('drawer')).current

    const toggleDrawer = (status: boolean) => (event: any) => {
        if (event.type == 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        if (status) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            document.body.style.position = '';
            document.body.style.top = ``;
        }
        setShow(status)
    }

    const PresentJob = (
        <>
            <ListItem>
                <ListItemText
                    secondary={(
                        <React.Fragment>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faCalendar} />
                            </span>
                            <span className={`mr-2`}>
                                {moment('2020-02-01').format('DD-MM-YYYY')}
                            </span>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                            <span>
                                {t(`CURRENT`)}
                            </span>
                        </React.Fragment>
                    )}>
                    <strong>
                        HealthOSBD (Senior Software Engineer) &nbsp;
                    </strong>
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton
                        style={{
                            color: colors[theme].primaryColor
                        }}
                        edge="end"
                        aria-label="times">
                        <FontAwesomeIcon icon={faTimes} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Updated ReactJS and AngularJS apps from session based to jwt based authentication
                        </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Worked on the mobile app design using React Native and Expo
                        </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Experienced in react navigation and subtile animation in React Native
                        </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Experienced in framer motion for web based apps
                        </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Worked on Canvases, 3Ds using Blender and THREE.js
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Prototyped with Figma
                </span>
            </ListItem>
        </>
    )

    const InterconnectionJob = (
        <>
            <ListItem>
                <ListItemText
                    secondary={(
                        <React.Fragment>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faCalendar} />
                            </span>
                            <span className={`mr-2`}>
                                {moment('2019-07-01').format('DD-MM-YYYY')}
                            </span>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                            <span>
                                {moment('2020-02-01').format('DD-MM-YYYY')}
                            </span>
                        </React.Fragment>
                    )}>
                    <strong>
                        Interconnection Limited (Software Engineer Team Lead) &nbsp;
                    </strong>
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Leading a small group of people on creating the architecture and structure of the React App
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Proficient in server side rendering using Next JS to gain its full benefits
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Trained group of people on React JS, Redux, React Redux
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Familiar with Mobx state management
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Worked on elastic search for searching with Django
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Worked on cache and message broker with Redis
                </span>
            </ListItem>
        </>
    )

    const InterconnectionJuniorJob = (
        <>
            <ListItem>
                <ListItemText
                    secondary={(
                        <React.Fragment>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faCalendar} />
                            </span>
                            <span className={`mr-2`}>
                                {moment('2018-07-01').format('DD-MM-YYYY')}
                            </span>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                            <span>
                                {moment('2019-07-01').format('DD-MM-YYYY')}
                            </span>
                        </React.Fragment>
                    )}>
                    <strong>
                        Interconnection Limited (Junior Software Engineer) &nbsp;
                    </strong>
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Leading a small group of people on creating the architecture and structure of the React App
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Created offline website using Indexed DB and Service Worker in Angular JS 1.0
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Override the default hotkeys of the hotkeys with the modified one in Angular JS 1.0
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Implemented new design for the input forms using Sass
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Changed the overall design for the printing tables and point of service print
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Implemented context menu in the table to show customized  dropdown menu
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Designed the whole CMS using React JS, Redux, Redux Thunk, Webpack
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Worked with GraphQL and React Apollo Client with Django Graphene
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Experienced in Gulp, Grunt for automating the development workflow
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Experienced in Python 2.7, 3 and worked in Django 1.11.16 and 2.0
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Experienced in Django Rest Framework and Django packaging tools
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Experienced in fixing bugs in Angular js 1.0 as well as in React js
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Experienced in version control using Github, BitBucket
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Worked with team collaboration tool, Slack
                </span>
            </ListItem>
        </>
    )

    const EicraSoftJob = (
        <>
            <ListItem>
                <ListItemText
                    secondary={(
                        <React.Fragment>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faCalendar} />
                            </span>
                            <span className={`mr-2`}>
                                {moment('2016-05-01').format('DD-MM-YYYY')}
                            </span>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                            <span>
                                {moment('2017-10-01').format('DD-MM-YYYY')}
                            </span>
                        </React.Fragment>
                    )}>
                    <strong>
                        Eicra Soft (Web Application Developer) &nbsp;
                    </strong>
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Creating animation and programming in Object Oriented PHP 5.3.x script.
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    HTML, PHP, AJAX, JavaScript and jQuery scripting for the web site, web application
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Understanding of developing Website using Zend Framework, Laravel
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Worked with agile management software, Jira
                </span>
            </ListItem>
        </>
    )

    const Internship = (
        <>
            <ListItem>
                <ListItemText
                    secondary={(
                        <React.Fragment>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faCalendar} />
                            </span>
                            <span className={`mr-2`}>
                                {moment('2016-01-01').format('DD-MM-YYYY')}
                            </span>
                            <span className={`mr-2`}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                            <span>
                                {moment('2016-03-01').format('DD-MM-YYYY')}
                            </span>
                        </React.Fragment>
                    )}>
                    <strong>
                        A.G Technologies (Internship) &nbsp;
                    </strong>
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Participated in the training for Core Java, Collections, JDBC, Threading, Servlets
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Gained experienced on Eclipse Kepler, PostgreSQL and overall Advanced Java J2EE
                </span>
            </ListItem>
            <ListItem>
                <span className={`mr-2`}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                    Attended weekly meetings and presented reports on the Java projects.
                </span>
            </ListItem>
        </>
    )

    const Content = (
        <motion.div
            key={`I am open`}
            variants={drawerVariants}
            initial={`initial`}
            animate={`animate`}
            exit={`exit`}
            style={{
                color: colors[theme].primaryColor,
                backgroundColor: colors[theme].backgroundColor
            }}
            className={`top drawer-container`}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
            <motion.div
                className={`drawer-content`}>
                <List>
                    { PresentJob }
                    <Divider style={{ backgroundColor: colors[theme].secondaryColor }} />
                    { InterconnectionJob }
                    <Divider style={{ backgroundColor: colors[theme].secondaryColor }} />
                    { InterconnectionJuniorJob }
                    <Divider style={{ backgroundColor: colors[theme].secondaryColor }} />
                    { EicraSoftJob }
                    <Divider style={{ backgroundColor: colors[theme].secondaryColor }} />
                    { Internship }
                    <Divider style={{ backgroundColor: colors[theme].secondaryColor }} />
                    <ListItem button className={`d-flex justify-content-center`}>
                        <FontAwesomeIcon icon={faSortUp} />
                    </ListItem>
                </List>
            </motion.div>
        </motion.div>
    )

    const AnimatedContent = (
        <AnimatePresence
            exitBeforeEnter
            initial={false}>
            {show && Content}
        </AnimatePresence>
    )

    return (
        <>
            <div
                style={{ color: colors[theme].primaryColor }}
                className="work-experience-container">
                <Button
                    style={{
                        backgroundColor: colors[theme].backgroundColor,
                        color: colors[theme].primaryColor,
                    }}
                    onClick={toggleDrawer(true)}>
                    { t(`WORK_EXPERIENCE`) }
                </Button>
                {
                    ReactDOM.createPortal(
                        AnimatedContent,
                        drawer
                    )
                }
            </div>
        </>
    )
}