import React from 'react';

const DetailHospital = () => {
    return (
        <section className='total_sevice'>
            <div className='container'>
                <div className='top'>
                    <div className='reservation'>
                        <figure>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/images/callcenter.png'
                                }
                                alt=''
                            />
                        </figure>
                        <div className='main_tit'>
                            처음 오시는 분 예약상담신청
                        </div>
                        <p className='two short'>
                            전문상담사가 빠른 예약을 도와드립니다.
                        </p>
                        <div className='look'>
                            <div className='look_box'>
                                <div className='wirte_name'>
                                    <form action='#!'>
                                        <input
                                            type='text'
                                            placeholder='성함'
                                            required
                                        />
                                    </form>
                                </div>
                                <div className='wirte_num'>
                                    <form action='#!'>
                                        <input
                                            type='text'
                                            placeholder='연락처'
                                            required
                                        />
                                    </form>
                                </div>
                            </div>
                            <button>예약신청</button>
                        </div>
                    </div>
                    <div className='online'>
                        <figure>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/images/monitor.png'
                                }
                                alt=''
                            />
                        </figure>
                        <div className='main_tit'>온라인 진료예약/확인</div>
                        <p className='two'>
                            온라인으로 쉽고 빠르게 <br />
                            진료예약 및 조회를 하실 수 있습니다.
                        </p>
                        <span className='f_box'>
                            <a href=''>외래진료 예약</a>
                        </span>
                        <span className='s_box'>
                            <a href=''>건강검진 예약</a>
                        </span>
                        <span className='check'>
                            <a href=''>진료예약 확인</a>
                        </span>
                    </div>
                    <div className='information'>
                        <figure>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/images/booking.png'
                                }
                                alt=''
                            />
                        </figure>
                        <div className='main_tit '>진료안내</div>
                        <p>언제나 환자를 향합니다.</p>
                        <div className='cancer'>
                            <span className='kind'>
                                <a href=''>대표전화</a>
                            </span>
                            <span className='number main'>
                                <a href=''> 1688-7575</a>
                            </span>
                        </div>
                        <div className='cancer'>
                            <span className='kind'>
                                <a href=''>암병원</a>
                            </span>
                            <span className='number'>
                                <a href=''>02-3010-1300</a>
                            </span>
                        </div>
                        <div className='children'>
                            <span className='kind'>
                                <a href=''>어린이병원</a>
                            </span>
                            <span className='number'>
                                <a href=''>02-3010-1230</a>
                            </span>
                        </div>
                        <span className='f_box'>
                            <a href=''>외래안내</a>
                        </span>
                        <span className='s_box'>
                            <a href=''>진료시간표</a>
                        </span>
                    </div>
                </div>
                <div className='bottom top'>
                    <div className='certification'>
                        <figure>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/images/policy.png'
                                }
                                alt=''
                            />
                        </figure>
                        <div className='main_tit'>증명서 발급</div>
                        <p>온라인으로 증명서를 발급받으실 수 있습니다.</p>
                        <span className='f_box'>
                            <a href=''>발급서비스 안내</a>
                        </span>
                        <span className='s_box'>
                            <a href=''>온라인증명서발급</a>
                        </span>
                    </div>
                    <div className='way'>
                        <figure>
                            <img
                                src={process.env.PUBLIC_URL + '/images/way.png'}
                                alt=''
                            />
                        </figure>
                        <div className='main_tit'>오시는 길</div>
                        <p>서울아산병원으로 오시는 길을 알려드립니다.</p>
                        <span className='f_box'>
                            <a href=''>위치안내</a>
                        </span>
                        <span className='s_box'>
                            <a href=''>주차안내</a>
                        </span>
                    </div>
                    <div className='fund'>
                        <figure>
                            <img
                                src={
                                    process.env.PUBLIC_URL + '/images/drug.png'
                                }
                                alt=''
                            />
                        </figure>
                        <div className='main_tit'>의약품정보</div>
                        <p>서울아산병원에서 처방한 의약품정보 제공</p>
                        <span className='f_box'>
                            <a href=''>자세히 보기</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailHospital;
