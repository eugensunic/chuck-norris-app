import React from "react";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <span className="">
            validation exists (duplicates, invalid mail cannot be added)
          </span>
        </li>
        <li>
          <span className="">emails are sorted</span>
        </li>
        <li>
          <span className="">emails can be deleted</span>
        </li>
        <li>
          example of Chuck Norris
          <a href="http://api.icndb.com/jokes/random/" target="_blank">
            &nbsp;joke
          </a>
        </li>
        <li>reload deletes all added emails</li>
        <li>global notifications upon sending mails</li>
      </ul>
    </div>
  );
}

export default Footer;
