import * as React from 'react'
import * as THREE from 'three'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

import { Colors } from '../../../../Constants/Colors'
import { AppContext } from '../../../../AppContext'
import { MusicContext } from '../../../../MusicContext'
import { ButtonRadial } from '../../../Button/Radial'

import "./styles.scss"

const AUDIO_NOT_PLAYING = 'not-playing'
const AUDIO_PLAYING = 'playing'
const AUDIO_PAUSE = 'pause'

const buttonVariants = {
    initial: {
        x: 300,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.1
        }
    },
    exit: {
        opacity: 0,
        x: 300,
        duration: 0.1
    }
}

export const AudioPlayer = ({ }: any) => {
    const { theme }: any = React.useContext(AppContext)
    const { setMusicSettings, ...otherSettingsProps }: any = React.useContext(MusicContext)
    const [ playAudio, setPlayAudio ] = React.useState(AUDIO_NOT_PLAYING)
    const [ loaded, setLoaded ]: any = React.useState(0)
    let analyser: any = React.useRef().current
    let animationFrame: any = React.useRef().current

    const listener = React.useRef(new THREE.AudioListener()).current
    const sound = React.useRef(new THREE.Audio(listener)).current
    const loader = React.useRef(new THREE.AudioLoader()).current

    const animate = () => {
        if (sound.isPlaying) {
            const frequency = analyser.getAverageFrequency()
            setMusicSettings({
                ...otherSettingsProps,
                frequency,
                isPlaying: true
            })
            animationFrame = requestAnimationFrame(animate)
        }

        if (!sound.isPlaying) {
            cancelAnimationFrame(animationFrame)
            setMusicSettings({
                ...otherSettingsProps,
                isPlaying: false
            })
        }
    }

    const play = React.useCallback(() => {
        const onProgressLoad = (response: any) => {
            setLoaded((response.loaded / response.total) * 100)
        }

        const onSuccessLoad = (buffer: any) => {
            sound.setBuffer(buffer)
            sound.setLoop(true)
            sound.setVolume(0.5)
            sound.play()
            analyser = new THREE.AudioAnalyser(sound, 32)
            setPlayAudio(AUDIO_PLAYING)
            requestAnimationFrame(animate)
        }
        loader.load('/Audio/sample.mp3', onSuccessLoad, onProgressLoad)
    }, [playAudio])

    const pause = React.useCallback(() => {
        setPlayAudio(AUDIO_PAUSE)
        sound.pause()
    }, [playAudio])

    const resume = React.useCallback(() => {
        setPlayAudio(AUDIO_PLAYING)
        analyser = new THREE.AudioAnalyser(sound, 32)
        requestAnimationFrame(animate)
        sound.play()
    }, [playAudio])

    const stop = React.useCallback(() => {
        setPlayAudio(AUDIO_NOT_PLAYING)
        sound.stop()
    }, [playAudio])

    const PlayButton = (
        <>
            {
                playAudio == AUDIO_NOT_PLAYING && (
                    <ButtonRadial
                        variants={buttonVariants}
                        initial={`initial`}
                        animate={`animate`}
                        exit={`exit`}
                        key={`play-audio`}
                        style={{
                            // @ts-ignore
                            backgroundColor: Colors[theme].backgroundColor,
                            // @ts-ignore
                            color: Colors[theme].secondaryColor,
                            // @ts-ignore
                            border: `1px solid ${Colors[theme].backgroundColor}`
                        }}
                        onClick={() => play()}>
                        <FontAwesomeIcon icon={faMusic} />
                    </ButtonRadial>
                )
            }
        </>
    )

    const PauseButton = (
        <>
            {
                (playAudio == AUDIO_PLAYING) && (
                    <ButtonRadial
                        variants={buttonVariants}
                        initial={`initial`}
                        animate={`animate`}
                        exit={`exit`}
                        key={`pause-audio`}
                        style={{
                            // @ts-ignore
                            backgroundColor: Colors[theme].backgroundColor,
                            // @ts-ignore
                            color: Colors[theme].secondaryColor,
                            // @ts-ignore
                            border: `1px solid ${Colors[theme].backgroundColor}`
                        }}
                        onClick={() => pause()}>
                        <FontAwesomeIcon icon={faPause} />
                    </ButtonRadial>
                )
            }
        </>
    )

    const ResumeButton = (
        <>
            {
                (playAudio == AUDIO_PAUSE) && (
                    <ButtonRadial
                        variants={buttonVariants}
                        initial={`initial`}
                        animate={`animate`}
                        exit={`exit`}
                        key={`resume-audio`}
                        style={{
                            // @ts-ignore
                            backgroundColor: Colors[theme].backgroundColor,
                            // @ts-ignore
                            color: Colors[theme].secondaryColor,
                            // @ts-ignore
                            border: `1px solid ${Colors[theme].backgroundColor}`
                        }}
                        onClick={() => resume()}>
                        <FontAwesomeIcon icon={faPlay} />
                    </ButtonRadial>
                )
            }
        </>
    )

    const StopButton = (
        <>
            {
                (playAudio == AUDIO_PLAYING || playAudio == AUDIO_PAUSE) && (
                    <ButtonRadial
                        variants={buttonVariants}
                        initial={`initial`}
                        animate={`animate`}
                        exit={`exit`}
                        key={`stop-audio`}
                        style={{
                            // @ts-ignore
                            backgroundColor: Colors[theme].backgroundColor,
                            // @ts-ignore
                            color: Colors[theme].secondaryColor,
                            // @ts-ignore
                            border: `1px solid ${Colors[theme].backgroundColor}`
                        }}
                        onClick={() => stop()}>
                        <FontAwesomeIcon icon={faStop} />
                    </ButtonRadial>
                )
            }
        </>
    )

    const Loading = (
        <>
            {
                loaded !== 0 && loaded !== 100 && (
                    <ButtonRadial
                        variants={buttonVariants}
                        initial={`initial`}
                        animate={`animate`}
                        exit={`exit`}
                        key={`loaded-audio`}
                        style={{
                            // @ts-ignore
                            backgroundColor: Colors[theme].backgroundColor,
                            // @ts-ignore
                            color: Colors[theme].secondaryColor,
                            // @ts-ignore
                            border: `1px solid ${Colors[theme].backgroundColor}`
                        }}>
                        { parseInt(loaded, 10) }%
                        <div
                            style={{
                                // @ts-ignore
                                backgroundColor: Colors[theme].primaryColor,
                                width: `${(parseInt(loaded, 10) / 100) * 40}px`
                            }}
                            className={`loader-progress`}>
                        </div>
                    </ButtonRadial>
                )
            }
        </>
    )

    return (
        <>
            <motion.div className={`audio-player-container`}>
                { Loading }
                { PlayButton }
                { PauseButton }
                { ResumeButton }
                { StopButton }
            </motion.div>
        </>
    )
}