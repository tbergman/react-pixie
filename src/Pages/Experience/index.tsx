import * as React from 'react'
import { motion } from 'framer-motion'

import { Colors } from '../../Constants/Colors'
import { PageTransition } from '../../Constants/PageTransition'
import { Styles } from '../../Styles/Pages'
import { AppContext } from '../../AppContext'
import { SettingsContext } from '../../SettingsContext'
import { AnimeThreeJSExperience } from '../../Components/Anime/ThreeJS/Pages/Experience'

export const Experience = ({ history, location, match }: any) => {
    const { theme }: any = React.useContext(AppContext)
    const { setSettings, isPlaying, ...settings }: any = React.useContext(SettingsContext)

    React.useEffect(() => {
        if (!isPlaying) {
            setSettings({
                ...settings,
                isPlaying,
                settingsList: [
                    'rotationX',
                    'rotationY',
                    'rotationZ',
                    'acceleration',
                ]
            })
        }
    }, [isPlaying])

    return (
        <motion.div
            variants={PageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                ...Styles.container,
                // @ts-ignore
                backgroundColor: Colors[theme].backgroundColor
            }}
            className="pages-resume-container">
            <div className="row">
                <div className="col p-0">
                    <AnimeThreeJSExperience
                        history={history}
                        colors={Colors}
                        theme={theme} />
                </div>
            </div>
        </motion.div>
    )
}

export default Experience