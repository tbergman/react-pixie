import * as React from 'react'
import { useFrame } from 'react-three-fiber'
import { GodRaysFakeSunShader } from 'three/examples/jsm/shaders/GodRaysShader'

import { Glitch } from '../Glitch'

export const Box = ({ colors, history, wireframe = false, redirectURL, rotationX, rotationY, rotationZ, frequency, ...props }: any) => {
    const mesh: any = React.useRef()
    const [hovered, setHover] = React.useState(false)
    const [active, setActive] = React.useState(false)

    useFrame(() => {
        if (hovered && !active) {
            setActive(true)
        }
        if (hovered && active) {}
        mesh.current.rotation.x += rotationX * 0.001
        mesh.current.rotation.y += rotationY * 0.001
        mesh.current.rotation.z += rotationZ * 0.001
    })

    const frequencyParams = frequency == 1 || frequency == 0 ? 1 : (frequency * 0.01)

    return (
        <group>
            <mesh
                ref={mesh}
                scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
                onClick={(event) => {
                    setActive(!active)
                    history.push(redirectURL)
                }}
                receiveShadow={true}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                {...props}>
                <>
                    {
                        hovered ? (
                            <>
                                <sphereGeometry
                                    attach={`geometry`}
                                    args={[
                                        5 * frequencyParams,
                                        32 * frequencyParams,
                                        32 * frequencyParams,
                                    ]} />
                                <meshBasicMaterial
                                    attach={'material'}
                                    color={colors.primaryColor}
                                    wireframe={wireframe} />
                                <Glitch />
                            </>
                        ) : (
                                <>
                                    <boxGeometry
                                        attach={`geometry`}
                                        args={[
                                            5 * frequencyParams,
                                            5 * frequencyParams,
                                            5 * frequencyParams]
                                        }/>
                                    <meshLambertMaterial
                                        wireframe={wireframe}
                                        attach={'material'}
                                        color={colors.primaryColor} />
                                </>
                            )
                    }
                </>
            </mesh>
        </group>
    )
}
