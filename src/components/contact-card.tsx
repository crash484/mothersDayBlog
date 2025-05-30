"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactCard() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    // For now, just simulate sending
    console.log("Sending message:", { email, message });
    setSubmitted(true);

    // TODO: replace with real email sending logic (SMTP API or form handler)
  };

  if (submitted) {
    return (
      <Card className="p-6 mt-4">
        <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
        <p>We’ve received your message. We'll get back to you soon.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 mt-4 space-y-4">
      <h3 className="text-lg font-semibold">Contact Me</h3>
      <p>📬 Email me directly: <a href="mailto:jshashwat032@gmail.com" className="text-blue-600 underline">jshashwat032@gmail.com</a></p>
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSubmit}>Send</Button>
    </Card>
  );
}
