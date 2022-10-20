import React from 'react'

const GNB = [
    { id: 1, menu: "의료진/진료과", link: "" },
    { id: 2, menu: "진료예약/안내", link: "" },
    { id: 3, menu: "건강정보", link: "" },
    { id: 4, menu: "고객서비스", link: "" },
    { id: 5, menu: "의학교육", link: "" },
    { id: 6, menu: "병원이야기", link: "" },
    { id: 7, menu: "병원소개", link: "" },
]

// const SGNB = [
//     {
//         id: 1, menu: "의료진 / 진료과", part: [
//             { id: 1, content: ["의료진", "진료과", "암병원", "어린이병원", "심장병원", "센터", "클리닉", "아산생명과학연구원", "기타"] }
//         ]
//     },
//     {
//         id: 2, menu: "진료예약 / 안내", part: [
//             { id: 1, content: ["병원안내", "외래진료안내", "응급진료안내", "입원진료안내", "가정간호안내", "검사실안내",] }
//         ]
//     },
//     {
//         id: 3, menu: "건강정보", part: [
//             { id: 1, content: ["의료정보", "건강TV", "헬스에디터",] }
//         ]
//     },
//     {
//         id: 4, menu: "고객서비스", part: [
//             { id: 1, content: ["발급안내", "고객서비스", "이용문의",] }
//         ]
//     },
//     {
//         id: 5, menu: "의학교육", part: [
//             { id: 1, content: ["학술행사일정", "학술영상다시보기",] }
//         ]
//     },
//     {
//         id: 6, menu: "병원이야기", part: [
//             { id: 1, content: ["리얼스토리", "AMC IN(人) SIGHT", "사회공헌", "후원", "자원봉사"] }
//         ]
//     },
//     {
//         id: 7, menu: "병원소개", part: [
//             { id: 1, content: ["재단소개", "병원소개", "소식", "정기간행물", "교육장안내"] }
//         ]
//     },
// ]


const Header = () => {
    return (
        <header className='Header'>
            <div className="top_menu">
                <ul className="t_menu container">
                    <li><a href="">로그인</a></li>
                    <li><a href="">회원가입</a></li>
                    <li><a href="">나의차트</a></li>
                </ul>
            </div>
            <div className="ash_wrap container">
                <div className="logo">
                    <h1>
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
                        </a>
                    </h1>
                </div>
                <ul className='gnb'>
                    {
                        GNB.map((it, idx) => {
                            return (
                                <li><a href={it.link}>{it.menu}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* <div className="smenu">
                <div className="menubox">
                    <ul className="subbox">
                        {SGNB.map((it, idx) => {
                            return (
                                <li><a href={it.link}>{it.menu}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div> */}

        </header>
    )
}

export default Header;