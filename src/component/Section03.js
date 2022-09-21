import React, { useState } from 'react'

const TAB = [
    { id: 1, title: "공지사항" },
    { id: 2, title: "채용공고" },
    { id: 3, title: "입찰공고" },
    { id: 4, title: "보도자료배포" },
    { id: 5, title: "언론보도" },
]

const Section03 = () => {
    const [tab, setTab] = useState(0)
    return (
        <section className='news'>
            <div className="container">
                <h2>서울아산병원의 소식</h2>
                <p>서울아산병원의 소식 및 정보를 알려드립니다.</p>
                <div className="tab">
                    <ul className="tab_menu">{
                        TAB.map((tabb, idx) => {
                            return (
                                <li onClick={() => setTab(idx)}><a href="">{tabb.title}</a></li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
            {vvvv[tab].con}
        </section>
    )
}

export default Section03;