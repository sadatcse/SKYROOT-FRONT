import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ClientTestimonials } from './pages/ClientTestimonials';

// Admin Imports
import { AuthProvider } from './context/AuthContext';
import { AdminLayout } from './layouts/AdminLayout';
import { Login } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { ProjectsManager } from './pages/admin/ProjectsManager';
import { TestimonialsManager } from './pages/admin/TestimonialsManager';
import { ChangePassword } from './pages/admin/ChangePassword';

const PublicLayout = () => (
  <div className="min-h-screen flex flex-col font-primary">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
    <AIAssistant />
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<ClientTestimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<ProjectsManager />} />
            <Route path="testimonials" element={<TestimonialsManager />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
