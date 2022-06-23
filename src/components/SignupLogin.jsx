import { Component } from "react";
import "../styles/signuplogin.css";
import * as yup from "yup";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class SignupLogin extends Component {
  state = {
    account: {
      email: "",
      password: "",
      username: "",
    },
    error2: [],
		// sending: false
  };

  schema = yup.object().shape({
    email: yup
      .string()
      .email("email invalid")
      .required("email must be entered."),
    password: yup.string().min(8, "password must be atleast 8 character "),
  });

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      console.log(error.errors);
      this.setState({ error2: error.errors });
    }
  };

  handleSubmit1 = async (e) => {
    e.preventDefault();
    const result = await this.validate();
		console.log(result);
		// this.setState({sending:true})
    const response = await axios.get(
      "http://127.0.0.1:3001/api/auth/register",
      result
    );
		// this.setState({sending:false})
    console.log(response);
  };
  handleSubmit2 = async (e) => {
    e.preventDefault();
    const result = await this.validate();
		console.log(result);
		// this.setState({sending:true})
    const response = await axios.post(
      "http://localhost:3001/api/auth/login",
      result
    );
		// this.setState({sending:false})
    console.log(response);
  };

  handleChange = async (e) => {
    const input = e.currentTarget;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { email, password, username } = this.state.account;

    return (
      <>
        <div className="mainsign">
          {this.checking() && (
            <div className="alert alert-primary " id="alert">
              <ul>
                {this.state.error2.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="form-structor">
            <div className="signup">
              <h2 className="form-title" id="signup" onClick={this.signupEvent}>
                <span>or</span>Sign up
              </h2>
              <div className="form-holder">
                <input
                  type="text"
                  className="input"
                  placeholder="UserName"
                  value={username}
                  onChange={this.handleChange}
                  name="username"
                />
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                />
                <input
                  type="password"
									
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                  name="password"
                />
              </div>
              <button className="submit-btn" onClick={this.handleSubmit1}>
                Sign up
              </button>
            </div>
            <div className="login slide-up">
              <div className="center">
                <h2 className="form-title" id="login" onClick={this.loginEvent}>
                  <span>or</span>Log in
                </h2>
                <div className="form-holder">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                    name="email"
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                    name="password"
                  />
                </div>
                <button className="submit-btn" onClick={this.handleSubmit2} >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  loginEvent = (e) => {
    const signupBtn = document.getElementById("signup");

    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        signupBtn.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  };
  signupEvent = (e) => {
    const loginBtn = document.getElementById("login");

    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        loginBtn.parentNode.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  };

  checking = () => {
    if (this.state.error2.length !== 0)
      document.getElementById("alert").style.display = "block";
    setTimeout(() => {
      this.state.error2.length = 0;
      document.getElementById("alert").style.display = "none";
    }, 3000);

    return true;
  };
}

export default SignupLogin;
