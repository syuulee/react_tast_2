import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const MSLIDE = [
    {
        id: 1, title: "서울아산병원 5개 임상분야 세계 10위권", des: "서울아산병원은 내분비 분야 세계 3위를 비롯해 비뇨기 4위, 소화기 6위, 암 7위, 신경 9위를 차지하며 세계 정상급 의료기관들과 어깨를 나란히 했습니다.",
    },
    {
        id: 2, title: "국내 최초 CAR-T 다학제 클리닉으로 치료 부작용 조기 발견 및 안전한 치료 프로토콜 확립", des: "서울아산병원 암병원 CAR-T센터는 중환자실, 신경과, 감염내과 등 여러 진료과 의료진들과 협력해 국내 최초로 CAR-T 치료 다학제 클리닉을 만들어 치료 부작용을 조기에 발견하고 안전하게 치료하기 위한 프로토콜을 확립했다",
    },
    { id: 3, title: "고난도 식도암 수술 사망률 0%", des: "고령의 식도암 환자들이 안전하게 수술을 받고 새로운 삶을 살 수 있는 기회를 위해 노력하고 있습니다.", },
    { id: 4, title: "유방암 수술 5년 생존율 95%", des: "서울아산병원은 2021년 국내에서 처음으로 유방암 수술 누적 4만례를 달성하는 등 국내에서 가장 많은 수술 노하우를 가지고 있습니다.", },
    { id: 5, title: "후복막 통한 내시경 및 로봇 부신절제술 1천례 시행", des: "서울아산병원 내분비내과 의료진은 부신절제술을 지속적으로 고도화하며 부신질환 환자들의 건강 회복과 삶의 질 개선을 위해 최선을 다하겠습니다", },
    { id: 6, title: "말기 폐부전 환자의 희망 ‘폐이식’ 200례 달성", des: "폐이식팀의 탄탄한 팀워크와 유기적인 다학제 진료시스템을 바탕으로 더 많은 말기 폐부전 환자들이 새 삶을 누릴 수 있도록 노력하겠습니다.", },
    {
        id: 7, title: "아산융합의학원 썸머스쿨 및 인턴십, 신약개발 동향 공유·인재 양성 코스", des: "본 프로그램을 통해 비단 신약개발 전문가 양성뿐만 아니라, 사·학간 네트워크 강화와 다양한 진료과의 신약개발 노하우를 공유하면서 향후 신약개발에 있어 다양한 연구팀과 진료과가 함께할 수 있는 밑거름이 될 것입니다.",
    },
]

const Section04 = () => {
    const [IND, setIND] = useState();
    useEffect(() => {
        setIND(0)
    }, []);
    const sub_Slide = useRef(null);
    const set = {
        arrows: false,
        // dots: true,
        // afterChange: index => setIND(index),
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    }
    return (
        <section className='slide_part'>
            <Slider {...set} ref={sub_Slide}>
                {
                    MSLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IND ? ' on' : '')}>
                                {/* <div className='bg'></div> */}
                                <div className="container">
                                    <strong className="tit">{slide.title}</strong>
                                    <p className="des">{slide.des}</p>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <ul className="dots">
                {
                    MSLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IND ? ' on' : ''} onClick={() => sub_Slide.current.slickGoTo(idx)}>{dots.title}</li>
                        )
                    })
                }
            </ul>
            <div className="arrows">
                <i className="xi-angle-left" onClick={() => sub_Slide.current.slickPrev()}></i>
                <i className="xi-angle-right" onClick={() => sub_Slide.current.slickNext()}></i>
            </div>
        </section >
    )
}

export default Section04;