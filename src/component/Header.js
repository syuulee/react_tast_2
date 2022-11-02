import React from 'react';

const GNB = [
    {
        id: 1,
        menu: '의료진/진료과',
        link: '',
        smenu: [
            { con: '의료진', link: '' },
            { con: '진료과', link: '' },
            { con: '암병원', link: '' },
            { con: '어린이병원', link: '' },
            { con: '심장병원', link: '' },
            { con: '센터', link: '' },
            { con: '클리닉', link: '' },
            { con: '아산생명과학연구원', link: '' },
            { con: '기타', link: '' },
        ],
    },
    {
        id: 2,
        menu: '진료예약/안내',
        link: '',
        smenu: [
            { con: '병원안내', link: '' },
            { con: '외래진료안내', link: '' },
            { con: '응급진료안내', link: '' },
            { con: '입원진료안내', link: '' },
            { con: '가정간호안내', link: '' },
            { con: '검사실안내', link: '' },
        ],
    },
    {
        id: 3,
        menu: '건강정보',
        link: '',
        smenu: [
            { con: '의료정보', link: '' },
            { con: '건강TV', link: '' },
            { con: '헬스에디터', link: '' },
        ],
    },
    {
        id: 4,
        menu: '고객서비스',
        link: '',
        smenu: [
            { con: '발급안내', link: '' },
            { con: '고객서비스', link: '' },
            { con: '이용문의', link: '' },
        ],
    },
    {
        id: 5,
        menu: '의학교육',
        link: '',
        smenu: [
            { con: '학술행사일정', link: '' },
            { con: '학술영상다시보기', link: '' },
        ],
    },
    {
        id: 6,
        menu: '병원이야기',
        link: '',
        smenu: [
            { con: '리얼스토리', link: '' },
            { con: 'AMC IN(人) SIGHT', link: '' },
            { con: '사회공헌', link: '' },
            { con: '후원', link: '' },
            { con: '자원봉사', link: '' },
        ],
    },
    {
        id: 7,
        menu: '병원소개',
        link: '',
        smenu: [
            { con: '재단소개', link: '' },
            { con: '병원소개', link: '' },
            { con: '소식', link: '' },
            { con: '정기간행물', link: '' },
            { con: '교육장안내', link: '' },
        ],
    },
];

const Header = () => {
    return (
        <header className='Header'>
            <div className='top_menu'>
                <ul className='t_menu container'>
                    <li>
                        <a href=''>로그인</a>
                    </li>
                    <li>
                        <a href=''>회원가입</a>
                    </li>
                    <li>
                        <a href=''>나의차트</a>
                    </li>
                </ul>
            </div>
            <div className='ash_wrap container'>
                <div className='logo'>
                    <h1>
                        <a href=''>
                            <img
                                src={
                                    process.env.PUBLIC_URL + '/images/logo.png'
                                }
                                alt=''
                            />
                        </a>
                    </h1>
                </div>
                <ul className='gnb'>
                    {GNB.map((it, idx) => {
                        return (
                            <li>
                                <a href={it.link}>{it.menu}</a>
                                <ul class='sub_menu'>
                                    {it.smenu.map((its, idx) => {
                                        return (
                                            <li>
                                                <a href={its.link}>{its.con}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
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
    );
};

export default Header;
