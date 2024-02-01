import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";
import PasswordErrorMessage from "./components/ErrorMessage";


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  // Validação
  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    )
  };

  // Limpar Form após Submit
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("")
    setPassword({ ...password, value: "" });
    setRole("role")
  };

  // Resolvendo o Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          {/* FIRIST NAME */}
          <div
            className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)} />
          </div>

{/* LAST NAME */}
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)} />
          </div>

{/* E-MAIL */}
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </div>

{/* PASSWORD */}
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={e => setPassword({ ...password, value: e.target.value, isTouched: false })}
              onBlur={e => setPassword({ ...password, isTouched: true })}
            />
            {password.isTouched && password.value.length < 8 ? <PasswordErrorMessage /> : null}
          </div>

{/* ROLE */}
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={e => setRole(e.target.value)} >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

{/* BUTTON */}
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>

        </fieldset>
      </form>
    </div>
  );
}

export default App;
