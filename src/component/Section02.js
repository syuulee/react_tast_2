import React from 'react'

const Section02 = () => {
    return (
        <section className='check_sec'>
            <div className="container">
                <h2>진료과/의료진</h2>
                <p>진료과/의료진을 검색하시면 더욱 쉽고 빠르게 서비스를 이용하실 수 있습니다.</p>
                <input type="검색하실 진료과/의료진 명을 입력하세요." />
                <div className="box_center">
                    <div className="office">
                        <div className="symbol">
                            <figure>
                                <img src={process.env.PUBLIC_URL + '/images/stethoscope.png'} alt="" />
                            </figure>
                        </div>
                        <h3>진료과</h3>
                        <p>원하시는 진료과를 선택하시면 <br />소개 및 의료진정보를 보실 수 있습니다.</p>
                    </div>
                    <div className="center">
                        <div className="symbol">
                            <figure>
                                <img src={process.env.PUBLIC_URL + '/images/microscope.png'} alt="" />
                            </figure>
                        </div>
                        <h3>전문센터</h3>
                        <p>원하시는 전문센터를 선택하시면 <br />소개 및 의요진정보를 보실 수 있습니다.</p>
                    </div>
                    <div className="special">
                        <div className="symbol">
                            <figure>
                                <img src={process.env.PUBLIC_URL + '/images/tablets.png'} alt="" />
                            </figure>
                        </div>
                        <h3>특수클리닉</h3>
                        <p>원하시는 특수클리닉을 선택하시면<br /> 소개 및 의료진정보를 보실 수 있습니다.</p>
                    </div>
                    <div className="guide">
                        <div className="symbol">
                            <figure>
                                <img src={process.env.PUBLIC_URL + '/images/medical.png'} alt="" />
                            </figure>
                        </div>
                        <h3>외래진료안내</h3>
                        <p>외래진료예약부터 진료절차까지 <br />외래진료의 모든 것을 알려드립니다.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section02;