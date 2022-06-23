import React, { useState } from "react";
import './doctor.css';


interface doctorListProps{

}
const intialDoctorList=
[
    {
    id: 1,
    picture: "asset/picture/ALBERT.jpg",
    name: 'Dr. Albert Nzayisenga',
    specialty: 'Orthopedics',
    short_biography: 'Dr. Albert Nzayisenga is an orthopedic surgeon at King Faisal Hospital, Kigali. His areas of expertise are general orthopedics, hip arthroplasty and spine.',
    working_hour: '',
    phone_number: +250783825851
},
{
    id: 2,
    picture: "asset/picture/2.jpg",
    name: 'Dr. Bukara Emmanuel',
    specialty: 'orthopaedic ',
    short_biography: 'Dr. Bukara Emmanuel is a consultant orthopedic surgeon at King Faisal Hospital, Kigali. His areas of expertise are sports medicine, particularly in knee surgery and traumatology. He also has a special interest in arthroplasty. ',
    working_hour: '',
    phone_number: +250783825851
},
{
    id: 3,
    picture: "asset/picture/Gloria",
    name: 'Dr.Gloria Mukeshimana',
    specialty: 'Cardiology',
    short_biography: 'Dr. Gloria is a consultant cardiologist in the internal medicine department at King Faisal Hospital, Kigali. Her areas of expertise include clinical adult cardiology and interventional cardiology. ',
    working_hour: '',
    phone_number: +250783825851
},
{
    id: 2,
    picture: "asset/picture/2.jpg",
    name: 'Dr. Bukara Emmanuel',
    specialty: 'orthopaedic ',
    short_biography: 'Dr. Bukara Emmanuel is a consultant orthopedic surgeon at King Faisal Hospital, Kigali. His areas of expertise are sports medicine, particularly in knee surgery and traumatology. He also has a special interest in arthroplasty. ',
    working_hour: '',
    phone_number: +250783825851
},
{
    id: 2,
    picture: "asset/picture/2.jpg",
    name: 'Dr. Bukara Emmanuel',
    specialty: 'orthopaedic ',
    short_biography: 'Dr. Bukara Emmanuel is a consultant orthopedic surgeon at King Faisal Hospital, Kigali. His areas of expertise are sports medicine, particularly in knee surgery and traumatology. He also has a special interest in arthroplasty. ',
    working_hour: '',
    phone_number: +250783825851
}

]



const DoctorList: React.FC<doctorListProps> =({}) =>{
    const [doctor, setDoctor]= useState(intialDoctorList)

    return(
        <div className="container">
            <h3>Doctor List</h3>
            {doctor.map(doctor=>

            <div className='doctor' key={doctor.id}>
                <img src={doctor.picture} alt=""  />
                <h2>{doctor.name}</h2>
                <p>{doctor.specialty}</p>
            </div>
                
                
                
                )}

        </div>
    )
}
export default DoctorList;