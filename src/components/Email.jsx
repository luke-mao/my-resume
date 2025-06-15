import React, { useEffect, useState } from 'react'
import { Mail, AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import isEmail from 'validator/lib/isEmail';
import { Textarea } from "@/components/ui/textarea"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import emailjs from 'emailjs-com';

export default function Email() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // show the alert
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [alertVariant, setAlertVariant] = useState("info");

  // dialog open
  const [dialogOpen, setDialogOpen] = useState(false);

  // when the open is true, after 2 seconds, close the alert
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const sendMessage = async () => {
    // the name, email, message cannot be empty
    if (!name || !email || !message) {
      setOpen(true);
      setAlertTitle("Missing Information");
      setAlertMessage("Please fill in all fields before sending your message.");
      setAlertVariant("destructive");
      return;
    }

    // validate the email
    if (!isEmail(email)) {
      setOpen(true);
      setAlertTitle("Invalid Email");
      setAlertMessage("Please enter a valid email address.");
      setAlertVariant("destructive");
      return;
    }

    // compose the template variables
    const params = { name, email, message };

    // get the email public key, service id, template id from environment variables
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    try {
      await emailjs.send(serviceId, templateId, params, publicKey);
      setOpen(true);
      setAlertTitle("Message Sent");
      setAlertMessage("Your message has been sent successfully. I will get back to you as soon as possible.");
      setAlertVariant("success");      

      // reset the form fields, and close the dialog
      setName('');
      setEmail('');
      setMessage('');
      
      // after 1 second, close the dialog
      setTimeout(() => {
        setDialogOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      setOpen(true);
      setAlertTitle("Error Sending Message");
      setAlertMessage("There was an error sending your message. Please try again later.");
      setAlertVariant("destructive");
    }
  };

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline"
            className="bg-secondary p-4 rounded-full shadow-lg cursor-pointer hover:scale-125 transition-transform hover:bg-secondary/80 focus:outline-none"
          >
            <Mail className="w-10 h-10 text-black" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[95vw] max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogDescription>
              If you have any questions or would like to get in touch to offer me a job opportunity,
              feel free to submit the form below or send an email to jinjie.luke.mao@gmail.com
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
              />
            </div>
            {open && (
              <Alert variant={alertVariant} className="mb-4">
                {alertVariant === "destructive" ? (
                  <AlertCircleIcon className="h-4 w-4" />
                ) : (
                  <CheckCircle2Icon className="h-4 w-4" />
                )}
                <AlertTitle>{alertTitle}</AlertTitle>
                <AlertDescription>{alertMessage}</AlertDescription>
              </Alert>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">Cancel</Button>
            </DialogClose>
            <Button onClick={sendMessage} className="cursor-pointer">
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
