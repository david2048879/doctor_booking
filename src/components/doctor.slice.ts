import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Root } from "react-dom/client";
import {RootState} from './store'



interface Doctor {
    id: number;
    picture: string;
    name: string;
    specialty: string
    phone_number: number;
    short_biography: string;
    working_hour: string

}
const initialState: Doctor[]=
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
    picture: "asset/picture/Gloria.jpg",
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

const DoctorSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        addDoctor: (state, action: PayloadAction<Doctor>) =>{
            return[action.payload, ...state]

        }
    }
})

export const {addDoctor } = DoctorSlice.actions;
export const getDoctorsSelector = (state:RootState) => state.doctors;
export default DoctorSlice.reducer;
