import React from "react";
import Image from "next/image";
import { HappyClientsBadge } from "@/app/component/HappyClientsBadge";

export const ContactUsDetails = () => {
  return (
    <div className="contact-details text-secondary">
      <Image
        src="/midday.jpg"
        alt="midday"
        width={100}
        height={100}
        className="rounded-full border-2 border-white mb-2"
      />
      <h3 className="mb-2">
        Talk to our <span className="text-green-500">programming expert</span>
      </h3>
      <p>
        <b>Antanas, together with his team,</b> has helped dozens of companies
        create unique, fast, user-friendly, and converting websites.
        <br />
        <br />
        <b>We are open, attentive, and always willing to help.</b> If you have
        any questions, we are just a call or a meeting away.
        <b>Antanas, together with his team,</b> has helped dozens of companies
        create unique, fast, user-friendly, and converting websites.
        <br />
        <br />
        <b>We are open, attentive, and always willing to help.</b> If you have
        any questions, we are just a call or a meeting away.
        <b>Antanas, together with his team,</b> has helped dozens of companies
        create unique, fast, user-friendly, and converting websites.
        <br />
        <br />
        <b>We are open, attentive, and always willing to help.</b> If you have
        any questions, we are just a call or a meeting away.
        <b>Antanas, together with his team,</b> has helped dozens of companies
        create unique, fast, user-friendly, and converting websites.
        <br />
        <br />
        <b>We are open, attentive, and always willing to help.</b> If you have
        any questions, we are just a call or a meeting away.
        <b>Antanas, together with his team,</b> has helped dozens of companies
        create unique, fast, user-friendly, and converting websites.
        <br />
        <br />
      </p>
      <div className="mt-5">
        <HappyClientsBadge />
      </div>
    </div>
  );
};

export default ContactUsDetails;
