'use client';

import { getEventListeners } from "events";
import kaboom from "kaboom";
import { useEffect, useRef, useState } from "react";

export const Game = ({
    target
}: {
    target: HTMLElement;
}) => {

    const [canvas, setCanvas] = useState<any>();
    const [hasAddedListener, setHasAddedListener] = useState<boolean>();
    const [kaboomInstance, setKaboomInstance] = useState<any>();

    useEffect(() => {
        // @ts-ignore
        HTMLCanvasElement.prototype.realAddEventListener = HTMLCanvasElement.prototype.addEventListener;
        // @ts-ignore
        HTMLCanvasElement.prototype.addEventListener = function(name,b,c){
            if(name === 'wheel'){
                return;
            }
            // @ts-ignore
            this.realAddEventListener(name,b,c);
            console.log('added event listener', name);
        };
        setHasAddedListener(true);
    }, [])

    useEffect(() => {
        if(target && canvas && hasAddedListener){
            const k = kaboom({
                root: target,
                canvas
            });
    
            k.add([
                k.text("hello"),
                k.pos(120, 80),
            ]);

            const scrollEvent = k.onScroll((e) => console.log('scroll', e));
            scrollEvent.cancel();
            setKaboomInstance(k);
            console.log(scrollEvent);
        }
    }, [target, canvas, hasAddedListener]);

    useEffect(() => {
        if(kaboomInstance && canvas){


        }
    }, [canvas, kaboomInstance])

    return (
        <>
            Game
            <canvas className="fixed top-0" ref={(ref) => setCanvas(ref as HTMLElement)} id="game-canvas"/>
        </>
    )
}

export default Game;