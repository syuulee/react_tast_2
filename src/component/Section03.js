import React, { useState } from 'react'

const TAB = [
    {
        id: 1, title: "공지사항", content: [
            { id: 1, Date: "2022.08.08", title: "서울아산병원 갤러리 2023년 전시 신청", content: "아산병원은 환자와 보호자의 정서적 치유 공간으로 갤러리를 운영하고 있습니다. [더보기]" },
            { id: 2, Date: "2022.03.17", title: "'베니톨 정(광동제약)'을 복용 중이신 환자 여러분께 알려드립니다", content: "식품의약품안전처(이하 식약처)에서는 불순물 함유 우려가 있는 베니톨 정(미세정제플라보노이드분획물)의 [더보기]" },
            { id: 3, Date: "2022.03.02", title: "서울아산병원, 가장 존경받는 병원 16년 연속 1위", content: "서울아산병원이 16년 연속 한국에서 가장 존경받는 병원에 선정됐다. 한국에서 가장 존경받는 병원은 우수한 [더보기]" },
            { id: 4, Date: "2022.01.17", title: "소득공제용 서류 발급 안내", content: "" },
            { id: 5, Date: "2021.12.08", title: "'로사르탄 성분 제품'을 복용 중이신 환자 여러분께 알려드립니다", content: "식품의약품안전처(이하 식약처)에서는 불순물 함유 우려 원료를 사용한 로사르탄(losartan) 성분 제품의 [더보기]" },
            { id: 6, Date: "2021.08.12", title: "병원 출입 방법 변경 안내", content: "" },
        ]
    },
    {
        id: 2, title: "주요뉴스", content: [
            { id: 1, Date: "2022.09.15", title: "약 안 듣는 조현병, 전기경련요법으로 치료효과 높인다.", content: "주성우 서울아산병원 정신건강의학과 전문의는 “전기경련요법은 이름 자체에서의 부정적 인식과 [더보기]" },
            { id: 2, Date: "2022.09.15", title: "美뉴스위크, 서울아산병원 5개 임상분야 세계 10위권", content: "아산사회복지재단 서울아산병원(이사장 정몽준)이 미국 시사주간지 뉴스위크가 시행한 ‘2023 임상분야별 [더보기]" },
            { id: 3, Date: "2022.03.02", title: "조규강 전 상현섬유 대표 서울아산병원에 10억 기부", content: "조규강 씨는 “코로나19라는 위기 상황을 극복하는데 보탬이 됐으면 하는 바람과 병마와 싸우면서도 치료비로 [더보기]" },
            { id: 4, Date: "2022.01.17", title: "척추암 수술 때 척추 고정 최소화해도 ‘효과’", content: "척추로도 암이 전이될 수 있는데, 치료를 위해서는 수술로 종양을 제거하면서 무너질 수 있는 척추를 [더보기]" },
            { id: 5, Date: "2021.12.08", title: "심장 스텐트 후 정기검사 가이드라인 바뀐다", content: "심장혈관에 스텐트를 삽입하고 1년이 지나면 심장 기능 확인을 위해 심장 스트레스 기능검사를 하게 된다. [더보기]" },
            {
                id: 6, Date: "2021.08.12", title: "암 치료 후 대표적 합병증 ‘림프순환장애’ 극복 가능성 열려", content: "연구팀은 새롭게 개발한 림프채널시트에 대한 특허를 취득했으며, 현재 새로운 치료 기술을 완성하기 [더보기]"
            },
        ]
    },
    {
        id: 3, title: "채용공고", content: [
            { id: 1, Date: "2022.09.22(목) 10:00 ~ 2022.09.29(목) 23:00", title: "건진운영팀 임상병리사 모집", content: "" },
            { id: 2, Date: "2022.09.07(수) 15:00 ~ 2022.09.27(화) 23:00", title: "정보보호실 사무직(전산) 모집", content: "" },
            { id: 3, Date: "2022.09.01(목) 09:00 ~ 2022.09.22(목) 23:00", title: "[모집연장] 암병원운영지원팀(CAR-T센터) 간호사 모집", content: "" },
            { id: 4, Date: "2022.09.16(금) 12:00 ~ 2022.09.22(목) 23:00", title: "암병원운영지원팀(CAR-T센터) 임상병리사 모집", content: "" },
            { id: 5, Date: "2022.09.21(수) 10:00 ~ 2022.09.28(수) 23:00", title: "핵의학팀 방사선사 모집", content: "" },
            { id: 6, Date: "2022.09.21(수) 09:30 ~ 2022.10.03(월) 23:00", title: "외래간호팀 간호사 모집", content: "" },
        ]
    },
    {
        id: 3, title: "입찰공고", content: [
            { id: 1, Date: "2022.09.22 ~ 2022.10.17", title: "의학도서관 리모델링 디자인 설명회", content: "자세히 보기" },
            { id: 2, Date: "2022.09.08 ~ 2022.09.16", title: "이러닝 운영 업체 선정", content: "자세히 보기" },
            { id: 3, Date: "2022.09.05 ~ 2022.11.11", title: "2023년도 서울아산병원 환경미화 용역업체 선정", content: "자세히 보기" },
            { id: 4, Date: "2022.09.02 ~ 2022.09.22", title: "건강검진 준비물품 발송 택배업체 선정", content: "" },
            { id: 5, Date: "2022.09.02 ~ 2022.09.22", title: "'건강검진 준비물품 발송 택배업체 선정", content: "자세히 보기" },
            { id: 6, Date: "2022.07.14 ~ 2022.07.27", title: "원외 직물제조시설 물류배송 업체 선정", content: "자세히 보기" },
        ]
    },
    {
        id: 3, title: "강좌안내", content: [
            { id: 1, Date: "2022.10.05 ~ 2022.10.05", title: "대장종양클리닉 모임 및 장루관리 워크샵", content: "개최부서 : 대장암센터,암병원" },
            { id: 2, Date: "2022.09.22 ~ 2022.09.22", title: "동아아산건강강좌 - 기억력장애와 치매, 치매재활치료", content: "개최부서 : 홍보팀" },
            { id: 3, Date: "2022.09.21 ~ 2022.09.21", title: "2022년 유방암 온라인 건강강좌", content: "개최부서 : 암병원" },
            { id: 4, Date: "2022.08.18 ~ 2022.08.18", title: "동아아산건강강좌 - 탈모ㆍ피부노화 관리", content: "개최부서 : 홍보팀" },
            { id: 5, Date: "2022.07.07 ~ 2022.07.07", title: "2022년 부인암 건강강좌", content: "개최부서 : 암병원" },
            { id: 6, Date: "2022.05.12 ~ 2022.05.12", title: "2022년 두경부암 건강강좌", content: "개최부서 : 암병원" },
        ]
    },

]



const Section03 = () => {
    const [tab, setTab] = useState(0)
    return (
        <section className='news'>
            <div className="container">
                <h2>서울아산병원의 소식</h2>
                <p className='sub_tit'>서울아산병원의 소식 및 정보를 알려드립니다.</p>
                <div className="tab">
                    <ul className="tab_menu">{
                        TAB.map((tabb, idx) => {
                            return (
                                <li onClick={() => setTab(idx)} className={tab === idx ? 'on' : ''}>{tabb.title}</li>
                            )
                        })
                    }
                    </ul>
                    <div className="tab_content">
                        <div className='content_box'>{TAB[tab].content.map(ix => {
                            return (
                                <div className='tab_data'>
                                    <span className="date">{ix.Date}</span>
                                    <strong>{ix.title}</strong>
                                    <p>{ix.content}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* {vvvv[tab].con} */}
        </section >
    )
}

export default Section03;