import React from "react";
import { Location } from 'history';
import { AboutRoute } from "../components/about/about";
import { GalleryRoute } from "../components/gallery/gallery";

export function GetResponsiveColsNumber(containerWidth: number) {
    let columns = 1;
    if (containerWidth >= 720) columns = 2;
    if (containerWidth >= 1080) columns = 3;
    if (containerWidth >= 1360) columns = 4;
    return columns;
}

export function FooterOnLocationChange(location: Location, ref: React.MutableRefObject<HTMLElement | undefined | null>){
    if (ref.current){
        if (location.pathname === AboutRoute || location.pathname === GalleryRoute) {
            ref.current.style.position = 'relative'
        } else {
            ref.current.style.position = 'fixed'
        }
    }
}