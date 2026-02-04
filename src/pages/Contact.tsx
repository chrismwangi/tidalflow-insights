import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Download
} from 'lucide-react';
import { addContactSubmission, exportDataFile } from '@/lib/dataStore';
import { toast } from 'sonner';
import { z } from 'zod';
import featuresBg from '@/assets/features-bg.jpg';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000)
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validated = contactSchema.parse(form);
      
      addContactSubmission({
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        company: validated.company,
        message: validated.message
      });
      
      setIsSubmitted(true);
      toast.success('Message sent successfully! We\'ll be in touch soon.');
      
      setTimeout(() => {
        setForm({ name: '', email: '', phone: '', company: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactForm> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section 
        className="relative py-28 overflow-hidden"
        style={{ 
          backgroundImage: `url(${featuresBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-97" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              Ready to transform your field operations? Let's discuss how TidalFlow can help your team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <GlassCard className="p-10">
              <h2 className="text-2xl font-bold text-primary-foreground mb-8">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-primary-foreground/70 mb-6">
                    We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={exportDataFile}
                    className="flex items-center gap-2 mx-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Download className="w-4 h-4" />
                    Download Data File
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-primary-foreground font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Mwangi"
                        className="mt-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12 rounded-xl"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1.5">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-primary-foreground font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.co.ke"
                        className="mt-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12 rounded-xl"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone" className="text-primary-foreground font-medium">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className="mt-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-primary-foreground font-medium">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="ACME Distributors"
                        className="mt-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-primary-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your field operations and how we can help..."
                      rows={5}
                      className="mt-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta w-full flex items-center justify-center gap-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>

            {/* Contact Info */}
            <div className="space-y-6">
              <GlassCard className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-foreground mb-2">Phone</h3>
                    <a 
                      href="tel:+254732325269"
                      className="text-primary hover:underline font-semibold text-lg"
                    >
                      +254 732 325 269
                    </a>
                    <p className="text-primary-foreground/60 text-sm mt-2">
                      Available Mon-Fri, 8am-6pm EAT
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:info@tidalflow.co.ke"
                      className="text-primary hover:underline font-semibold text-lg"
                    >
                      info@tidalflow.co.ke
                    </a>
                    <p className="text-primary-foreground/60 text-sm mt-2">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-foreground mb-2">Office</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      Ground Floor Room 021, Ruhan Plaza<br />
                      Kwa Hawa Sukari Main Ave<br />
                      P.O Box 1848, 00232 - Ruiru<br />
                      Kiambu County, Kenya
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-foreground mb-2">Business Hours</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <GlassCard variant="light" className="p-4 overflow-hidden">
              <iframe
                title="TidalFlow Tech Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d36.9603!3d-1.1485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDgnNTQuNiJTIDM2wrA1Nyc0Mi4xIkU!5e0!3m2!1sen!2ske!4v1600000000000!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
