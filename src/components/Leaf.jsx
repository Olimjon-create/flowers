import React, { useState } from "react";
import { useRouter } from "next/router";
import "../styles/Leaf.css";

function Section(props) {
  const { notCard, handleRemove, handleBtn } = props;

  return (
    <>
      <div className="container">
        <h1>Корзина</h1>
        <div className="new">
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Стоимость</th>
                <th>Количество</th>
                <th>Итого</th>
              </tr>
            </thead>
            <tbody>
              {notCard.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.imgSrc} alt={item.name} />
                    {item.name}
                  </td>
                  <td>{item.count} ₽</td>
                  <td>
                    <button
                      onClick={() => handleBtn(item.id, "plus")}
                      className="plus"
                    >
                      +{" "}
                    </button>
                    <span>{item.num}</span>
                    <button
                      onClick={() => handleBtn(item.id, "minus")}
                      className="minus"
                    >
                      -{" "}
                    </button>
                  </td>
                  <td>{item.count * item.num} </td>{" "}
                  <td>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="remove"
                    >
                      ✖
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <div className="Inputs">
              <input type="text" placeholder="Name" />
              <input className="input_two" type="text" placeholder="CardName" />
            </div>
          </table>
        </div>
      </div>
      <div className="Prices">
        <div className="prices_left">
          <h1 className="smell_text">Сумма</h1>
          <hr className="nav" />
          <h2 className="smell_tex2">Скидка</h2>
          <hr className="navtwo" />
          <h3 className="smell_tex3">К оплате</h3>
        </div>
        <div className="prices_right">
          <p className="price_text1">4 550 ₽</p>
          <p className="price_text2">— 250 ₽</p>
          <p className="price_text3">4 200 ₽</p>
          <button className="btn_type"> ПЕРЕЙТИ К ОФОРМЛЕНИЮ</button>
        </div>
      </div>
    </>
  );
}

function Leaf() {
  const router = useRouter();
  const arr = [
    {
      id: 1,
      title: "Get Started Now",
      inputTitle: "Name",
      input: "Enter your email",
      password: "Password",
      button: "Signup",
      img: "/leafs.png",
    },
    {
      id: 2,
      title: "Get Started Now",
      inputTitle: "Name",
      input: "Enter your email",
      password: "Password",
      button: "Signup",
      img: "/leafs.png",
    },
  ];

  const [formData, setFormData] = useState(
    arr.reduce((acc, item) => {
      acc[item.id] = {
        name: "",
        email: "",
        password: "",
        isChecked: true,
      };
      return acc;
    }, {})
  );

  const handleChange = (event, id) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleSubmit = (id) => {
    console.log("Form submitted for id:", id);
    console.log(formData[id]);

    setTimeout(() => {
      router.push("/product");
    });
  };

  return (
    <div>
      {arr.map((item) => (
        <div key={item.id} className="leaf">
          <div className="leaf_left">
            <h1 className="text">{item.title}</h1>
            <h2 className="text2">{item.inputTitle}</h2>
            <input
              className="input_1"
              type="text"
              name="name"
              value={formData[item.id].name}
              onChange={(e) => handleChange(e, item.id)}
              placeholder="Enter your name"
            />
            <h2 className="text3">Email address</h2>
            <input
              className="input_2"
              type="email"
              name="email"
              value={formData[item.id].email}
              onChange={(e) => handleChange(e, item.id)}
              placeholder="Enter your email"
            />
            <h2 className="text4">Password</h2>
            <input
              className="input_3"
              type="password"
              name="password"
              value={formData[item.id].password}
              onChange={(e) => handleChange(e, item.id)}
              placeholder="Enter your password"
            />
            <div className="img_text">
              <input
                type="checkbox"
                name="isChecked"
                checked={formData[item.id].isChecked}
                onChange={(e) => handleChange(e, item.id)}
              />
              <h1 className="text5">
                I agree to the <a href="#">terms & policy</a>
              </h1>
            </div>
            <button onClick={() => handleSubmit(item.id)} className="btn">
              {item.button}
            </button>
            <hr className="nav" />
            <div className="btn_input">
              <button className="btn2">
                <img className="image_2" src="/apple.png" alt="Apple" />
                Sign in with Apple
              </button>
              <button className="btn2">
                <img className="image_2" src="/google.png" alt="Google" />
                Sign in with Google
              </button>
            </div>
            <h3 className="text_7">
              Have an account? <span style={{ color: "blue" }}>Sign In</span>
            </h3>
          </div>
          <div className="leaf_right">
            <img className="img_4" src={item.img} alt="Leaf" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Leaf;
