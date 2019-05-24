import React, { Component } from 'react';
import './style.css'
import axios from 'axios';

const API_PATH = 'http://stroytehkom21.ru/api/contact/index.php';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      phone: '',
      message: this.phone + '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
    .then(result => {
      this.setState( { 
        mailSent: result.data.sent
      })
      console.log(this.state);
    })
    .catch(error => this.setState( { error: error.message } ));
  };

  render() {
    return (
      <div>
        <div className="main-form">
            <p className="d-flex justify-content-center fs-20 ff-semi text-center main-form-title">Оставьте заявку для бесплатной консультации</p>
            <form action="#">
              <input className="main-form-input form-control" type="text" id="fname" name="firstname" placeholder="Ваше имя*" 
              value={this.state.fname }
              onChange={e => this.setState({ fname: e.target.value })}
              />

              <input className="form-control main-form-input" type="text" id="phone" name="lastname" placeholder="Ваш телефон*" 
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
              />

              <input className="btn w-100 main-form-button" type="submit" onClick = {e => this.handleFormSubmit(e)}  value="Отправить" />

              {this.state.mailSent  &&
                <div className="main-form-sucsess">Thank you for contcting me.</div>
              }
            </form>
        </div>
        <div className="testform">
            <p>Contact Me</p>
            <div>
              <form action="#">
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." 
                value={this.state.fname }
                onChange={e => this.setState({ fname: e.target.value })}
                />

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." 
                value={this.state.lname}
                onChange={e => this.setState({ lname: e.target.value })}
                />
                
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email"
                value={this.state.email} 
                onChange={e => this.setState({ email: e.target.value })}
                />
                
                <label>Message</label>
                <textarea id="message" name="message" placeholder="Write something.."
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
                ></textarea>

                <input type="submit" onClick = {e => this.handleFormSubmit(e)}  value="Submit" />
                <div> 
                  {this.state.mailSent  &&
                    <div className="sucsess">Thank you for contcting me.</div>
                  }
                  {this.state.error  &&
                    <div className="error">Sorry we had some problems.</div>
                  }
                </div>
              </form>
            </div>
        </div>
      </div>



      
    );
  }
}

export default Form;