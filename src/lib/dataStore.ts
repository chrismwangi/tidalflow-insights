// TidalFlow Data Store - File-based persistence using localStorage
// Implements NO DATABASE constraint with export/import functionality

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'agent';
  status: 'active' | 'inactive';
  assignedRoutes: string[];
}

export interface Outlet {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  geofenceRadius: number; // meters
  type: 'retail' | 'wholesale' | 'supermarket';
  lastVisit?: string;
}

export interface Route {
  id: string;
  name: string;
  outlets: string[];
  assignedAgent?: string;
  date: string;
  status: 'pending' | 'in-progress' | 'completed';
}

export interface ShelfPhoto {
  id: string;
  outletId: string;
  agentId: string;
  timestamp: string;
  imageData: string; // base64 or URL
  tags: { product: string; confidence: number; shelfShare: number }[];
  notes?: string;
}

export interface CheckIn {
  id: string;
  agentId: string;
  outletId: string;
  timestamp: string;
  lat: number;
  lng: number;
  isValid: boolean;
  duration?: number; // minutes
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  timestamp: string;
}

export interface TidalFlowData {
  agents: Agent[];
  outlets: Outlet[];
  routes: Route[];
  shelfPhotos: ShelfPhoto[];
  checkIns: CheckIn[];
  contactSubmissions: ContactSubmission[];
  lastUpdated: string;
}

const STORAGE_KEY = 'tidalflow_data';

// Seeded initial data
const seedData: TidalFlowData = {
  agents: [
    {
      id: 'agent-001',
      name: 'John Mwangi',
      email: 'john.mwangi@tidalflow.co.ke',
      phone: '+254 712 345 678',
      role: 'agent',
      status: 'active',
      assignedRoutes: ['route-001']
    },
    {
      id: 'agent-002',
      name: 'Grace Ochieng',
      email: 'grace.ochieng@tidalflow.co.ke',
      phone: '+254 723 456 789',
      role: 'agent',
      status: 'active',
      assignedRoutes: ['route-002']
    },
    {
      id: 'admin-001',
      name: 'Peter Kamau',
      email: 'peter.kamau@tidalflow.co.ke',
      phone: '+254 734 567 890',
      role: 'admin',
      status: 'active',
      assignedRoutes: []
    }
  ],
  outlets: [
    {
      id: 'outlet-001',
      name: 'Naivas Supermarket - Westlands',
      address: 'Westlands Road, Nairobi',
      lat: -1.2667,
      lng: 36.8069,
      geofenceRadius: 100,
      type: 'supermarket',
      lastVisit: '2026-01-18'
    },
    {
      id: 'outlet-002',
      name: 'Quickmart - Kilimani',
      address: 'Argwings Kodhek Road, Nairobi',
      lat: -1.2921,
      lng: 36.7877,
      geofenceRadius: 80,
      type: 'supermarket',
      lastVisit: '2026-01-17'
    },
    {
      id: 'outlet-003',
      name: 'Mama Njeri Shop',
      address: 'Ruiru Town, Kiambu',
      lat: -1.1485,
      lng: 36.9603,
      geofenceRadius: 50,
      type: 'retail'
    },
    {
      id: 'outlet-004',
      name: 'Chandarana Foodplus - Karen',
      address: 'Karen Road, Nairobi',
      lat: -1.3194,
      lng: 36.7089,
      geofenceRadius: 100,
      type: 'supermarket',
      lastVisit: '2026-01-16'
    }
  ],
  routes: [
    {
      id: 'route-001',
      name: 'Nairobi CBD Route',
      outlets: ['outlet-001', 'outlet-002'],
      assignedAgent: 'agent-001',
      date: '2026-01-19',
      status: 'pending'
    },
    {
      id: 'route-002',
      name: 'Kiambu County Route',
      outlets: ['outlet-003'],
      assignedAgent: 'agent-002',
      date: '2026-01-19',
      status: 'in-progress'
    }
  ],
  shelfPhotos: [
    {
      id: 'photo-001',
      outletId: 'outlet-001',
      agentId: 'agent-001',
      timestamp: '2026-01-18T10:30:00Z',
      imageData: '',
      tags: [
        { product: 'Coca-Cola 500ml', confidence: 0.95, shelfShare: 25 },
        { product: 'Fanta Orange 500ml', confidence: 0.92, shelfShare: 15 },
        { product: 'Sprite 500ml', confidence: 0.89, shelfShare: 12 }
      ],
      notes: 'Good product placement, competitor taking 48% of shelf'
    }
  ],
  checkIns: [
    {
      id: 'checkin-001',
      agentId: 'agent-001',
      outletId: 'outlet-001',
      timestamp: '2026-01-18T10:00:00Z',
      lat: -1.2667,
      lng: 36.8069,
      isValid: true,
      duration: 45
    }
  ],
  contactSubmissions: [],
  lastUpdated: new Date().toISOString()
};

