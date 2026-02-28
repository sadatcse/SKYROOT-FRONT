import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, X, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  status: string;
  image: string;
  description: string;
  price?: string;
  unitsLeft?: number;
}

export const ProjectsManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const { token } = useAuth();

  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    location: '',
    type: 'Residential',
    status: 'Ongoing',
    image: '',
    description: '',
    price: '',
    unitsLeft: 0
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingProject ? `/api/projects/${editingProject.id}` : '/api/projects';
    const method = editingProject ? 'PUT' : 'POST';
    
    const body = editingProject ? formData : { ...formData, id: Date.now().toString() };

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    setIsModalOpen(false);
    setEditingProject(null);
    setFormData({});
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchProjects();
    }
  };

  const openModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData(project);
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        location: '',
        type: 'Residential',
        status: 'Ongoing',
        image: '',
        description: '',
        price: '',
        unitsLeft: 0
      });
    }
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-neutral">Projects</h1>
        <button
          onClick={() => openModal()}
          className="bg-neutral text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-neutral/90"
        >
          <Plus size={20} /> Add Project
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-medium text-gray-500">Title</th>
              <th className="p-4 font-medium text-gray-500">Location</th>
              <th className="p-4 font-medium text-gray-500">Type</th>
              <th className="p-4 font-medium text-gray-500">Status</th>
              <th className="p-4 font-medium text-gray-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="p-4 font-medium">{project.title}</td>
                <td className="p-4 text-gray-600">{project.location}</td>
                <td className="p-4 text-gray-600">{project.type}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Ongoing' ? 'bg-green-100 text-green-700' :
                    project.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button
                    onClick={() => openModal(project)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white">
              <h2 className="text-xl font-bold">{editingProject ? 'Edit Project' : 'New Project'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    className="w-full p-2 border rounded-lg"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input
                    className="w-full p-2 border rounded-lg"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select
                    className="w-full p-2 border rounded-lg"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Mixed Use</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    className="w-full p-2 border rounded-lg"
                    value={formData.status}
                    onChange={e => setFormData({...formData, status: e.target.value})}
                  >
                    <option>Ongoing</option>
                    <option>Upcoming</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <input
                    className="w-full p-2 border rounded-lg"
                    value={formData.image}
                    onChange={e => setFormData({...formData, image: e.target.value})}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    className="w-full p-2 border rounded-lg"
                    rows={3}
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Price</label>
                  <input
                    className="w-full p-2 border rounded-lg"
                    value={formData.price}
                    onChange={e => setFormData({...formData, price: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Units Left</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-lg"
                    value={formData.unitsLeft}
                    onChange={e => setFormData({...formData, unitsLeft: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral text-white rounded-lg hover:bg-neutral/90"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
