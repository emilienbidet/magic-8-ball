import { useEffect, useState } from "preact/hooks";

interface DeviceMotionEventiOS extends DeviceMotionEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>;
}

export function usePermission() {
    const [isPermissionAsked, setIsPermissionAsked] = useState(false);
    const [isIOs, setIsIOs] = useState(false);

    useEffect(() => {
        setIsIOs(typeof (DeviceMotionEvent as unknown as DeviceMotionEventiOS).requestPermission === 'function');
    }, []);


    const askPermission = () => {
        if (isPermissionAsked) return;
        if (isIOs) {
            // iOS 13+
            (DeviceMotionEvent as unknown as DeviceMotionEventiOS).requestPermission()
                .then(() => {
                    setIsPermissionAsked(true);
                }).catch(console.error);
        } else {
            setIsPermissionAsked(true);
        }
    }

    return {
        needsPermission: isIOs && !isPermissionAsked,
        askPermission,
        skip: () => setIsPermissionAsked(true),
    }
}