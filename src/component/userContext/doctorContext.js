import React, { useState, createContext } from "react";

export const doctorContext = createContext();

export const DoctorProvider = (props) => {
  const [users, setUsers] = useState([
    {
      title: "Kakon Ray",
      department: "Front End Developer",
      img: "https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/124489889_369962447570149_4781988956737706303_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7k2NqOnbb851W9IB7cH1QUp7vMpW0GlRSnu8ylbQaVG9D3BTlUy6wDwa_39nAeMJJjmfO0wKWS_HHBsHY0Giu&_nc_ohc=cMUlBXGj-GwAX_A86yk&_nc_ht=scontent.fdac2-1.fna&oh=00_AT_cbH3VBV9V5nczZP_Fz3m2VrPDDuFVX7CF1qHmHhvp_Q&oe=6255D6D9",
      description: `A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions.`,
    },
    {
      title: "Pritis Trafdar",
      department: "Medicin",
      img: "https://yt3.ggpht.com/ytc/AKedOLQuMNsU2PT_oeZfCauBEYSVNJySNONw0UWloK0EoQ=s900-c-k-c0x00-no-rj",
      description: `A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions.`,
    },
    {
      title: "Taniya",
      department: "Medicin",
      img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
      description: `A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions.`,
    },
    {
      title: "Pritis Trafdar",
      department: "Medicin",
      img: "https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0=",
      description: `A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions.`,
    },
  ]);

  return (
    <doctorContext.Provider value={[users, setUsers]}>
      {props.children}
    </doctorContext.Provider>
  );
};
