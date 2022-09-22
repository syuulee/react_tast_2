import { useEffect, useState } from 'react';

const FLINK = [
    { id: 0, name: '관련기관', link: '' },
    { id: 1, name: '아산생명과학연구원', link: 'https://www.hdasan.com/main' },
    {
        id: 2,
        name: '울산대학교의과대학',
        link: 'https://www.hyundaimovex.com/',
    },
    { id: 3, name: '의학도서관', link: 'http://www.hri.co.kr/' },
    { id: 4, name: '스마트아카데미', link: 'http://www.hri.co.kr/' },
    { id: 5, name: '아산의료원 연보', link: 'http://www.hri.co.kr/' },
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
