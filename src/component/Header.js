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
                        <div className="tit">의료진/진료과</div>
                        <li><a href="">의료진</a></li>
                        <li><a href="">진료과</a></li>
                        <li><a href="">암병원</a></li>
                        <li><a href="">어린이병원</a></li>
                        <li><a href="">심장병원</a></li>
                        <li><a href="">센터</a></li>
                        <li><a href="">클리닉</a></li>
                        <li><a href="">아산생명과학연구원</a></li>
                        <li><a href="">기타</a></li>
                    </ul>
                </div>
            </div> */}
        </header>
    )
}

export default Header;