import { useEffect, useState } from 'react';

const FLINK = [
    { id: 0, name: '관련기관', link: '' },
    { id: 1, name: '아산생명과학연구원', link: 'https://ails.amc.seoul.kr/ails/ko/main/main.do' },
    {
        id: 2,
        name: '울산대학교의과대학',
        link: 'https://www.medulsan.ac.kr/',
    },
    { id: 3, name: '의학도서관', link: 'https://aml.amc.seoul.kr/' },
    { id: 4, name: '스마트아카데미', link: 'https://amc.hunet.co.kr/Login/LoginGate' },
    { id: 5, name: '아산의료원 연보', link: 'https://www.amc.seoul.kr/asan/publicity/yearpaper/yearPaperList.do' },
];

const FamilyLink = () => {
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

export default FamilyLink;
