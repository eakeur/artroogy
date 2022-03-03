import React, { useEffect, useState } from "react";
import "./scrollpos.css"

export function ScrollPos(props: React.PropsWithChildren<ScrollPosProp>){
    const [coordinates, setCoordinates] = useState<ScrollPosCoordinates>({
        distanceToWalkPerScrollUnit: window.innerWidth / calculateMaximumScrollY(),
        actualElementPosition: props.positionToStart,
        lastElementPosition: props.positionToStart,
        actualScrollPosition: window.scrollY,
        lastScrollPosition: window.scrollY,
        maximumScroll: calculateMaximumScrollY(),
        startingPosition: props.positionToStart,
        styleOutput: props.positionToStart.toString() + 'px'
    })

    const [scroll, setScroll] = useState(window.scrollY)
    window.addEventListener('scroll', (ev: Event) => setScroll(window.scrollY))

    useEffect(() => {
        setCoordinates(updateCoordinates(coordinates))
    }, [scroll])


    return (
        <span className='scrollpos' style={{left: coordinates.styleOutput, width: coordinates.styleOutput}}>
            {props.children}
        </span>
    )
}

function updateCoordinates(c: ScrollPosCoordinates): ScrollPosCoordinates {
    let scrollUnitsWalked = 0
    let nextElementPos = 0
    c.actualScrollPosition = window.scrollY
    if (c.actualScrollPosition === 0){
        nextElementPos = Math.round(c.startingPosition)
    }
    if (c.actualScrollPosition === c.maximumScroll){
        nextElementPos = c.maximumScroll * c.distanceToWalkPerScrollUnit
    }
    if (c.lastScrollPosition <= c.actualScrollPosition){
        scrollUnitsWalked = c.actualScrollPosition - c.lastScrollPosition
        nextElementPos = c.actualElementPosition + (c.distanceToWalkPerScrollUnit * scrollUnitsWalked)
    } else {
        scrollUnitsWalked = c.lastScrollPosition - c.actualScrollPosition
        nextElementPos = c.actualElementPosition - (c.distanceToWalkPerScrollUnit * scrollUnitsWalked)
    }
    c.actualElementPosition = nextElementPos
    c.styleOutput = c.actualElementPosition.toString() + 'px'
    //saving next state
    c.lastElementPosition = c.actualElementPosition
    c.lastScrollPosition = window.scrollY
    return c
}

function calculateMaximumScrollY(): number{
    return Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
}

interface ScrollPosProp {
    styleChanger(): void
    positionToStart: number
}

interface ScrollPosCoordinates {
    distanceToWalkPerScrollUnit: number
    actualElementPosition: number
    lastElementPosition: number
    actualScrollPosition: number
    lastScrollPosition: number
    maximumScroll: number
    startingPosition: number
    styleOutput: string
}