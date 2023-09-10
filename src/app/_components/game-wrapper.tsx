'use client';

import kaboom from "kaboom";
import { useEffect } from "react";

export const GameWrapper = () => {

    useEffect(() => {
        const k = kaboom();

        k.add([
            k.text("hello"),
            k.pos(120, 80),
        ]);
    }, []);

    return (
        <>
            Game Wrapper
        </>
    )
}

export default GameWrapper;