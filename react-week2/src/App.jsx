import { useState } from "react";
import axios from "axios";

function App() {
  // 設定狀態
  const [account, setAccount] = useState({
    username: "example@test.com",
    password: "example",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handLogin = (e) => {
    e.preventDefault();
    // axios.post(url, data, config)
    axios.post(`${import.meta.env.VITE_BASE_URL}/v2/admin/signin`, account)
      .then(res => console.log(res))
      .catch(error=> console.log(error))
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-5">請先登入</h1>
      {/* onSubmit 用於處理表單的提交事件 */}
      <form onSubmit={handLogin} className="d-flex flex-column gap-3">
        <div className="form-floating mb-3">
          <input
            name="username"
            value={account.username}
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="username"
            placeholder="name@example.com"
          />
          <label htmlFor="username">Email address</label>
        </div>
        <div className="form-floating">
          <input
            name="password"
            value={account.password}
            onChange={handleInputChange}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-primary">登入</button>
      </form>
      <p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
    </div>
  );
}

export default App;
