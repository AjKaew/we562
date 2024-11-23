import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("zn");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }
    if (!email.endsWith("@dpu.ac.th")) {
      setError("Email must be @dpu.ac.th");
      return;
    }
    setError("");
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          disabled={(name && email) ? '' : 'disabled'}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Country:
        <select name="country" value={country}
        onChange={(e) => setCountry(e.target.value)}>
          <option value="th">Thailand</option>
          <option value="us">America</option>
          <option value="zn">China</option>
        </select>
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;