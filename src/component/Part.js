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
    { id: 3, name: '간이식ㆍ간담도외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D150&type=K' },
    { id: 4, name: '감염내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D004&type=K' },
    { id: 5, name: '건강의학과', link: 'https://health.amc.seoul.kr/health/main.do' },
    { id: 6, name: '구강악안면외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D115&type=K' },
    { id: 7, name: '내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D003&type=K' },
    { id: 8, name: '내분비내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D005&type=K' },
    { id: 9, name: '내분비외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D343&type=K' },
    { id: 10, name: '노년내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D010&type=K' },
    { id: 11, name: '대장항문외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D095&type=K' },
    { id: 12, name: '류마티스내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D172&type=K' },
    { id: 13, name: '마취통증의학과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D014&type=K' },
    { id: 14, name: '방사선종양학과', link: 'https://www.amc.seoul.kr/asan/depts/ro/K/deptMain.do' },
    { id: 15, name: '병리과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D017&type=K' },
    { id: 16, name: '비뇨의학과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D018&type=K' },
    { id: 17, name: '산부인과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D019&type=K' },
    { id: 18, name: '성형외과', link: 'https://www.amc.seoul.kr/asan/depts/ps/K/deptMain.do' },
    { id: 19, name: '소화기내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D006&type=K' },
    { id: 20, name: '수부외과', link: 'http://www.hri.co.kr/' },
    { id: 21, name: '신ㆍ췌장이식외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D340&type=K' },
    { id: 22, name: '신경과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D030&type=K' },
    { id: 23, name: '신경외과', link: 'https://www.amc.seoul.kr/asan/depts/D031/K/deptLink.do' },
    { id: 24, name: '신장내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D007&type=K' },
    { id: 25, name: '심장내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D008&type=K' },
    { id: 26, name: '심장외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D132&type=K' },
    { id: 27, name: '안과', link: 'https://www.amc.seoul.kr/asan/depts/oph/K/deptMain.do' },
    { id: 28, name: '알레르기과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D173&type=K' },
    { id: 29, name: '영상의학과', link: 'https://www.amc.seoul.kr/asan/depts/rad/K/deptMain.do' },
    { id: 30, name: '위장관외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D152&type=K' },
    { id: 31, name: '유방외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D342&type=K' },
    { id: 32, name: '응급의학과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D033&type=K' },
    { id: 33, name: '이비인후과', link: 'https://www.amc.seoul.kr/asan/depts/ent/K/deptMain.do' },
    { id: 34, name: '임상약리학과', link: 'https://www.amc.seoul.kr/asan/depts/cpt/K/deptMain.do' },
    { id: 35, name: '재활의학과', link: 'https://www.amc.seoul.kr/asan/depts/rm/K/deptMain.do' },
    { id: 36, name: '정신건강의학과', link: 'https://www.amc.seoul.kr/asan/depts/psy/K/deptMain.do' },
    { id: 37, name: '정형외과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D038&type=K' },
    { id: 38, name: '종양내과', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D011&type=K' },
    { id: 39, name: '중환자ㆍ외상외과', link: 'https://www.amc.seoul.kr/asan/depts/acs/K/deptMain.do' },
    { id: 40, name: '진단검사의학과', link: 'https://www.amc.seoul.kr/asan/depts/amccp/K/deptMain.do' },
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
