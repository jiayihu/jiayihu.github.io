import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <section className="contact container" >
        <div>
          <h2 className="contact__heading">CONTACT</h2>
          <div className="col-sm-6">
            <p>If you are interested in sharing your your ideas or talking with me for any
            reason, feel free to contact me sending a pigeon post or using one of the links on the right.</p>
            <p>
              <button className="contact__modal-btn btn btn--wapasha">Send a pigeon post</button>
            </p>
          </div>
          <div className="col-sm-4 col-sm-offset-2">
            <ul className="contacts-list">
              <li>
                <a className="link" href="mailto:contact@jiayihu.me" target="_blank">Email</a>
              </li>
              <li>
                <a className="link" href="https://github.com/jiayihu" target="_blank">Github</a>
              </li>
              <li>
                <a className="link" href="https://twitter.com/steph_jiayi/" target="_blank">Twitter</a>
              </li>
              <li>
                <a className="link" href="https://www.goodreads.com/jiayihu" target="_blank">Goodreads</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
