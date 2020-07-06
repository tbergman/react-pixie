import * as React from 'react'
import * as THREE from 'three'
import get from 'lodash/get'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import * as Routes from '../../../../Constants/Routes'

export const AnimeThreeJSError = ({
    colors,
    theme,
    history,
    acceleration = 0.002
}: any) => {
    /* Colors */
    const COLORS = {
        primaryColor: new THREE.Color(colors[theme].primaryColor),
        backgroundColor: new THREE.Color(colors[theme].backgroundColor),
        secondaryColor: new THREE.Color(colors[theme].secondaryColor),
        infoColor: new THREE.Color(colors[theme].infoColor),
        dangerColor: new THREE.Color(colors[theme].dangerColor),
        warningColor: new THREE.Color(colors[theme].warningColor),
        successColor: new THREE.Color(colors[theme].successColor),
    }

    /* Renderer */
    const renderer = React.useRef(new THREE.WebGLRenderer({
        antialias: true
    })).current

    /* Scene */
    const scene = React.useRef(new THREE.Scene()).current

    /* Camera */
    const camera = React.useRef({
        perspective: new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000
        ),
    }).current

    /* Light */
    const light = React.useRef({
        ambient: new THREE.AmbientLight(COLORS.primaryColor, 1),
        point: new THREE.PointLight(COLORS.primaryColor, 10, 5000, 500),
        spot: new THREE.SpotLight(COLORS.primaryColor, 1),
    }).current

    /* Geometry */
    const geometry = React.useRef({
        stars: new THREE.Geometry(),
    }).current

    /* Helper */
    const helper = React.useRef({
        light: {
            point: new THREE.PointLightHelper(
                light.point,
                1
            )
        }
    }).current

    /* Loader */
    const loader = React.useRef({
        gltf: new GLTFLoader(),
        texture: new THREE.TextureLoader()
    }).current


    /* Control */
    const control = React.useRef({
        orbit: new OrbitControls(camera.perspective, renderer.domElement),
    }).current

    /* Load Texture */
    const onSuccessLoadTexture = (texture: any) => {
        for (let i = 0; i < 6000; i++) {
            let star: any = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            )
            star.velocity = 0
            geometry.stars.vertices.push(star)
        }
        let starMaterial = new THREE.PointsMaterial({
            color: COLORS.primaryColor,
            size: 0.5,
            map: texture,
            transparent: true
        })
        scene.add(new THREE.Points(geometry.stars, starMaterial))
    }

    /* Load Background GLTF */
    // const onSuccessLoadGLTF = (gltfImage: any) => {
    //     let gltfMesh = get(gltfImage, 'scene', {})
    //     gltfMesh.position.set(0, 0, 0)
    //     gltfMesh.scale.set(1, 1, 1)
    //     scene.add(gltfMesh)
    //     control.orbit.update()
    // }

    /* Animation */
    const animate = () => {
        /* Stars Animation */
        geometry.stars.vertices.forEach((star: any, index) => {
            star.velocity += acceleration
            star.z += star.velocity

            if (star.z > 200) {
                star.z = -200
                star.velocity = 0
            }
        })

        geometry.stars.verticesNeedUpdate = true
        renderer.render(scene, camera.perspective)
        control.orbit.update()
        requestAnimationFrame(animate)
    }

    /* On Window Resize */
    const onWindowResize = () => {
        /* Renderer Settings */
        renderer.setSize(window.innerWidth, window.innerHeight)
        /* Camera Settings */
        camera.perspective.aspect = window.innerWidth / window.innerHeight
        camera.perspective.updateProjectionMatrix();
        /* Orbit Settings */
        control.orbit.update()
    }

    /* Lifecycle */
    React.useEffect(() => {
        /* Renderer Settings */
        renderer.setClearColor(COLORS.backgroundColor)
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio || 1)
        renderer.shadowMap.enabled = true

        /* Camera Settings */
        camera.perspective.position.set(0, 0, 5)
        camera.perspective.lookAt(0, 0, 0)

        /* Light Settings */
        light.ambient.position.set(0, 0, 0)
        light.point.position.set(0, 0, 0)
        light.spot.position.set(0, 0, 0)

        /* Scene Settings */
        scene.add(camera.perspective)
        scene.add(light.point)
        scene.add(light.ambient)
        scene.add(light.spot)

        /* Orbit Controls */
        control.orbit.keys = {
            RIGHT: 37, //left arrow
            BOTTOM: 38, // up arrow
            LEFT: 39, // right arrow
            UP: 40 // down arrow
        }
        control.orbit.minDistance = 0
        control.orbit.maxDistance = 200
        control.orbit.update()

        /* Load Texture */
        loader.texture.load('Circle/circle.png', onSuccessLoadTexture)

        /* Start Animation */
        requestAnimationFrame(animate)
    }, [])

    React.useEffect(() => {
        /* Renderer Settings */
        renderer.setClearColor(COLORS.backgroundColor)

        /* Control Settings */
        control.orbit.update()

        /* Events */
        window.addEventListener('resize', onWindowResize)

        return () => {
            window.removeEventListener('resize', onWindowResize)
        }
    }, [theme])

    /* Append Child */
    const setElement = React.useCallback((element: any) => {
        if (element) element.firstElementChild && element.removeChild(element.firstElementChild)
        element && element.appendChild(renderer.domElement)
    }, [theme])

    return (
        <div ref={setElement}></div>
    )
}