import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact - Mousami Reddy Portfolio</title>
        <meta
          name="description"
          content="Get in touch with Karri Mousami Reddy, a Software and Game Developer."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32"
      >
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-primary/80">
              Let's connect and discuss your next project!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg">
                <CardHeader>
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    Contact Details
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60">Phone</p>
                      <p className="text-primary">+91 7995115212</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60">Email</p>
                      <p className="text-primary">mousamiredddy@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60">Address</p>
                      <p className="text-primary">
                        Kadubeesanahalli, Marathahalli
                      </p>
                      <p className="text-primary">Bangalore, 560103</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg">
                <CardContent className="pt-6">
                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-primary/80 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 bg-white/20 rounded-lg border border-white/30 focus:border-primary focus:outline-none text-primary shadow-inner backdrop-blur-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-primary/80 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 bg-white/20 rounded-lg border border-white/30 focus:border-primary focus:outline-none text-primary shadow-inner backdrop-blur-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-primary/80 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="w-full px-4 py-2 bg-white/20 rounded-lg border border-white/30 focus:border-primary focus:outline-none text-primary shadow-inner backdrop-blur-sm"
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        variant="default"
                        className="w-full backdrop-blur-md bg-primary/90 text-white hover:bg-primary rounded-lg shadow-lg flex justify-center items-center"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="p-4 bg-white/20 rounded-full w-16 h-16 mx-auto mb-4 shadow-inner backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-primary/80">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
