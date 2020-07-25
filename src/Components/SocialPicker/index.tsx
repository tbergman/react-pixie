import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWeebly, faReadme } from "@fortawesome/free-brands-svg-icons"

import { DARK, LIGHT } from 'Constants/Settings'
import { Drawer } from 'Components/Drawer'
import './styles.scss'

const drawerVariants = {
    initial: {
        opacity: 0,
        y: 9999
    },
    animate: {
        opacity: 0.9,
        y: 0,
        transition: {
            duration: 0.4
        }
    },
    exit: {
        y: 9999,
        opacity: 0
    }
}

export const SocialPicker = ({ colors, theme }: any) => {
    return (
        <>
            <div className="social-picker-container">
                <div className="social-picker-content">
                    <Drawer
                        colors={colors}
                        theme={theme}
                        drawerVariants={drawerVariants}
                        hotKeyHandler={`TOGGLE_GITHUB`}
                        direction={`bottom`}
                        allowSortUp={false}
                        buttonShape={`round`}
                        buttonDisplay={(
                            <FontAwesomeIcon icon={faGithub} />
                        )}>
                        {
                            ({ toggleDrawer }: any) => {
                                return (
                                    <a
                                        style={{
                                            color: colors[theme].primaryColor
                                        }}
                                        href="https://github.com/mp5maker"
                                        target="_blank">
                                        {
                                            theme == LIGHT && (
                                                <img
                                                    style={{
                                                        width: `100%`,
                                                        maxWidth: `1900px`,
                                                    }}
                                                    src="/Socials/github-light.png" />
                                            )
                                        }
                                        {
                                            theme == DARK && (
                                                <img
                                                    style={{
                                                        width: `100%`,
                                                        maxWidth: `1900px`,
                                                    }}
                                                    src="/Socials/github-dark.png" />
                                            )
                                        }
                                    </a>
                                )
                            }
                        }
                    </Drawer>
                    <Drawer
                        colors={colors}
                        theme={theme}
                        drawerVariants={drawerVariants}
                        hotKeyHandler={`TOGGLE_LINKEDIN`}
                        direction={`bottom`}
                        allowSortUp={false}
                        buttonShape={`round`}
                        buttonDisplay={(
                            <FontAwesomeIcon icon={faLinkedin} />
                        )}>
                        {
                            ({ toggleDrawer }: any) => {
                                return (
                                    <a
                                        style={{
                                            color: colors[theme].primaryColor
                                        }}
                                        href="https://www.linkedin.com/in/shabuktaginkhan/"
                                        target="_blank">
                                        {
                                            theme == LIGHT && (
                                                <img
                                                    style={{
                                                        width: `100%`,
                                                        maxWidth: `740px`,
                                                    }}
                                                    src="/Socials/linked-light.png" />
                                            )
                                        }
                                        {
                                            theme == DARK && (
                                                <img
                                                    style={{
                                                        width: `100%`,
                                                        maxWidth: `740px`,
                                                    }}
                                                    src="/Socials/linked-dark.png" />
                                            )
                                        }
                                    </a>
                                )
                            }
                        }
                    </Drawer>
                </div>
                <div className="social-picker-content mt-3">
                    <Drawer
                        colors={colors}
                        theme={theme}
                        drawerVariants={drawerVariants}
                        hotKeyHandler={`TOGGLE_WEEBLY`}
                        direction={`bottom`}
                        buttonShape={`round`}
                        allowSortUp={false}
                        buttonDisplay={(
                            <FontAwesomeIcon icon={faWeebly} />
                        )}>
                        {
                            ({ toggleDrawer }: any) => {
                                return (
                                    <a
                                        style={{
                                            color: colors[theme].primaryColor
                                        }}
                                        href="https://photonkhan.weebly.com/"
                                        target="_blank">
                                        <iframe
                                            style={{
                                                height: `calc(100vh - 200px)`,
                                                width: `100%`
                                            }}
                                            src={`https://photonkhan.weebly.com/`} />
                                    </a>
                                )
                            }
                        }
                    </Drawer>
                    <Drawer
                        colors={colors}
                        theme={theme}
                        drawerVariants={drawerVariants}
                        direction={`bottom`}
                        buttonShape={`round`}
                        allowSortUp={false}
                        hotKeyHandler={`TOGGLE_RESUME`}
                        buttonDisplay={(
                            <FontAwesomeIcon icon={faReadme} />
                        )}>
                        {
                            ({ toggleDrawer }: any) => {
                                return (
                                    <React.Fragment>
                                        <div className={`text-center`}>
                                            {
                                                theme == LIGHT && (
                                                    <img
                                                        style={{
                                                            width: `100%`,
                                                            maxWidth: `825px`,
                                                        }}
                                                        src="/Resume/resume-light.png" />
                                                )
                                            }
                                            {
                                                theme == DARK && (
                                                    <img
                                                        style={{
                                                            width: `100%`,
                                                            maxWidth: `825px`,
                                                        }}
                                                        src="/Resume/resume-dark.png" />
                                                )
                                            }
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        }
                    </Drawer>
                </div>
            </div>
        </>
    )
}