import React from 'react';
import FamilyLink from './FamilyLink';
import Center from './Center';
import Part from './Part';
import Hsptal from './Hsptal';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='top'>
                    <div className='logo'>
                        <figure>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/images/footlogo.png'
                                }
                                alt=''
                            />
                        </figure>
                    </div>
                    <ul className='top_menu'>
                        <li>
                            <a href=''>환자권리장전</a>
                        </li>
                        <li>
                            <a href=''>개인정보처리방침</a>
                        </li>
                        <li>
                            <a href=''>이용약관</a>
                        </li>
                        <li>
                            <a href=''>의료정보운영방침</a>
                        </li>
                        <li>
                            <a href=''>비급여진료비</a>
                        </li>
                        <li>
                            <a href=''>의무기록사본발급안내</a>
                        </li>
                        <li>
                            <a href=''>위변조문서확인</a>
                        </li>
                        <li>
                            <a href=''>원격지원서비스</a>
                        </li>
                    </ul>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <address>
                            05505 서울특별시 송파구 올림픽로 43길 88
                            서울아산병원
                            <br />
                            TEL 1688-7575 / webmaster@amc.seoul.kr <br />
                            Copyright &copy; 2014 by Asan Medical Center. All
                            Rights reserved.
                        </address>
                    </div>
                    <div className='right'>
                        <div className='part'>
                            <Part />
                        </div>
                        <div className='center'>
                            {' '}
                            <Center />
                        </div>
                        <div className='hospital'>
                            <Hsptal />
                        </div>
                        <div className='familylink'>
                            {' '}
                            <FamilyLink />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
