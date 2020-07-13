import React, { useState, useEffect, useRef } from 'react';
import { connect, styled } from 'frontity';

const Sticky = () => {

    const [height, setHeight] = useState(0);

    const ref = useRef();

    useEffect(() => {
        setHeight(ref.current.getBoundingClientRect().height);
    }, []);

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    });

    return (
        <Container className={scrollTop > height ? 'sticky' : null}>
            <div ref={ref} className='header-top'>
            </div>
        </Container>
    );
};

export default connect(Sticky);

const Container = styled.div`
    top: 0;
    position: relative;
    overflow: hidden;

    & img {
        padding: 1em;
    }

    &.sticky {
        position: sticky
    }

    & .header-sticky {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: .5;
        transform: translateY(-100%);
        background: #fff;
    }

    &.sticky .header-sticky {
        opacity: 1;
        transform: translateY(0);
        transition: .35s ease-out;
    }
`;