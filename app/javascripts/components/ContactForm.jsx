import React from 'react';

export default class ContactForm extends React.Component {
  componentDidMount() {
    this.form.addEventListener('change', this.handleChange);
  }

  componentWillUnmount() {
    this.form.removeEventListener('change', this.handleChange);
  }

  handleChange(e) {
    const target = e.target;
    console.log(e.target.value.length);

    if (target.value.length) {
      target.parentNode.classList.add('input--filled');
    } else {
      target.parentNode.classList.remove('input--filled');
    }
  }

  render() {
    return (
      <form
        className="contact-form"
        action="https://formspree.io/contact@jiayihu.me"
        autoComplete="off"
        method="POST"
        ref={ (c) => (this.form = c) }
      >
        <div className="col-sm-6">
          <span className="input input--hoshi">
            <input
              className="contact-form__name input__field input__field--hoshi"
              type="text"
              id="contact-form__name"
              name="name"
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
              type="email"
              id="contact-form__email"
              name="_replyto"
            />
            <label className="input__label input__label--hoshi" htmlFor="contact-form__email">
              <span className="input__label-content input__label-content--hoshi">Email</span>
            </label>
          </span>
        </div>

        <span className="contact-form__textarea input input--hoshi">
          <textarea className="contact-form__msg input__field input__field--hoshi" id="contact-form__msg" name="msg" />
          <label className="input__label input__label--hoshi" htmlFor="contact-form__msg">
            <span className="input__label-content input__label-content--hoshi">Message</span>
          </label>
        </span>

        <input type="text" name="_gotcha" style={ { display: 'none' } } />
        <input className="contact-form__send btn" type="submit" value="SEND" />
      </form>
    );
  }
}
