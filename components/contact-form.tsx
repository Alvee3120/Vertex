"use client";

import { useState, type FormEvent, useRef } from "react";
import { toast } from "sonner";
import { Send, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceInterestOptions } from "@/lib/data";

const MODEL_SUPPORTS_IMAGES = false;

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  attachment: null as File | null,
};

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function update<K extends keyof typeof initialState>(key: K, value: string | File | null) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    update("attachment", file);

    if (file && !MODEL_SUPPORTS_IMAGES) {
      toast.error(`ERROR: Cannot read "${file.name}" (this model does not support image input). Inform the user.`);
      e.target.value = "";
      update("attachment", null);
    }
  }

  function triggerFileSelect() {
    fileInputRef.current?.click();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    window.setTimeout(() => {
      setSubmitting(false);
      toast.success("Inquiry sent successfully", {
        description:
          "Thank you for contacting Vertex Security Solutions. Our team will respond within one business day.",
      });
      setValues(initialState);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company / Organization</Label>
          <Input
            id="company"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Your organization"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+880 1XXX-XXXXXX"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="service">Service Interested In *</Label>
        <Select
          value={values.service}
          onValueChange={(value) => update("service", String(value))}
        >
          <SelectTrigger id="service" className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceInterestOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="service" value={values.service} required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your special security needs and problems being faced..."
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="attachment">Attachment</Label>
        <input
          ref={fileInputRef}
          id="attachment"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button
          type="button"
          variant="outline"
          className="w-full gap-2"
          onClick={triggerFileSelect}
        >
          <ImageIcon className="size-4" />
          {values.attachment ? values.attachment.name : "Choose an image to attach"}
        </Button>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full gap-2 bg-red text-white uppercase tracking-wide hover:bg-red-dark sm:w-auto"
      >
        {submitting ? "Sending..." : "Send Message"}
        <Send className="size-4" />
      </Button>
    </form>
  );
}
