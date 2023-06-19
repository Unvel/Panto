import React from 'react';
import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png"
import person3 from "../assets/images/person3.png"
import rating4 from "../assets/images/rating4.png"
import back1 from "../assets/images/testimonials1.png"
import back2 from "../assets/images/testimonials2.png"
import back3 from "../assets/images/testimonials3.png"

const Testimonials = () => {

    const clients = [
        {id:1,
            pfp: person1,
            title:"Bang Upin",
            subtitle: "Pedagang Asongan",
            review: "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
            rate: rating4,
            background:back1
        },
        {id:2,
            pfp: person2,
            title:"Ibuk Sukijan",
            subtitle: "Ibu Rumah Tangga",
            review: "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
            rate: rating4,
            background:back2
        },
        {id:3,
            pfp: person3,
            title:"Mpok Ina",
            subtitle: "Karyawan Swasta",
            review: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
            rate: rating4,
            background:back3
        }
    ]

    return (
        <div className="container">
            <div className="testimonials__outerText">
                <h2 className="testimonials__title">testimonials</h2>
                <h3 className="testimonials__text">our client reviews</h3>
            </div>
            <div className="testimonials">
            {clients.map(client =>
                    <div className="testimonials__card" key={client.id}>
                        <img src={client.background} alt="" className="testimonials__card__backgroundImg"/>
                        <div className="testimonials__card__figure2">
                            <img src={client.pfp} alt="" className="testimonials__card__pfp"/>
                            <h3 className="testimonials__card__title">{client.title}</h3>
                            <h4 className="testimonials__card__subtitle">{client.subtitle}</h4>
                            <p className="testimonials__card__review">{client.review}</p>
                            <img src={client.rate} alt="" className="testimonials__card__rate"/>
                        </div>
                </div>)}
            </div>
        </div>
    );
};

export default Testimonials;