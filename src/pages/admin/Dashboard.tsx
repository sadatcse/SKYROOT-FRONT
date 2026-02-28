import React, { useEffect, useState } from 'react';
import { Building2, MessageSquare, Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Dashboard = () => {
  const [stats, setStats] = useState({ projects: 0, testimonials: 0 });
  const { token } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projectsRes, testimonialsRes] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/testimonials')
        ]);
        
        const projects = await projectsRes.json();
        const testimonials = await testimonialsRes.json();
        
        setStats({
          projects: projects.length,
          testimonials: testimonials.length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, [token]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-neutral">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Total Projects</h3>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Building2 size={24} />
            </div>
          </div>
          <p className="text-4xl font-bold text-neutral">{stats.projects}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Testimonials</h3>
            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <MessageSquare size={24} />
            </div>
          </div>
          <p className="text-4xl font-bold text-neutral">{stats.testimonials}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Admin Users</h3>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
              <Users size={24} />
            </div>
          </div>
          <p className="text-4xl font-bold text-neutral">1</p>
        </div>
      </div>
    </div>
  );
};
