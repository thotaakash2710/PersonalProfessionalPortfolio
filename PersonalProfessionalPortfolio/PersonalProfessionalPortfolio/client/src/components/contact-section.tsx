import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { portfolioConfig } from "@/config/portfolio-config";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { contact, personal } = portfolioConfig;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{contact.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">{contact.description}</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(217.2,91.2%,59.8%)]/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-[hsl(217.2,91.2%,59.8%)] text-lg" />
                </div>
                <div>
                  <p className="font-medium text-primary">Email</p>
                  <p className="text-slate-600">{personal.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(217.2,91.2%,59.8%)]/10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-[hsl(217.2,91.2%,59.8%)] text-lg" />
                </div>
                <div>
                  <p className="font-medium text-primary">Phone</p>
                  <p className="text-slate-600">{personal.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(217.2,91.2%,59.8%)]/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-[hsl(217.2,91.2%,59.8%)] text-lg" />
                </div>
                <div>
                  <p className="font-medium text-primary">Location</p>
                  <p className="text-slate-600">{personal.location}</p>
                </div>
              </div>
            </div>

            <img 
              src={contact.image} 
              alt="Professional working environment with computer and coffee" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    {...form.register("firstName")}
                    className="mt-2"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    {...form.register("lastName")}
                    className="mt-2"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="mt-2"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  {...form.register("subject")}
                  className="mt-2"
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  {...form.register("message")}
                  className="mt-2 resize-vertical"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-[hsl(217.2,91.2%,59.8%)] hover:bg-blue-600 text-white"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
