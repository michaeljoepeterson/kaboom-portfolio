'use client';

import { useState } from "react";
import Game from "./game";

export const GameWrapper = () => {
    const [target, setTarget] = useState<any>();

    return (
        <div ref={(ref) => setTarget(ref as HTMLElement)} className="w-full">
            <div className="relative z-20">
                <p className="min-h-[50em]">stuff</p>
                <p className="min-h-[50em]">stuff</p>
                <p>stuff</p>
            </div>
            <Game target={target}/>
        </div>
    )
}

export default GameWrapper;