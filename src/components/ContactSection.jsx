
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const form = e.currentTarget;

      const response = await fetch(
        "https://formspree.io/f/xgaoznob",
        {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.errors
            ?.map((error) => error.message)
            .join(", ") || "Unable to send your message."
        );
      }

      toast({
        title: "Message sent!",
        description:
          "Thanks for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("Formspree submission failed:", error);

      toast({
        title: "Failed to send message",
        description:
          error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss an opportunity?
          Feel free to reach out. I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:shahidahamedsyed@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    shahidahamedsyed@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919100882336"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 91008 82336
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Guntur, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">
                Connect With Me
              </h4>

              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/syed-shahid-ahamed-0717423a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://github.com/SyedShahidAhamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 1.99 3.1 1.42.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.6 5.25-5.09 5.53.4.35.75 1.03.75 2.08v3.17c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
                  </svg>
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>

                <a
                  href="https://twitch.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitch"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  placeholder="Hello, I'd like to discuss..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-y"
                />
              </div>

              {/* Optional subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
