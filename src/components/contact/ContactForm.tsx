"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const INITIAL: FormData = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormData(INITIAL);
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      <Input
        id="name"
        name="name"
        label="Name"
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-white/90">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full bg-(--color-slate) border border-(--color-slate) text-white placeholder:text-(--color-muted) rounded-lg px-4 py-3 focus:outline-none focus:border-(--color-teal) focus:ring-1 focus:ring-(--color-teal)/30 transition-colors duration-200 resize-none"
        />
      </div>
      <Button variant="primary" size="md" type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
