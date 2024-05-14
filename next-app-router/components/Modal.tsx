"use client";

import { MouseEventHandler, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Modal ({children}:
    {children: React.ReactNode}
) {
    const router = useRouter();

    const goBack = useCallback(() => {
        router.back();
    }, [router]);

    const onEscPress = useCallback((evt: KeyboardEvent) => {
        if( evt.key === "Escape" ) {
            goBack();
        }
    }, [goBack])

    useEffect(() => {
        document.addEventListener("keydown", onEscPress);
        return () => document.removeEventListener("keydown", onEscPress);
      }, [onEscPress]);

    const stopPropagation: MouseEventHandler = (evt) => {
        evt.stopPropagation();
    }

    return <div className="modal-background" onClick={goBack}>
        <div className="modal-wrapper" onClick={stopPropagation}>
            {children}
        </div>
    </div>
}