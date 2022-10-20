import React from 'react';


const SearchMenu = [
    { id: 1, title: "진료과", detail: "원하시는 진료과를 선택하시면 소개 및 의료진정보를 보실 수 있습니다.", src: process.env.PUBLIC_URL + "/images/stethoscope_w.png" },
    { id: 2, title: "전문센터", detail: "원하시는 전문센터를 선택하시면 소개 및 의료진정보를 보실 수 있습니다.", src: process.env.PUBLIC_URL + "/images/vaccine_w.png" },
    { id: 3, title: "특수클리닉", detail: "원하시는 특수클리닉을 선택하시면 소개 및 의료진정보를 보실 수 있습니다.", src: process.env.PUBLIC_URL + "/images/tablets_w.png" },
    { id: 4, title: "외래진료안내", detail: "외래진료예약부터 진료절차까지 외래진료의 모든 것을 알려드립니다.", src: process.env.PUBLIC_URL + "/images/medical_w.png" },
]
const Section02 = () => {
    return (
        <section className='check_sec'>
            <div className='container'>
                <h2>진료과/의료진</h2>
                <p className='sub_des'>
                    진료과/의료진을 검색하시면 더욱 쉽고 빠르게 서비스를
                    이용하실 수 있습니다.
                </p>
                <div className='search_box'>
                    <form action='#!'>
                        <input
                            type='text'
                            placeholder='검색하실 진료과/의료진을 입력하세요.'
                            required
                        />
                        <button>
                            <i className='xi-search'></i>
                        </button>
                    </form>
                </div>

                <div className='box_center'>
                    {
                        SearchMenu.map(it => {
                            return (
                                <div className='office'>
                                    <div className='symbol'>
                                        <figure>
                                            <img src={it.src} alt="" />
                                        </figure>
                                    </div>
                                    <h3>{it.title}</h3>
                                    <p>{it.detail}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    );
};

export default Section02;
