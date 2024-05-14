import React from "react";
import ChatBot from 'react-simple-chatbot';

function Chatbot() {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello,Welcome to our Website',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please enter your Name',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name'
    },
    {
      id: 'Name',
      message: 'HI {previousValue},Please May i know how can i help you?',
      trigger: 'issues'
    },
    {
      id: 'issues',
      options: [{ value: "User", label: 'User', trigger: "User" },
      { value: "Admin", label: 'Admin', trigger: "Admin" }],
    },
    {
      id: 'User',
      message: 'Thanks for selecting,Please select the Mobile You Want',
      trigger: 'ok'
    },
    {
      id: 'Admin',
      message: 'Thanks for selecting,Please select the Mobile You Want',
      trigger: 'ok'
    },
    {
      id: 'ok',
      options: [{ value: "Apple", label: 'Apple', trigger: "Apple" },
      { value: "Cricket", label: 'Cricket', trigger: "Cricket" },
      { value: "Lava", label: 'Lava', trigger: "Lava" },
      { value: "Motorola", label: 'Motorola', trigger: "Motorola" },
      { value: "Oppo", label: 'Oppo', trigger: "Oppo" },
      { value: "Realme", label: 'Realme', trigger: "Realme" },
      { value: "Redmi", label: 'Redmi', trigger: "Redmi" },
      { value: "Samsung", label: 'Samsung', trigger: "Samsung" },
      { value: "Vivo", label: 'Vivo', trigger: "Vivo" }],
    },
    {
      id: 'Apple',
      options: [{ value: "IPhone15", label: 'IPhone15', trigger: "IPhone15" },
      { value: "IPhone14", label: 'IPhone14', trigger: "IPhone14" },
      { value: "IPhone12", label: 'IPhone12', trigger: "IPhone12" },
      { value: "IPhoneXS", label: 'IPhoneXS', trigger: "IPhoneXS" }]
    },
    {
      id: 'IPhone15',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'IPhone14',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'IPhone12',
      message: 'Sorry Mobile Not-Available',
      trigger: 'ok'
    },
    {
      id: 'IPhoneXS',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Cricket',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Lava',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Motorola',
      options: [{ value: "Moto G 5G", label: 'Moto G 5G', trigger: "Moto G 5G" },
      { value: "Moto M84 5G", label: 'Moto G84 5G', trigger: "Moto G84 5G" },
      { value: "Moto S8", label: 'Moto S8', trigger: "Moto S8" }]
    },
    {
      id: 'Moto G 5G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Moto G84 5G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Moto S8',
      message: 'Sorry Mobile Not-Available',
      trigger: 'ok'
    },
    {
      id: 'Oppo',
      message: 'Oppo A59 Available-Thank You',
      end: true,
    },
    {
      id: 'Realme',
      options: [{ value: "Realme narzo 60X 5G", label: 'Realme narzo 60X 5G', trigger: "Realme narzo 60X 5G" },
      { value: "Realme narzo 60 5G", label: 'Realme narzo 60 5G', trigger: "Realme narzo 60 5G" },
      { value: "Realme 9i 4G LTE", label: 'Realme 9i 4G LTE', trigger: "Realme 9i 4G LTE" },
      { value: "Realme 3", label: 'Realme 3', trigger: "Realme 3" }]
    },
    {
      id: 'Realme narzo 60X 5G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Realme narzo 60 5G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Realme 9i 4G LTE',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Realme 3',
      message: 'Sorry Mobile Not-Available',
      trigger: 'ok'
    },
    {
      id: 'Redmi',
      options: [{ value: "Redmi Note 12 5G", label: 'Redmi Note 12 5G', trigger: "Redmi Note 12 5G" },
      { value: "Xiaomi 8A dual", label: 'Xiaomi 8A dual', trigger: "Xiaomi 8A dual" },
      { value: "Redmi 9A", label: 'Redmi 9A', trigger: "Redmi 9A" }]
    },
    {
      id: 'Redmi Note 12 5G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Xiaomi 8A dual',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Redmi 9A',
      message: 'Sorry Mobile Not-Available',
      trigger: 'ok'
    },
    {
      id: 'Samsung',
      options: [{ value: "Samsung Galaxy trend M16 ", label: 'Samsung Galaxy trend M16 ', trigger: "Samsung Galaxy trend M16" },
      { value: "Samsung Fold 5G", label: 'Samsung Fold 5G', trigger: "Samsung Fold 5G" },
      { value: "Samsung Fold 4G", label: 'Samsung Fold 4G', trigger: "Samsung Fold 4G" },
      { value: "Samsung Galaxy", label: 'Samsung Galaxy', trigger: "Samsung Galaxy" }]
    },
    {
      id: 'Samsung Galaxy trend M16',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Samsung Fold 5G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Samsung Fold 4G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Samsung Galaxy',
      message: 'Sorry Mobile Not-Available',
      trigger: 'ok'
    },
    {
      id: 'Vivo',
      options: [{ value: "Vivo Y200 5G ", label: 'Vivo Y200 5G', trigger: "Vivo Y200 5G" },
      { value: "iQOO Z7s 5G", label: 'iQOO Z7s 5G', trigger: "iQOO Z7s 5G" },
      { value: "Vivo Ultra Pro", label: 'Vivo Ultra Pro', trigger: "Vivo Ultra Pro" }
    ]
    },
    {
      id: 'Vivo Y200 5G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'iQOO Z7s 5G',
      message: 'Available-Thank You',
      end: true,
    },
    {
      id: 'Vivo Ultra Pro',
      message: 'Sorry Mobile Not-Available',
      trigger: 'ok'
    }
  ]
  return (
    <div>
      <ChatBot steps={steps} floating={true}> </ChatBot>
    </div>
  );

}

export default Chatbot;