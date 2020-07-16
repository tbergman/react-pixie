import * as React from 'react'
import { motion } from 'framer-motion'

import { Colors } from '../../Constants/Colors'
import { PageTransition } from '../../Constants/PageTransition'
import { AppContext } from '../../AppContext'
import { AnimeThreeJSSkybox } from '../../Components/Anime/ThreeJS/Pages/Skybox'

export const Resume = ({ history, location, match }: any) => {
    const { theme }: any = React.useContext(AppContext)

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
            className="pages-resume-container">
            <div className="row">
                <div className="col p-0">
                    <AnimeThreeJSSkybox
                        history={history}
                        colors={Colors}
                        theme={theme} />
                </div>
            </div>
        </motion.div>
    )
}

export default Resume