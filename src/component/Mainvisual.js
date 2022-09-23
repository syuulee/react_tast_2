import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


// const SLIDE = [
//     {
//         id: 1, title: "16년 연속 대한민국에서 가장 존경받는 병원", desc: "끊임없는 도전과 열정으로 높은 수준의 진료, 교육, 연구를 성취함으로써 인류의 건강한 삶에 기여하고 있습니다."
//     },

// ]
const MainVisual = () => {
    // const [IDX, setIDX] = useState();
    // useEffect(() => {
    //     setIDX(0)
    // }, []);
    // const mainSlide = useRef(null);
    // const setting = {
    //     arrows: false,
    //     // dots: true,
    //     // afterChange: index => setIDX(index),
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     fade: true,
    // }
    return (
        <section className="MainVisual">
            <div className="bg"></div>
            <div className="container">
                <h2 className="tit">16년 연속 대한민국에서 가장 존경받는 병원</h2>
                <p className="des">끊임없는 도전과 열정으로 높은 수준의 진료, 교육, 연구를 성취함으로써 인류의 건강한 삶에 기여하고 있습니다.</p>
            </div>
            {/* <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                
                            </figure>
                        )
                    })
                }
            </Slider> */}
            <div className="down">
                <div className="scroll">
                    <span className='scr'>scroll</span>
                    <div className="roll">
                        <span>round</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainVisual;