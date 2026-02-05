 import { useEffect, useRef, useState } from 'react';
 import { Layout } from '@/components/layout/Layout';
 import {
   Book,
   Code,
   Settings,
   Puzzle,
   Search,
   ExternalLink,
   Play,
   Globe,
   Database,
   Smartphone,
   BarChart3,
   Zap,
   MapPin,
   Camera,
   Users,
   CheckCircle,
   AlertCircle,
   Lightbulb,
   Star,
   ArrowRight,
   MessageCircle,
   Phone,
   Mail,
   Clock,
   FileText,
   Video,
   Headphones,
   type LucideIcon
 } from 'lucide-react';
 import { Link } from 'react-router-dom';
 
 interface ContentBlock {
   title: string;
   icon: LucideIcon;
   items?: string[];
   points?: string[];
   body?: string;
   code?: boolean;
   endpoints?: { method: string; path: string; desc: string; params?: string[] }[];
   features?: string[];
   steps?: string[];
 }
 
 interface ContentSection {
   title: string;
   lead: string;
   blocks: ContentBlock[];
 }
 
 export default function Help() {
   const [activeSection, setActiveSection] = useState<string>('getting-started');
   const [query, setQuery] = useState<string>('');
 
   const content: Record<string, ContentSection> = {
     'getting-started': {
       title: 'Getting Started',
       lead: 'A comprehensive guide to get you up and running with TidalFlow quickly and efficiently.',
       blocks: [
         {
           title: 'Quick Setup Guide',
           icon: Zap,
           items: [
             'Create your TidalFlow account and verify your email address',
             'Set up your organization profile and team structure',
             'Configure outlet locations and geofence boundaries',
             'Download the mobile app and complete your first check-in'
           ]
         },
         {
           title: 'Mobile App Installation',
           icon: Smartphone,
           items: [
             'Download from App Store (iOS) or Play Store (Android)',
             'Enable location services and camera permissions',
             'Log in with your TidalFlow credentials',
             'Test check-in functionality at a nearby outlet'
           ]
         },
         {
           title: 'Initial Configuration',
           icon: Settings,
           items: [
             'Import your outlet database or add manually',
             'Set up user roles and permissions',
             'Configure notification preferences',
             'Customize reporting templates'
           ]
         }
       ]
     },
     features: {
       title: 'Core Features',
       lead: 'Explore the powerful features that make TidalFlow the leading field sales platform.',
       blocks: [
         {
           title: 'Geofenced Outlets',
           icon: MapPin,
           points: [
             'Automatic check-in/out based on GPS geofencing',
             'Visit duration tracking and compliance reporting',
             'Real-time location verification',
             'Customizable geofence radius settings'
           ]
         },
         {
           title: 'Share of Shelf Analytics',
           icon: Camera,
           points: [
             'AI-powered photo analysis and product recognition',
             'Competitor presence detection and shelf metrics',
             'Automated compliance checking',
             'Historical trend analysis and insights'
           ]
         },
         {
           title: 'Advanced Analytics',
           icon: BarChart3,
           points: [
             'Real-time performance dashboards',
             'Customizable KPI tracking',
             'Predictive analytics and forecasting',
             'Export capabilities (PDF, Excel, CSV)'
           ]
         },
         {
           title: 'Route Optimization',
           icon: Globe,
           points: [
             'AI-powered route planning',
             'Traffic-aware optimization',
             'Multi-stop efficiency calculations',
             'Real-time route adjustments'
           ]
         }
       ]
     },
     api: {
       title: 'API Reference',
       lead: 'Complete API documentation for developers integrating with TidalFlow.',
       blocks: [
         {
           title: 'Authentication',
           icon: AlertCircle,
           body: 'All API requests require authentication using Bearer tokens:\n\nAuthorization: Bearer YOUR_API_KEY\n\nAPI keys can be generated from your dashboard settings.',
           code: true
         },
         {
           title: 'Base URL',
           icon: Globe,
           body: 'https://api.tidalflow.co.ke/v1',
           code: true
         },
         {
           title: 'Core Endpoints',
           icon: Code,
           endpoints: [
             { method: 'GET', path: '/api/v1/outlets', desc: 'Retrieve outlet list', params: ['limit', 'offset', 'status', 'region'] },
             { method: 'POST', path: '/api/v1/visits', desc: 'Create new visit record', params: ['outlet_id', 'user_id', 'location', 'timestamp'] },
             { method: 'GET', path: '/api/v1/analytics', desc: 'Get analytics data', params: ['date_range', 'metrics', 'filters'] },
             { method: 'POST', path: '/api/v1/photos', desc: 'Upload visit photos', params: ['visit_id', 'photo_data', 'metadata'] }
           ]
         },
         {
           title: 'Rate Limits',
           icon: Clock,
           body: 'API requests are limited to:\n• 1000 requests per hour for standard plans\n• 5000 requests per hour for enterprise plans\n• Burst limit of 100 requests per minute'
         }
       ]
     },
     integrations: {
       title: 'Integrations',
       lead: 'Connect TidalFlow with your existing business systems and tools.',
       blocks: [
         { 
           title: 'Google Workspace', 
           icon: Globe, 
           features: [
             'Google Maps integration for routing and location services',
             'Google Drive automatic backup for photos and documents',
             'Google Calendar sync for visit scheduling',
             'Gmail integration for automated reporting'
           ]
         },
         { 
           title: 'CRM Systems', 
           icon: Users, 
           features: [
             'Salesforce bi-directional data sync',
             'HubSpot contact and deal integration',
             'Microsoft Dynamics 365 connectivity',
             'Custom CRM API integrations'
           ]
         },
         {
           title: 'ERP & Accounting',
           icon: Database,
           features: [
             'SAP Business One integration',
             'QuickBooks Online sync',
             'Sage accounting connectivity',
             'Custom ERP integrations'
           ]
         }
       ]
     },
     configuration: {
       title: 'Configuration',
       lead: "Customize TidalFlow settings to match your organization's specific needs.",
       blocks: [
         { 
           title: 'Organization Settings', 
           icon: Settings, 
           items: [
             'Company branding and logo customization',
             'Timezone and regional settings',
             'Data retention policies',
             'Notification preferences'
           ]
         },
         { 
           title: 'User Management', 
           icon: Users, 
           items: [
             'Role-based access control',
             'Single Sign-On (SSO) configuration',
             'Multi-factor authentication setup',
             'User onboarding workflows'
           ]
         },
         {
           title: 'Mobile App Settings',
           icon: Smartphone,
           items: [
             'Offline data sync preferences',
             'Photo quality and compression settings',
             'GPS accuracy requirements',
             'Battery optimization options'
           ]
         }
       ]
     },
     troubleshooting: {
       title: 'Troubleshooting',
       lead: 'Quick solutions to common issues and problems you might encounter.',
       blocks: [
         { 
           title: 'GPS & Location Issues', 
           icon: MapPin, 
           steps: [
             'Ensure location services are enabled in device settings',
             'Check GPS signal strength and move to open area if needed',
             'Adjust geofence radius if check-ins are inconsistent',
             'Restart the app and try again'
           ]
         },
         { 
           title: 'Photo Upload Problems', 
           icon: Camera, 
           steps: [
             'Verify internet connection is stable',
             'Check camera permissions in app settings',
             'Reduce photo size if uploads are failing',
             'Clear app cache and try again'
           ]
         },
         {
           title: 'Sync Issues',
           icon: Database,
           steps: [
             'Check internet connectivity',
             'Force sync from app settings menu',
             'Log out and log back in',
             'Contact support if issues persist'
           ]
         },
         {
           title: 'Performance Issues',
           icon: Zap,
           steps: [
             'Close other apps to free up memory',
             'Update to the latest app version',
             'Clear app cache and data',
             'Restart your device'
           ]
         }
       ]
     }
   };
 
   const navigationSections = [
     { id: 'getting-started', title: 'Getting Started', icon: Play, desc: 'Quick start & setup guide' },
     { id: 'features', title: 'Features', icon: Star, desc: 'Platform capabilities' },
     { id: 'api', title: 'API Reference', icon: Code, desc: 'Developer documentation' },
     { id: 'integrations', title: 'Integrations', icon: Puzzle, desc: 'Connect your systems' },
     { id: 'configuration', title: 'Configuration', icon: Settings, desc: 'Customize your setup' },
     { id: 'troubleshooting', title: 'Troubleshooting', icon: AlertCircle, desc: 'Solve common issues' }
   ];
 
   const quickLinks = [
     { title: 'Video Tutorials', icon: Video, href: '#tutorials' },
     { title: 'API Documentation', icon: Code, href: '#api' },
     { title: 'Mobile App Guide', icon: Smartphone, href: '#mobile' },
     { title: 'Integration Setup', icon: Puzzle, href: '#integrations' },
     { title: 'Best Practices', icon: Lightbulb, href: '#best-practices' },
     { title: 'Release Notes', icon: FileText, href: '#releases' }
   ];
 
   const supportOptions = [
     {
       title: 'Live Chat Support',
       description: 'Get instant help from our support team',
       icon: MessageCircle,
       action: 'Start Chat',
       color: 'from-primary to-chart-2',
       available: '24/7'
     },
     {
       title: 'Phone Support',
       description: 'Speak directly with our technical experts',
       icon: Phone,
       action: 'Call Now',
       color: 'from-chart-2 to-primary',
       available: 'Mon-Fri 8AM-6PM'
     },
     {
       title: 'Email Support',
       description: 'Send detailed questions and get comprehensive answers',
       icon: Mail,
       action: 'Send Email',
       color: 'from-chart-3 to-destructive',
       available: '< 2 hour response'
     },
     {
       title: 'Training Sessions',
       description: 'Schedule personalized training for your team',
       icon: Headphones,
       action: 'Book Session',
       color: 'from-chart-4 to-chart-5',
       available: 'Custom scheduling'
     }
   ];
 
   const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
 
   useEffect(() => {
     if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
 
     const observer = new IntersectionObserver(
       (entries) => {
         const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
         if (visible.length) {
           const id = visible[0].target.getAttribute('data-id') || undefined;
           if (id) setActiveSection(id);
         }
       },
       { root: null, rootMargin: '0px 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
     );
 
     Object.values(sectionRefs.current).forEach((ref) => {
       if (ref) observer.observe(ref);
     });
 
     return () => observer.disconnect();
   }, []);
 
   const filteredNav = navigationSections.filter((s) => {
     if (!query.trim()) return true;
     const q = query.toLowerCase();
     const sec = content[s.id];
     return s.title.toLowerCase().includes(q) || (sec?.lead && sec.lead.toLowerCase().includes(q));
   });
 
   const goTo = (id: string) => {
     const node = sectionRefs.current[id];
     if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
     setActiveSection(id);
   };
 
   return (
     <Layout>
       {/* Header */}
       <section className="bg-secondary py-8 border-b border-white/10">
         <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
             <div>
               <h1 className="text-2xl font-bold text-white">Documentation</h1>
               <p className="text-white/70">Everything you need to know about TidalFlow</p>
             </div>
             <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative flex-1 md:flex-none">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                 <input
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   placeholder="Search documentation..."
                   className="pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm w-full md:w-80 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/50"
                 />
               </div>
               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-medium text-white">
                 <ExternalLink className="w-4 h-4" />
                 GitHub
               </a>
             </div>
           </div>
         </div>
       </section>
 
       {/* Main Layout */}
       <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Left Navigation */}
         <aside className="lg:col-span-3">
           <div className="sticky top-36 space-y-6">
             <div className="glass-card-light rounded-2xl p-6">
               <div className="text-sm font-bold text-foreground mb-4 flex items-center">
                 <Book className="h-4 w-4 mr-2 text-primary" />
                 Documentation
               </div>
               <nav className="space-y-2">
                 {filteredNav.map((s) => {
                   const Icon = s.icon;
                   return (
                     <button
                       key={s.id}
                       onClick={() => goTo(s.id)}
                       className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                         activeSection === s.id
                           ? 'bg-primary/10 border-2 border-primary/30 text-primary font-semibold'
                           : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                       }`}
                     >
                       <Icon className="w-5 h-5 flex-shrink-0" />
                       <div>
                         <div className="font-medium">{s.title}</div>
                         <div className="text-xs opacity-75">{s.desc}</div>
                       </div>
                     </button>
                   );
                 })}
               </nav>
             </div>
 
             <div className="glass-card-light rounded-2xl p-6 hidden lg:block">
               <div className="text-sm font-bold text-foreground mb-4 flex items-center">
                 <Zap className="h-4 w-4 mr-2 text-chart-3" />
                 Quick Links
               </div>
               <div className="space-y-2">
                 {quickLinks.map((link, index) => {
                   const Icon = link.icon;
                   return (
                     <a
                       key={index}
                       href={link.href}
                       className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all group"
                     >
                       <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                       <span>{link.title}</span>
                       <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                     </a>
                   );
                 })}
               </div>
             </div>
           </div>
         </aside>
 
         {/* Main Content */}
         <main className="lg:col-span-6">
           <div className="space-y-16">
             {Object.entries(content).map(([id, sec]) => (
               <section 
                 key={id} 
                 id={id} 
                 data-id={id} 
                 ref={(el) => { sectionRefs.current[id] = el; }} 
                 className="scroll-mt-48"
               >
                 <div className="mb-8">
                   <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{sec.title}</h2>
                   <p className="text-lg text-muted-foreground leading-relaxed">{sec.lead}</p>
                 </div>
 
                 <div className="space-y-8">
                   {sec.blocks.map((block, idx) => {
                     const Icon = block.icon;
                     return (
                       <div key={idx} className="glass-card-light rounded-2xl p-8 card-hover">
                         <div className="flex items-start gap-6">
                           <div className="bg-gradient-to-r from-primary to-chart-2 p-3 rounded-xl shadow-lg flex-shrink-0">
                             <Icon className="w-6 h-6 text-white" />
                           </div>
                           <div className="flex-1">
                             {block.title && (
                               <h3 className="text-xl font-bold text-foreground mb-4">{block.title}</h3>
                             )}
 
                             {block.body && (
                               <div className={block.code ? 'space-y-4' : ''}>
                                 <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{block.body}</p>
                                 {block.code && (
                                   <pre className="overflow-x-auto rounded-xl border bg-secondary text-white p-4 text-sm">
                                     <code>{block.body}</code>
                                   </pre>
                                 )}
                               </div>
                             )}
 
                             {block.items && (
                               <ol className="space-y-3">
                                 {block.items.map((item, i) => (
                                   <li key={i} className="flex items-start gap-4">
                                     <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary to-chart-2 text-white text-sm font-bold rounded-full flex items-center justify-center">
                                       {i + 1}
                                     </span>
                                     <span className="text-muted-foreground leading-relaxed">{item}</span>
                                   </li>
                                 ))}
                               </ol>
                             )}
 
                             {block.points && (
                               <div className="grid gap-3">
                                 {block.points.map((point, i) => (
                                   <div key={i} className="flex items-start gap-3">
                                     <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                     <span className="text-muted-foreground leading-relaxed">{point}</span>
                                   </div>
                                 ))}
                               </div>
                             )}
 
                             {block.endpoints && (
                               <div className="space-y-4">
                                 {block.endpoints.map((ep, i) => (
                                   <div key={i} className="bg-accent rounded-xl border border-border p-4">
                                     <div className="flex items-center gap-3 mb-2">
                                       <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                                         ep.method === 'GET' ? 'bg-primary/20 text-primary' : 
                                         ep.method === 'POST' ? 'bg-chart-2/20 text-chart-2' :
                                         'bg-chart-3/20 text-chart-3'
                                       }`}>
                                         {ep.method}
                                       </span>
                                       <code className="font-mono text-sm bg-card px-2 py-1 rounded border border-border text-foreground">{ep.path}</code>
                                     </div>
                                     <p className="text-muted-foreground mb-2">{ep.desc}</p>
                                     {ep.params && (
                                       <div className="text-xs text-muted-foreground">
                                         <span className="font-semibold">Parameters:</span> {ep.params.join(', ')}
                                       </div>
                                     )}
                                   </div>
                                 ))}
                               </div>
                             )}
 
                             {block.features && (
                               <div className="grid gap-3">
                                 {block.features.map((feature, i) => (
                                   <div key={i} className="flex items-start gap-3">
                                     <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                     <span className="text-muted-foreground leading-relaxed">{feature}</span>
                                   </div>
                                 ))}
                               </div>
                             )}
 
                             {block.steps && (
                               <div className="grid gap-3">
                                 {block.steps.map((step, i) => (
                                   <div key={i} className="flex items-start gap-4">
                                     <div className="w-7 h-7 rounded-full bg-gradient-to-r from-chart-3 to-destructive text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                                       {i + 1}
                                     </div>
                                     <span className="text-muted-foreground leading-relaxed">{step}</span>
                                   </div>
                                 ))}
                               </div>
                             )}
                           </div>
                         </div>
                       </div>
                     );
                   })}
                 </div>
               </section>
             ))}
 
             {/* Support CTA */}
             <div className="hero-gradient rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-primary/30" />
               <div className="text-center relative z-10">
                 <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
                 <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                   Our support team is here to help you succeed with TidalFlow. Choose the support option that works best for you.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <Link to="/contact">
                     <button className="btn-cta w-full">
                       Contact Support
                     </button>
                   </Link>
                   <button className="btn-outline-light w-full">
                     Schedule Training
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </main>
 
         {/* Right Sidebar */}
         <aside className="lg:col-span-3 hidden lg:block">
           <div className="sticky top-36 space-y-6">
             {/* Table of Contents */}
             <div className="glass-card-light rounded-2xl p-6">
               <div className="text-sm font-bold text-foreground mb-4 flex items-center">
                 <FileText className="h-4 w-4 mr-2 text-chart-2" />
                 Table of Contents
               </div>
               <nav className="space-y-2">
                 {Object.entries(content).map(([id, sec]) => (
                   <button
                     key={id}
                     onClick={() => goTo(id)}
                     className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                       activeSection === id
                         ? 'bg-primary/10 text-primary font-semibold border border-primary/30'
                         : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                     }`}
                   >
                     {sec.title}
                   </button>
                 ))}
               </nav>
             </div>
 
             {/* Support Options */}
             <div className="glass-card-light rounded-2xl p-6">
               <div className="text-sm font-bold text-foreground mb-4 flex items-center">
                 <Headphones className="h-4 w-4 mr-2 text-primary" />
                 Get Support
               </div>
               <div className="space-y-4">
                 {supportOptions.map((option, index) => {
                   const Icon = option.icon;
                   return (
                     <div
                       key={index}
                       className="group p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
                     >
                       <div className="flex items-start gap-3">
                         <div className={`bg-gradient-to-r ${option.color} w-10 h-10 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                           <Icon className="h-5 w-5 text-white" />
                         </div>
                         <div className="flex-1">
                           <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                             {option.title}
                           </h4>
                           <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                             {option.description}
                           </p>
                           <div className="flex items-center justify-between">
                             <span className="text-xs text-primary font-semibold">{option.available}</span>
                             <button className="text-xs text-primary font-semibold hover:underline transition-colors">{option.action}</button>
                           </div>
                         </div>
                       </div>
                     </div>
                   );
                 })}
               </div>
             </div>
 
             {/* Quick Stats */}
             <div className="hero-gradient rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/30" />
               <div className="relative z-10">
                 <div className="text-sm font-bold mb-4 flex items-center">
                   <BarChart3 className="h-4 w-4 mr-2" />
                   Platform Stats
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center">
                     <span className="text-white/70 text-sm">Active Users</span>
                     <span className="font-bold">500+</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-white/70 text-sm">Outlets Tracked</span>
                     <span className="font-bold">50K+</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-white/70 text-sm">Uptime</span>
                     <span className="font-bold">99.9%</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-white/70 text-sm">API Calls/Day</span>
                     <span className="font-bold">1M+</span>
                   </div>
                 </div>
               </div>
             </div>
 
             {/* Contact Info */}
             <div className="glass-card-light rounded-2xl p-6">
               <div className="text-sm font-bold text-foreground mb-4 flex items-center">
                 <Phone className="h-4 w-4 mr-2 text-chart-3" />
                 Contact Info
               </div>
               <div className="space-y-3 text-sm">
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Mail className="h-4 w-4" />
                   <span>support@tidalflow.co.ke</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Phone className="h-4 w-4" />
                   <span>+254 732 325 269</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Clock className="h-4 w-4" />
                   <span>Mon-Fri 8AM-6PM EAT</span>
                 </div>
               </div>
             </div>
           </div>
         </aside>
       </div>
     </Layout>
   );
 }