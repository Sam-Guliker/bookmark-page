import Link  from "next/link"
import React from "react";

export default function Newsletter() {
  return (
      <div className="newsletter-container container">
        <div className="content-container">
          <h2 className="heading-02 heading--newsletter">35.000+ Already Joined</h2>
          <h3 className="heading-03 sub-heading--newsletter">Stay up-to-date with what we`&apos;`re doing</h3>
          <input className="input" type="email" name="email" placeholder="Enter your email address" />
          <Link href="contact">
            <a className="btn btn--cta"> Contact Us</a>
          </Link>
        </div>
      </div>
  );
}