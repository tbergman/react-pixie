import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import * as Routes from '../../Constants/Routes'
import { Colors } from '../../Constants/Colors'
import { AppContext } from '../../AppContext'
import { Dog } from '../Dog'

import "./styles.scss"

export const Navigation = ({ history }: any) => {
    const { t, i18n } = useTranslation()
    const { theme }: any = React.useContext(AppContext)

    const list = [
        {
            label: t(`ABOUT_ME`),
            route: Routes.ROOT,
            key: `about-me`
        },
        {
            label: t(`EXPERIENCE`),
            route: Routes.EXPERIENCE,
            key: `experience`
        },
        // {
        //     label: t(`SKYBOX`),
        //     route: Routes.SKYBOX,
        //      key: `skybox`
        // },
        {
            label: t(`RAIN`),
            route: Routes.RAIN,
            key: `rain`
        },
        {
            label: t(`BIRD`),
            route: Routes.BIRD,
            key: `bird`
        },
    ]

    return (
        <React.Fragment>
            <div className="navigation-container">
                <div className="navigation-content">
                    <ul className="navigation-list">
                        {
                            list.map((item, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <NavLink
                                            className={`navigation-item`}
                                            exact
                                            to={item.route}
                                            activeClassName={`active`}
                                            style={{
                                                // @ts-ignore
                                                color: Colors[theme].secondaryColor
                                            }}
                                            activeStyle={{
                                                fontWeight: "bold",
                                                // @ts-ignore
                                                color: Colors[theme].primaryColor
                                            }}>
                                            <span className={`mr-2`}>{ item.label }</span>
                                            <Dog
                                                key={item.key}
                                                width={40}
                                                height={37.3}
                                                colors={Colors}
                                                theme={theme} />
                                        </NavLink>
                                    </React.Fragment>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}