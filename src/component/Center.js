import { useEffect, useState } from 'react';

const FLINK = [
    { id: 0, name: '센터/클리닉/연구원/기타', link: '' },
    { id: 1, name: '간센터', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D202&type=K' },
    { id: 2, name: '건강증진센터', link: 'https://health.amc.seoul.kr/health/main.do' },
    { id: 3, name: '국제진료센타', link: 'https://www.amc.seoul.kr/asan/depts/ihc/K/deptMain.do' },
    { id: 4, name: '뇌졸중센터', link: 'https://www.amc.seoul.kr/asan/depts/stroke/K/deptMain.do' },
    { id: 5, name: '담도ㆍ췌장센터', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D056&type=K' },
    { id: 6, name: '당뇨병센터', link: 'https://www.amc.seoul.kr/asan/depts/dm/K/deptMain.do' },
    { id: 7, name: '로봇수술센터', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D308&type=K' },
    { id: 8, name: '로봇수술트레이닝센터', link: 'https://www.amc.seoul.kr/asan/depts/robotic/E/deptMain.do' },
    { id: 9, name: '선청성심장병센터', link: 'https://www.amc.seoul.kr/asan/depts/iloveheart/K/deptMain.do' },
    { id: 10, name: '소화기내시경센터', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D199&type=K' },
    { id: 11, name: '스트레스심리상담센터', link: 'https://www.amc.seoul.kr/asan/depts/mind/K/deptMain.do' },
    { id: 12, name: '스포츠건강의학센터', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D098&type=K' },
    { id: 13, name: '염증성장질환센터', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D093&type=K' },
    { id: 14, name: '응급의료센터', link: 'https://www.amc.seoul.kr/asan/departments/deptDetail.do?hpCd=D050&type=K' },
    { id: 15, name: '장기이식센터', link: 'https://www.amc.seoul.kr/asan/depts/organ/K/deptMain.do' },
];

const Center = () => {
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

export default Center;
