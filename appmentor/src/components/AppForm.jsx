import React, { useState } from "react";

const AppForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      ></input>
      <button>submit</button>
    </form>
  );
};

export default AppForm;
