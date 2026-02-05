 import { Layout } from '@/components/layout/Layout';
 import { Play, Smartphone, Monitor, Tablet, MapPin, ExternalLink } from 'lucide-react';
 import { Link } from 'react-router-dom';
 
 export default function Demo() {
   return (
     <Layout>
       {/* Hero Section */}
       <section className="hero-gradient py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20" />
         
         {/* Animated Background Orbs */}
         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-chart-2/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
         
         <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
             See TidalFlow Pro
             <span className="block text-primary mt-2">In Action</span>
           </h1>
           <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
             Experience our comprehensive field sales management platform through 
             interactive demos and real-world scenarios.
           </p>
         </div>
       </section>
 
       {/* Interactive Demo Section */}
       <section className="py-20 bg-background">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
               Interactive Demo Experience
             </h2>
             <p className="text-xl text-muted-foreground">
               Try our actual platform interface in this live demo
             </p>
           </div>
 
           <div className="flex justify-center">
             <div className="relative">
               {/* Phone Frame */}
               <div className="relative bg-secondary rounded-[3rem] p-3 shadow-2xl">
                 <div className="bg-foreground/90 rounded-[2.5rem] overflow-hidden">
                   {/* Phone Screen */}
                   <div className="w-80 h-[640px] bg-card relative overflow-hidden">
                     {/* Status Bar */}
                     <div className="bg-secondary h-8 flex items-center justify-between px-6 text-white text-xs">
                       <span>9:41</span>
                       <div className="flex items-center space-x-1">
                         <div className="w-4 h-2 bg-white rounded-sm"></div>
                         <div className="w-1 h-1 bg-white rounded-full"></div>
                         <div className="w-6 h-3 border border-white rounded-sm">
                           <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                         </div>
                       </div>
                     </div>
 
                     {/* Demo Content Placeholder */}
                     <div className="h-full bg-gradient-to-br from-background to-accent flex flex-col items-center justify-center p-6">
                       <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-4 shadow-lg">
                         <span className="text-white font-bold text-2xl">T</span>
                       </div>
                       <h3 className="text-lg font-bold text-foreground mb-2">TidalFlow Mobile</h3>
                       <p className="text-sm text-muted-foreground text-center mb-6">Field sales management at your fingertips</p>
                       
                       <div className="space-y-3 w-full">
                         <div className="bg-card p-3 rounded-xl border border-border flex items-center gap-3">
                           <MapPin className="w-5 h-5 text-primary" />
                           <span className="text-sm text-foreground">Geofenced Check-ins</span>
                         </div>
                         <div className="bg-card p-3 rounded-xl border border-border flex items-center gap-3">
                           <Monitor className="w-5 h-5 text-chart-2" />
                           <span className="text-sm text-foreground">Real-time Analytics</span>
                         </div>
                         <div className="bg-card p-3 rounded-xl border border-border flex items-center gap-3">
                           <Smartphone className="w-5 h-5 text-chart-3" />
                           <span className="text-sm text-foreground">Offline Capable</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
 
               {/* Floating Elements */}
               <div className="absolute -top-4 -right-4 bg-primary text-white p-2 rounded-full shadow-lg animate-pulse">
                 <Play className="h-4 w-4" />
               </div>
               <div className="absolute -bottom-4 -left-4 bg-chart-2 text-white p-3 rounded-xl shadow-lg">
                 <div className="text-xs font-semibold">Live Demo</div>
               </div>
               <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 hidden md:block">
                 <div className="glass-card-light p-3 rounded-lg shadow-lg">
                   <div className="text-xs text-muted-foreground mb-1">Interactive</div>
                   <div className="text-sm font-semibold text-foreground">Touch & Navigate</div>
                 </div>
               </div>
             </div>
           </div>
 
           <div className="text-center mt-12">
             <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
               This is a preview of our mobile platform interface. Request a full demo to experience 
               all features with your own data.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact">
                 <button className="btn-cta">
                   Request Full Demo
                 </button>
               </Link>
               <Link to="/features">
                 <button className="btn-outline-light bg-secondary text-white border-white/20 hover:bg-secondary/80">
                   <ExternalLink className="h-4 w-4 mr-2 inline" />
                   Explore Features
                 </button>
               </Link>
             </div>
           </div>
         </div>
       </section>
 
       {/* Features Preview */}
       <section className="py-20 bg-accent/30">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
               Platform Overview
             </h2>
             <p className="text-xl text-muted-foreground">
               Comprehensive tools for every aspect of field sales management
             </p>
           </div>
 
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="glass-card-light p-8 rounded-2xl text-center card-hover">
               <div className="bg-gradient-to-r from-primary to-chart-2 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Smartphone className="h-8 w-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-foreground mb-4">Mobile App</h3>
               <p className="text-muted-foreground leading-relaxed">
                 Native mobile experience for field teams with cloud capabilities and real-time sync
               </p>
             </div>
             
             <div className="glass-card-light p-8 rounded-2xl text-center card-hover">
               <div className="bg-gradient-to-r from-chart-2 to-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Monitor className="h-8 w-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-foreground mb-4">Web Dashboard</h3>
               <p className="text-muted-foreground leading-relaxed">
                 Comprehensive management dashboard for supervisors and managers with advanced analytics
               </p>
             </div>
             
             <div className="glass-card-light p-8 rounded-2xl text-center card-hover">
               <div className="bg-gradient-to-r from-chart-3 to-destructive w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Tablet className="h-8 w-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-foreground mb-4">Analytics</h3>
               <p className="text-muted-foreground leading-relaxed">
                 Real-time analytics and reporting across all field activities with predictive insights
               </p>
             </div>
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="py-20 hero-gradient relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-primary/30" />
         <div className="container mx-auto px-4 text-center relative z-10">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
             Ready to See It in Action?
           </h2>
           <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
             Schedule a personalized demo with our team and see how TidalFlow Pro 
             can transform your field sales operations.
           </p>
           <Link to="/contact">
             <button className="btn-cta">
               Schedule Demo Call
             </button>
           </Link>
         </div>
       </section>
     </Layout>
   );
 }