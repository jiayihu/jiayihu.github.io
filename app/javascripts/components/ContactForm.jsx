import React from 'react';
import Notification from '../components/Notification';

export default class ContactForm extends React.Component {
  constructor() {
    super();
    this.notifMsg = '';
    this.state = {
      showNotification: false,
      error: false,
    };

    this.closeAlert = this.closeAlert.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.form.addEventListener('change', this.handleChange);
  }

  componentWillUnmount() {
    this.form.removeEventListener('change', this.handleChange);
  }

  closeAlert() {
    this.setState({
      showNotification: false,
      error: false,
    });
  }

  handleChange(e) {
    const target = e.target;

    if (target.value.length) {
      target.parentNode.classList.add('input--filled');
    } else {
      target.parentNode.classList.remove('input--filled');
    }
  }

  submitHandler(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const msg = this.msg.value;
    const data = new FormData(this.form);

    const error = this.validateData(name, email, msg);

    if (error === '') {
      this.submitMail(data);
    } else {
      this.notifMsg = `Invalid inputs.${error}`;
      this.setState({
        showNotification: true,
        error: true,
      });
    }
  }

  submitMail(data) {
    function handleError() {
      this.notifMsg = `There is a temporary problem with the mail deliver. Please use your own
      mail client just for this time!`;
      this.setState({
        showNotification: true,
        error: true,
      });
    }

    const req = new XMLHttpRequest();
    req.open('POST', 'https://formspree.io/steph.jiayi@gmail.com');
    req.addEventListener('load', (e) => {
      if ((e.target.status >= 200) && (e.target.status << 400)) {
        this.notifMsg = 'Your message has been delivered. I\'ll reply as soon as possible!';
        this.setState({
          showNotification: true,
          error: false,
        });
      } else {
        handleError.call(this);
      }
    });
    req.addEventListener('error', () => {
      handleError.call(this);
    });
    req.send(data);
  }

  validateData(name, email, msg) {
    const emailRegex = /\S+@\S+\.\S+/;
    const isNameValid = (name.length > 0) && (name.length < 32);
    const isEmailValid = emailRegex.test(email);
    const isMsgValid = msg.length > 10;

    let error = '';
    error += !isNameValid ? ' Name have must be between 0 and 32 characters.' : '';
    error += !isEmailValid ? ' Email must be valid.' : '';
    error += !isMsgValid ? ' The message should contains at least 10 characters.' : '';

    return error;
  }

  render() {
    return (
      <form
        className="contact-form"
        autoComplete="off"
        method="POST"
        ref={ (c) => (this.form = c) }
        onSubmit={this.submitHandler}
      >
        <div className="col-sm-6">
          <span className="input input--hoshi">
            <input
              className="contact-form__name input__field input__field--hoshi"
              id="contact-form__name"
              defaultValue="a@a"
              name="name"
              ref={ (c) => (this.name = c) }
              required
              type="text"
            />
            <label className="input__label input__label--hoshi" htmlFor="contact-form__name">
              <span className="input__label-content input__label-content--hoshi">First Name</span>
            </label>
          </span>
        </div>

        <div className="col-sm-6">
          <span className="input input--hoshi">
            <input
              className="contact-form__email input__field input__field--hoshi"
              id="contact-form__email"
              defaultValue="luke@gmail.com"
              name="_replyto"
              ref={ (c) => (this.email = c) }
              required
              type="email"
            />
            <label className="input__label input__label--hoshi" htmlFor="contact-form__email">
              <span className="input__label-content input__label-content--hoshi">Email</span>
            </label>
          </span>
        </div>

        <span className="contact-form__textarea input input--hoshi">
          <textarea
            className="contact-form__msg input__field input__field--hoshi"
            id="contact-form__msg"
            defaultValue="Hello how are you?:D"
            name="msg"
            ref={ (c) => (this.msg = c) }
            required
          />
          <label className="input__label input__label--hoshi" htmlFor="contact-form__msg">
            <span className="input__label-content input__label-content--hoshi">Message</span>
          </label>
        </span>

        <input type="text" name="_gotcha" style={ { display: 'none' } } />
        <input className="contact-form__send btn" type="submit" value="SEND" />

        <Notification
          close={this.closeAlert}
          isError={this.state.error}
          show={this.state.showNotification}
          text={this.notifMsg}
        />
      </form>
    );
  }
}
