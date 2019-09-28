import React from 'react'
import Footer from './Footer'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {}
        }
    }

    render() {

        let handleChange = (e) => {
            let fields = this.state.fields;
            fields[e.target.name] = e.target.value;
            this.setState({
              fields
            });
      
          }

        let submitUserRegistrationForm = (e) => {
            e.preventDefault();
            if (validateForm()) {
                let fields = {};
                fields["username"] = "";
                fields["email"] = "";
                this.setState({fields:fields});
            }
          }

        let validateForm = () => {

            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;
      
            if (!fields["username"]) {
              formIsValid = false;
              errors["username"] = "*Please enter your username.";
            }
      
            if (typeof fields["username"] !== "undefined") {
              if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
              }
            }
      
            if (!fields["email"]) {
              formIsValid = false;
              errors["email"] = "*Please enter your email.";
            }
      
            this.setState({
              errors: errors
            });
            return formIsValid;
      
        }

        return (
          <div>
            <header className="contact-header">

              <div className="container">
                  <div className="col-md-8 mx-auto">
                      <form name="registration" action="#" method="GET" onSubmit={submitUserRegistrationForm}>
                          <fieldset className="contact-form">
                              <h1 className="contact-intro">Contact us:</h1>
                              <input type="email" className="form-elements" id="email" name="email" placeholder="email..." value={this.state.fields.email} onChange={handleChange}/>
                              <div className="errMsg">{this.state.errors.email}</div>
                              <input type="text" className="form-elements" id="name" name="username" placeholder="name..." value={this.state.fields.username} onChange={handleChange}/>
                              <div className="errMsg">{this.state.errors.username}</div>
                              <input type="text" className="form-elements" id="subject" placeholder="subject..."/>       
                              <textarea className="form-elements" id="message" placeholder="message..." rows="3"></textarea>
                              <button type="submit" value="submit" className="form-elements contact-submit">submit</button>
                          </fieldset>
                      </form>
                  </div>
              </div>

            </header>
            <Footer />
          </div>
        )
    }
}

export default Contact