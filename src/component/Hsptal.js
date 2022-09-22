import { useEffect, useState } from 'react';

const FLINK = [
    { id: 0, name: '재단 및 재단산하병원', link: '' },
    {
        id: 1,
        name: '아산사회복지재단',
        link: 'https://www.asanfoundation.or.kr/af/main.do',
    },
    { id: 2, name: '강릉아산병원', link: 'https://www.hyundaimovex.com/' },
    {
        id: 3,
        name: '금강아산병원',
        link: 'http://www.gnah.co.kr/kor/Main.do;jsessionid=107F952064C846993752462A5462C322',
    },
    {
        id: 4,
        name: '보성아산병원',
        link: 'http://www.asankeumkang.co.kr/asan/depts/D135/K/deptMain.do',
    },
    {
        id: 5,
        name: '보령아산병원',
        link: 'http://www.brh.or.kr/asan/depts/D136/K/deptMain.do',
    },
    {
        id: 6,
        name: '영덕아산병원',
        link: 'http://www.ydh.or.kr/asan/depts/D138/K/deptMain.do',
    },
    {
        id: 7,
        name: '정읍아산병원',
        link: 'http://www.jeh.or.kr/asan/depts/D139/K/deptMain.dottp://www.hri.co.kr/',
    },
    {
        id: 8,
        name: '홍천아산병원',
        link: 'http://www.hch.or.kr/asan/depts/D140/K/deptMain.do',
    },
];

const Hsptal = () => {
    const [flnk, setflnk] = useState();
    useEffect(() => {
        flnk && window.open(flnk);
    }, [flnk]);

    return (
        <select onChange={(e) => setflnk(e.target.value)}>
            {FLINK.map((link) => (
                <option value={link.link} key={link.id}>
                    {link.name}
                </option>
            ))}
        </select>
    );
};

export default Hsptal;
