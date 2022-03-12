import React, { useState, createContext } from "react";

export const doctorContext = createContext();

export const DoctorProvider = (props) => {
  const [users, setUsers] = useState([
    {
      title: "Pritis Trafdar",
      department: "Medicin",
      img: "https://jewmch.com/wp-content/uploads/2021/12/Doctor-S-M-Nafiz-Imtiaz.jpg",
      description: `A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions.`,
    },
    {
      title: "Pritis Trafdar",
      department: "Medicin",
      img: "https://yt3.ggpht.com/ytc/AKedOLQuMNsU2PT_oeZfCauBEYSVNJySNONw0UWloK0EoQ=s900-c-k-c0x00ffffff-no-rj",
      description: `A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions.`,
    },
    {
      title: "Pritis Trafdar",
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
