import React from "react";

const PressedSpotlight = 'transparent 130px, rgba(0, 0, 0, 1) 150px)';
const MovingSpotlight = 'transparent 160px, rgba(0, 0, 0, 1) 200px)';
var ActualSpotlight = MovingSpotlight;


export function useSpotlight(ref: React.MutableRefObject<HTMLElement | undefined | null>): () => void {
    return () => {
        if (ref.current){
            const element = ref.current
            style(element)
            const initializeMouseListener = function (e: Event) {
                listenToMouse(element)
                window.removeEventListener('mouseover', initializeMouseListener)
            }

            const initializeTouchListener = function(e: Event) {
                listenToTouch(element)
                window.removeEventListener('touchstart', initializeMouseListener)
            }

            window.addEventListener('mouseover', initializeMouseListener)
            window.addEventListener('touchstart', initializeTouchListener)
        }
    }
}

function listenToMouse(element: HTMLElement){
    window.addEventListener('mousemove', e => interact(e, element));
    window.addEventListener('mousedown', e => interact(e, element, PressedSpotlight));
    window.addEventListener('mouseup', e => interact(e, element, MovingSpotlight));
}

function listenToTouch(element: HTMLElement){
    window.addEventListener('touchmove', e => interact(e, element, MovingSpotlight))
}

function interact(ev: TouchEvent | MouseEvent, element: HTMLElement, effect?: string) {
    const [x, y] = offset(ev)
    const spotlight = createSpotlight(x, y, effect ?? ActualSpotlight)
    if (effect){
        ActualSpotlight = effect;
    }
    render(element as HTMLElement, spotlight)
}

function createSpotlight(x: number, y: number, effect: string): Spotlight {
    return {
        x: x / window.innerWidth * 100, 
        y: y / window.innerHeight * 100,
        effect: effect,
    }
}

function style(element: HTMLElement){
    element.style.backgroundImage = 'radial-gradient(circle, black 160px, black 200px)'
}

function render(element: HTMLElement, spotlight: Spotlight) {
    element.style.backgroundImage = `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, ${spotlight.effect}`
}

function offset(ev: MouseEvent | TouchEvent): number[] {
    if (ev instanceof(TouchEvent)){
        return touchOffset(ev)
    } else {
        return mouseOffset(ev)
    }
}

function mouseOffset(ev: MouseEvent): number[] {
    return [ ev.pageX, ev.pageY];
}

function touchOffset(ev: TouchEvent): number[] {
    if (ev.targetTouches.length > 0) {
        const touch = ev.targetTouches[0]
        return [ touch.pageX, touch.pageY]
    }
    return [0, 0]
}

interface Spotlight {
    x: number,
    y: number,
    effect: string,
}