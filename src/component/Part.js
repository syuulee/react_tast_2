import { useEffect, useState } from 'react';

const FLINK = [
    { id: 0, name: '진료과', link: '' },
    {
        id: 1,
        name: '가정의학과',
        link: 'https://www.amc.seoul.kr/asan/depts/fm/K/deptMain.do',
    },
    {
        id: 2,
        name: '간담도췌외과',
        link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D149&type=K',
    },
    { id: 3, name: '간이식ㆍ간담도외과', link: 'http://www.hri.co.kr/' },
    { id: 4, name: '감염내과', link: 'http://www.hri.co.kr/' },
    { id: 5, name: '건강의학과', link: 'http://www.hri.co.kr/' },
    { id: 6, name: '구강악안면외과', link: 'http://www.hri.co.kr/' },
    { id: 7, name: '내과', link: 'http://www.hri.co.kr/' },
    { id: 8, name: '내분비내과', link: 'http://www.hri.co.kr/' },
    { id: 9, name: '내분비외과', link: 'http://www.hri.co.kr/' },
    { id: 10, name: '노년내과', link: 'http://www.hri.co.kr/' },
    { id: 11, name: '대장항문외과', link: 'http://www.hri.co.kr/' },
    { id: 12, name: '류마티스내과', link: 'http://www.hri.co.kr/' },
    { id: 13, name: '마취통증의학과', link: 'http://www.hri.co.kr/' },
    { id: 14, name: '방사선종양학과', link: 'http://www.hri.co.kr/' },
    { id: 15, name: '병리과', link: 'http://www.hri.co.kr/' },
    { id: 16, name: '비뇨의학과', link: 'http://www.hri.co.kr/' },
    { id: 17, name: '산부인과', link: 'http://www.hri.co.kr/' },
    { id: 18, name: '성형외과', link: 'http://www.hri.co.kr/' },
    { id: 19, name: '소화기내과', link: 'http://www.hri.co.kr/' },
    { id: 20, name: '수부외과', link: 'http://www.hri.co.kr/' },
    { id: 21, name: '신ㆍ췌장이식외과', link: 'http://www.hri.co.kr/' },
    { id: 22, name: '신경과', link: 'http://www.hri.co.kr/' },
    { id: 23, name: '신경외과', link: 'http://www.hri.co.kr/' },
    { id: 24, name: '신장내과', link: 'http://www.hri.co.kr/' },
    { id: 25, name: '심장내과', link: 'http://www.hri.co.kr/' },
    { id: 26, name: '심장외과', link: 'http://www.hri.co.kr/' },
    { id: 27, name: '안과', link: 'http://www.hri.co.kr/' },
    { id: 28, name: '알레르기과', link: 'http://www.hri.co.kr/' },
    { id: 29, name: '영상의학과', link: 'http://www.hri.co.kr/' },
    { id: 30, name: '위장관외과', link: 'http://www.hri.co.kr/' },
    { id: 31, name: '유방외과', link: 'http://www.hri.co.kr/' },
    { id: 32, name: '응급의학과', link: 'http://www.hri.co.kr/' },
    { id: 33, name: '이비인후과', link: 'http://www.hri.co.kr/' },
    { id: 34, name: '임상약리학과', link: 'http://www.hri.co.kr/' },
    { id: 35, name: '재활의학과', link: 'http://www.hri.co.kr/' },
    { id: 36, name: '정신건강의학과', link: 'http://www.hri.co.kr/' },
    { id: 37, name: '정형외과', link: 'http://www.hri.co.kr/' },
    { id: 38, name: '종양내과', link: 'http://www.hri.co.kr/' },
    { id: 39, name: '중환자ㆍ외상외과', link: 'http://www.hri.co.kr/' },
    { id: 40, name: '진단검사의학과', link: 'http://www.hri.co.kr/' },
];

const Part = () => {
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

export default Part;
