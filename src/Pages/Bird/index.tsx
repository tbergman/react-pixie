import * as React from 'react'
import { motion } from 'framer-motion'

import { Colors } from '../../Constants/Colors'
import { PageTransition } from '../../Constants/PageTransition'
import { AppContext } from '../../AppContext'
import { SettingsContext } from '../../SettingsContext'
import { AnimeThreeJSBird } from '../../Components/Anime/ThreeJS/Pages/Bird'

export const Bird = ({ history, location, match }: any) => {
    const { theme } = React.useContext(AppContext)
    const { setSettings, ...settings }: any = React.useContext(SettingsContext)

    React.useEffect(() => {
        setSettings({
            ...settings,
            settingsList: [
                'rotationX',
                'rotationY',
                'rotationZ',
                'acceleration',
            ]
        })
    }, [])

    return (
        <motion.div
            variants={PageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                height: `100%`,
                // @ts-ignore
                backgroundColor: Colors[theme].backgroundColor
            }}
            className="pages-home-container">
            <div className="row">
                <div className="col p-0">
                    <AnimeThreeJSBird
                        history={history}
                        theme={theme}
                        colors={Colors} />
                </div>
            </div>
        </motion.div>
    )
}

export default Bird