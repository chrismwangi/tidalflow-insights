import { useState, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Route as RouteIcon, 
  MapPin, 
  Camera, 
  CheckCircle, 
  Upload,
  Smartphone,
  Play,
  RefreshCw,
  Download,
  Upload as UploadIcon,
  X
} from 'lucide-react';
import { 
  getData, 
  assignRouteToAgent, 
  addCheckIn, 
  addShelfPhoto, 
  validateGeofence,
  exportDataFile,
  importDataFile,
  resetData
} from '@/lib/dataStore';
import { toast } from 'sonner';
import featuresBg from '@/assets/features-bg.jpg';

type DemoStep = 'route' | 'checkin' | 'photo' | 'complete';

const Demo = () => {
  const [currentStep, setCurrentStep] = useState<DemoStep>('route');
  const [selectedAgent, setSelectedAgent] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedOutlet, setSelectedOutlet] = useState('');
  const [mockLat, setMockLat] = useState('-1.2667');
  const [mockLng, setMockLng] = useState('36.8069');
  const [isGeofenceValid, setIsGeofenceValid] = useState<boolean | null>(null);
  const [photoTags, setPhotoTags] = useState<{ product: string; confidence: number; shelfShare: number }[]>([]);
  const [isProcessingPhoto, setIsProcessingPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const importInputRef = useRef<HTMLInputElement>(null);

  const data = getData();
  const agents = data.agents.filter(a => a.role === 'agent');
  const routes = data.routes;
  const outlets = data.outlets;

  const handleAssignRoute = () => {
    if (!selectedAgent || !selectedRoute) {
      toast.error('Please select both an agent and a route');
      return;
    }
    assignRouteToAgent(selectedRoute, selectedAgent);
    toast.success('Route assigned successfully!');
    setCurrentStep('checkin');
  };

  const handleCheckIn = () => {
    if (!selectedOutlet) {
      toast.error('Please select an outlet');
      return;
    }
    
    const lat = parseFloat(mockLat);
    const lng = parseFloat(mockLng);
    
    if (isNaN(lat) || isNaN(lng)) {
      toast.error('Please enter valid coordinates');
      return;
    }

    const isValid = validateGeofence(selectedOutlet, lat, lng);
    setIsGeofenceValid(isValid);

    addCheckIn({
      agentId: selectedAgent,
      outletId: selectedOutlet,
      lat,
      lng,
      isValid
    });

    if (isValid) {
      toast.success('Check-in successful! You are within the geofence.');
      setCurrentStep('photo');
    } else {
      toast.error('Check-in failed! You are outside the geofence radius.');
    }
  };

  const handlePhotoUpload = () => {
    fileInputRef.current?.click();
  };

  const processPhoto = () => {
    setIsProcessingPhoto(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const photo = addShelfPhoto({
        outletId: selectedOutlet,
        agentId: selectedAgent,
        imageData: 'demo-image',
        notes: 'Demo shelf photo capture'
      });
      
      setPhotoTags(photo.tags);
      setIsProcessingPhoto(false);
      toast.success('Photo analyzed successfully!');
      setCurrentStep('complete');
    }, 2000);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await importDataFile(file);
        toast.success('Data imported successfully!');
        window.location.reload();
      } catch (error) {
        toast.error('Failed to import data file');
      }
    }
  };

  const handleReset = () => {
    resetData();
    setCurrentStep('route');
    setSelectedAgent('');
    setSelectedRoute('');
    setSelectedOutlet('');
    setIsGeofenceValid(null);
    setPhotoTags([]);
    toast.success('Demo reset to initial state');
  };

  const steps = [
    { id: 'route', label: 'Assign Route', icon: RouteIcon },
    { id: 'checkin', label: 'Geo Check-in', icon: MapPin },
    { id: 'photo', label: 'Shelf Photo', icon: Camera },
    { id: 'complete', label: 'Complete', icon: CheckCircle },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{ 
          backgroundImage: `url(${featuresBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Interactive <span className="text-gradient">Demo</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Experience TidalFlow's core workflows: route assignment, geofenced check-in, and AI-powered shelf photo analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Data Controls */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant="outline" 
              onClick={exportDataFile}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export Data
            </Button>
            <Button 
              variant="outline" 
              onClick={() => importInputRef.current?.click()}
              className="flex items-center gap-2"
            >
              <UploadIcon className="w-4 h-4" />
              Import Data
            </Button>
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Demo
            </Button>
            <input
              ref={importInputRef}
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 md:gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div 
                    className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full transition-all ${
                      currentStep === step.id
                        ? 'bg-primary text-primary-foreground'
                        : steps.findIndex(s => s.id === currentStep) > index
                        ? 'bg-chart-1 text-primary-foreground'
                        : 'bg-secondary-foreground/10 text-muted-foreground'
                    }`}
                  >
                    <step.icon className="w-4 h-4" />
                    <span className="hidden md:inline text-sm font-medium">{step.label}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-2 ${
                      steps.findIndex(s => s.id === currentStep) > index
                        ? 'bg-chart-1'
                        : 'bg-secondary-foreground/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-secondary-foreground rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Phone Notch */}
                  <div className="bg-secondary-foreground h-8 flex items-center justify-center">
                    <div className="w-24 h-5 bg-background rounded-full" />
                  </div>

                  {/* Phone Content */}
                  <div className="min-h-[500px] p-6">
                    {/* Step 1: Route Assignment */}
                    {currentStep === 'route' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <RouteIcon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Assign Route</h3>
                            <p className="text-muted-foreground text-sm">Select agent and route</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm text-foreground">Select Agent</Label>
                            <select
                              value={selectedAgent}
                              onChange={(e) => setSelectedAgent(e.target.value)}
                              className="w-full mt-1 px-3 py-2 bg-card border border-input rounded-lg text-foreground"
                            >
                              <option value="">Choose an agent...</option>
                              {agents.map(agent => (
                                <option key={agent.id} value={agent.id}>
                                  {agent.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <Label className="text-sm text-foreground">Select Route</Label>
                            <select
                              value={selectedRoute}
                              onChange={(e) => setSelectedRoute(e.target.value)}
                              className="w-full mt-1 px-3 py-2 bg-card border border-input rounded-lg text-foreground"
                            >
                              <option value="">Choose a route...</option>
                              {routes.map(route => (
                                <option key={route.id} value={route.id}>
                                  {route.name} ({route.outlets.length} outlets)
                                </option>
                              ))}
                            </select>
                          </div>

                          <button 
                            onClick={handleAssignRoute}
                            className="btn-cta w-full mt-4"
                          >
                            Assign Route
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Geo Check-in */}
                    {currentStep === 'checkin' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Geo Check-in</h3>
                            <p className="text-muted-foreground text-sm">Verify your location</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm text-foreground">Select Outlet</Label>
                            <select
                              value={selectedOutlet}
                              onChange={(e) => setSelectedOutlet(e.target.value)}
                              className="w-full mt-1 px-3 py-2 bg-card border border-input rounded-lg text-foreground"
                            >
                              <option value="">Choose an outlet...</option>
                              {outlets.map(outlet => (
                                <option key={outlet.id} value={outlet.id}>
                                  {outlet.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label className="text-sm text-foreground">Latitude</Label>
                              <Input
                                value={mockLat}
                                onChange={(e) => setMockLat(e.target.value)}
                                placeholder="-1.2667"
                              />
                            </div>
                            <div>
                              <Label className="text-sm text-foreground">Longitude</Label>
                              <Input
                                value={mockLng}
                                onChange={(e) => setMockLng(e.target.value)}
                                placeholder="36.8069"
                              />
                            </div>
                          </div>

                          {isGeofenceValid !== null && (
                            <div className={`p-3 rounded-lg ${
                              isGeofenceValid 
                                ? 'bg-chart-1/10 text-chart-1' 
                                : 'bg-destructive/10 text-destructive'
                            }`}>
                              {isGeofenceValid 
                                ? '✓ Within geofence radius'
                                : '✗ Outside geofence radius - try adjusting coordinates'}
                            </div>
                          )}

                          <button 
                            onClick={handleCheckIn}
                            className="btn-cta w-full"
                          >
                            Check In
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Shelf Photo */}
                    {currentStep === 'photo' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Camera className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Shelf Photo</h3>
                            <p className="text-muted-foreground text-sm">Capture & analyze</p>
                          </div>
                        </div>

                        <div 
                          onClick={handlePhotoUpload}
                          className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                        >
                          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                          <p className="text-muted-foreground text-sm">
                            Tap to capture or upload shelf photo
                          </p>
                        </div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={processPhoto}
                          className="hidden"
                        />

                        <button 
                          onClick={processPhoto}
                          disabled={isProcessingPhoto}
                          className="btn-cta w-full flex items-center justify-center gap-2"
                        >
                          {isProcessingPhoto ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" />
                              Analyzing with AI...
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4" />
                              Simulate Photo Capture
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Step 4: Complete */}
                    {currentStep === 'complete' && (
                      <div className="space-y-6">
                        <div className="text-center py-6">
                          <div className="w-16 h-16 rounded-full bg-chart-1/20 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-chart-1" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            Visit Complete!
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            All data has been synced
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-medium text-foreground">AI Analysis Results:</h4>
                          {photoTags.map((tag, index) => (
                            <div 
                              key={index}
                              className="flex items-center justify-between p-3 bg-card rounded-lg"
                            >
                              <span className="text-foreground text-sm">{tag.product}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-muted-foreground text-xs">
                                  {(tag.confidence * 100).toFixed(0)}% conf
                                </span>
                                <span className="text-chart-1 text-sm font-medium">
                                  {tag.shelfShare}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <button 
                          onClick={handleReset}
                          className="btn-primary-gradient w-full flex items-center justify-center gap-2"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Start New Visit
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Phone Home Indicator */}
                  <div className="h-8 flex items-center justify-center">
                    <div className="w-32 h-1 bg-secondary-foreground/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 glass-card-light rounded-full">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">TidalFlow Mobile</span>
              </div>
            </div>
          </div>

          {/* Demo Link */}
          <div className="text-center mt-16">
            <GlassCard className="inline-block p-6">
              <p className="text-secondary-foreground mb-3">
                Want to see the full mobile experience?
              </p>
              <a 
                href="https://demo.tidaltech.co.ke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-chart-1 hover:underline font-medium"
              >
                Visit demo.tidaltech.co.ke →
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