// Initialize data store
export function initializeDataStore(): TidalFlowData {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      console.warn('Failed to parse stored data, using seed data');
    }
  }
  saveData(seedData);
  return seedData;
}

// Get current data
export function getData(): TidalFlowData {
  return initializeDataStore();
}

// Save data to localStorage
export function saveData(data: TidalFlowData): void {
  data.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Export data as downloadable JSON file
export function exportDataFile(): void {
  const data = getData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tidalflow-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Import data from JSON file
export function importDataFile(file: File): Promise<TidalFlowData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string) as TidalFlowData;
        saveData(data);
        resolve(data);
      } catch (error) {
        reject(new Error('Invalid JSON file'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
}

// Generate unique ID
export function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Add contact submission
export function addContactSubmission(submission: Omit<ContactSubmission, 'id' | 'timestamp'>): ContactSubmission {
  const data = getData();
  const newSubmission: ContactSubmission = {
    ...submission,
    id: generateId('contact'),
    timestamp: new Date().toISOString()
  };
  data.contactSubmissions.push(newSubmission);
  saveData(data);
  return newSubmission;
}

// Add route
export function addRoute(route: Omit<Route, 'id'>): Route {
  const data = getData();
  const newRoute: Route = {
    ...route,
    id: generateId('route')
  };
  data.routes.push(newRoute);
  saveData(data);
  return newRoute;
}

// Assign route to agent
export function assignRouteToAgent(routeId: string, agentId: string): void {
  const data = getData();
  const route = data.routes.find(r => r.id === routeId);
  const agent = data.agents.find(a => a.id === agentId);
  if (route && agent) {
    route.assignedAgent = agentId;
    if (!agent.assignedRoutes.includes(routeId)) {
      agent.assignedRoutes.push(routeId);
    }
    saveData(data);
  }
}

// Add check-in
export function addCheckIn(checkIn: Omit<CheckIn, 'id' | 'timestamp'>): CheckIn {
  const data = getData();
  const newCheckIn: CheckIn = {
    ...checkIn,
    id: generateId('checkin'),
    timestamp: new Date().toISOString()
  };
  data.checkIns.push(newCheckIn);
  saveData(data);
  return newCheckIn;
}

// Validate geofence (check if coordinates are within outlet radius)
export function validateGeofence(outletId: string, lat: number, lng: number): boolean {
  const data = getData();
  const outlet = data.outlets.find(o => o.id === outletId);
  if (!outlet) return false;
  
  // Haversine formula for distance calculation
  const R = 6371000; // Earth's radius in meters
  const dLat = (lat - outlet.lat) * Math.PI / 180;
  const dLng = (lng - outlet.lng) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(outlet.lat * Math.PI / 180) * Math.cos(lat * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  return distance <= outlet.geofenceRadius;
}

// Add shelf photo with AI tagging simulation
export function addShelfPhoto(
  photo: Omit<ShelfPhoto, 'id' | 'timestamp' | 'tags'>
): ShelfPhoto {
  const data = getData();
  
  // Simulated AI tagging
  const simulatedTags = [
    { product: 'Coca-Cola 500ml', confidence: 0.95, shelfShare: Math.floor(Math.random() * 30) + 10 },
    { product: 'Pepsi 500ml', confidence: 0.91, shelfShare: Math.floor(Math.random() * 25) + 5 },
    { product: 'Fanta Orange 500ml', confidence: 0.88, shelfShare: Math.floor(Math.random() * 20) + 5 },
    { product: 'Local Brand Soda', confidence: 0.75, shelfShare: Math.floor(Math.random() * 15) + 5 }
  ];
  
  const newPhoto: ShelfPhoto = {
    ...photo,
    id: generateId('photo'),
    timestamp: new Date().toISOString(),
    tags: simulatedTags.slice(0, Math.floor(Math.random() * 3) + 2)
  };
  data.shelfPhotos.push(newPhoto);
  saveData(data);
  return newPhoto;
}

// Reset to seed data
export function resetData(): void {
  saveData(seedData);
}
