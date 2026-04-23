import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBG() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setReady(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: 0,
            },
            background: {
                color: {
                    value: "#050816",
                },
            },
            fpsLimit: 60,
            detectRetina: true,
            interactivity: {
                // events: {
                //     onHover: {
                //         enable: true,
                //         mode: "grab",
                //     },
                //     onClick: {
                //         enable: true,
                //         mode: "push",
                //     },
                //     resize: {
                //         enable: true,
                //     },
                // },
                modes: {
                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.45,
                        },
                    },
                    push: {
                        quantity: 4,
                    },
                },
            },
            particles: {
                number: {
                    value: 90,
                    density: {
                        enable: true,
                        area: 800,
                    },
                },
                color: {
                    value: ["#00f5ff", "#00ffb3", "#7c3aed"],
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: "#00f5ff",
                    opacity: 0.18,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 0.45,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out",
                    },
                },
                opacity: {
                    value: { min: 0.25, max: 0.75 },
                    animation: {
                        enable: true,
                        speed: 0.3,
                        sync: false,
                    },
                },
                size: {
                    value: { min: 1, max: 2.2 },
                    animation: {
                        enable: true,
                        speed: 0.4,
                        sync: false,
                    },
                },
                shape: {
                    type: "circle",
                },
            },
        }),
        []
    );

    if (!ready) return null;

    return <Particles id="tsparticles" options={options} />;
}