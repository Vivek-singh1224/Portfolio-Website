import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 4 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Contact information
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9321295911",
    link: "tel:+919321295911",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    icon: Mail,
    title: "Email",
    value: "1224vivek@gmail.com",
    link: "mailto:1224vivek@gmail.com",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Noida, UP, India",
    link: null,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  }
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Form submission handler
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default"
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="space-y-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="inline-block text-[#5D43F6] text-sm font-semibold tracking-wider uppercase">
            Get in Touch
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <div className="mx-auto w-24 h-1 bg-[#5D43F6]"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Have a project in mind or want to chat? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information Card */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 h-full bg-background/50 backdrop-blur-sm border border-gray-100/20">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`mr-4 p-3 rounded-xl ${item.bgColor}`}>
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-gray-500 hover:text-[#5D43F6] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-500">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 bg-background/50 backdrop-blur-sm border border-gray-100/20">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-white/80 border-gray-200 rounded-md px-4 py-3 focus-visible:ring-[#5D43F6]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              className="bg-white/80 border-gray-200 rounded-md px-4 py-3 focus-visible:ring-[#5D43F6]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Subject"
                              className="bg-white/80 border-gray-200 rounded-md px-4 py-3 focus-visible:ring-[#5D43F6]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              rows={5}
                              className="bg-white/80 border-gray-200 rounded-md px-4 py-3 focus-visible:ring-[#5D43F6] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#5D43F6] hover:bg-[#7B61FF] text-white py-3 px-4 rounded-md shadow-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : (
                        <span className="flex items-center justify-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
