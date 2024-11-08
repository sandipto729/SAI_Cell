import React, { useState, useEffect } from 'react';
import TeacherCard from '../../Section/ProfileCard/ProfileCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './AlumniMentor.css';
import Mentor from './../../../public/Mentor.json'; // Directly imported JSON
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const customStyles = {
    card: {
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },
    knowMoreButton: { 
        display: 'none' 
    },
    profilePic: {
        border: '1px solid #dfdfdf',
        height: '200px',
        width: '200px',
        objectFit: 'cover',
    },
    name: {
        color: '#007bff',
    },
    button: {
        backgroundColor: '#28a745',
        color: '#fff',
    },
    modalBox: {
        padding: '30px',
        backgroundColor: '#f8f9fa',
    },
};

const TeachersCarousel = () => {
    const [teachers, setTeachers] = useState([]);

    const fetchTeachers = () => {
        try {
            const result = Mentor; // Directly use the imported JSON
            setTeachers(result.teachers); // Make sure your JSON has a 'teachers' property
        } catch (err) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <div className="teacher-carousel">
            <h2>Mentors</h2>
            <Slider {...settings}>
                {teachers.map((teacher, index) => (
                    <TeacherCard key={index} teacher={teacher} customStyles={customStyles} />
                ))}
            </Slider>
        </div>
    );
};

export default TeachersCarousel;