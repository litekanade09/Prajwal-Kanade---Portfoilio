'use client';

import React, { useRef } from 'react';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Roles for typewriter effect
const ROLES = ['FULL-STACK', 'FRONTEND', 'BACKEND'];

const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLSpanElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);

    /* ---------------- Scroll Animation ---------------- */
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0, opacity: 1 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    /* ---------------- Typewriter Animation ---------------- */
    useGSAP(
        () => {
            if (!titleRef.current || !cursorRef.current) return;

            const masterTl = gsap.timeline({
                repeat: -1,
                repeatDelay: 0.6,
            });

            gsap.to(cursorRef.current, {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
                ease: 'none',
            });

            ROLES.forEach((role) => {
                masterTl.to(titleRef.current, {
                    text: role,
                    duration: role.length * 0.14 + 0.2,
                    ease: 'none',
                });

                masterTl.to({}, { duration: 1.25 });

                masterTl.to(titleRef.current, {
                    text: '',
                    duration: role.length * 0.09 + 0.1,
                    ease: 'none',
                });

                masterTl.to({}, { duration: 0.6 });
            });

            return () => {
                masterTl.kill();
            };
        },
        { scope: titleRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />

            <div
                ref={containerRef}
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
            >
                {/* Left Content */}
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">
                            <span ref={titleRef}></span>
                            <span
                                ref={cursorRef}
                                className="ml-1 inline-block w-[2px] h-[0.9em] bg-primary align-[-0.1em]"
                            ></span>
                        </span>
                        <br />
                        <span className="ml-4">DEVELOPER</span>
                    </h1>

                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Prajwal Kanade,
                        </span>{' '}
                        a creative Full-Stack Developer specializing in building
                        scalable, secure, and highly responsive web applications.
                        I bridge robust backend architecture with exceptional UI/UX,
                        optimizing performance and reducing API latency across projects.
                    </p>

                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/prajwal-kanade-a4528b27b/"
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Connect with Me
                    </Button>
                </div>

                {/* Right Stats */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1000+
                        </h5>
                        <p className="text-muted-foreground">
                            Contributions on GitHub
                        </p>
                    </div>

                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>

                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            2+
                        </h5>
                        <p className="text-muted-foreground">
                            Cracked Internships
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
