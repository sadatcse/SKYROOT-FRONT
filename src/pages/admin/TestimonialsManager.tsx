import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, X, Star } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface Testimonial {
  id: number;
  quote: string;
  text: string;
  author: string;
  role: string;
  location: string;
  image: string;
  rating: number;
}

export const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const { token } = useAuth();

  const [formData, setFormData] = useState<Partial<Testimonial>>({
    quote: '',
    text: '',
    author: '',
    role: '',
    location: '',
    image: '',
    rating: 5
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const res = await fetch('/api/testimonials');
    const data = await res.json();
    setTestimonials(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingTestimonial ? `/api/testimonials/${editingTestimonial.id}` : '/api/testimonials';
    const method = editingTestimonial ? 'PUT' : 'POST';
    
    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    setIsModalOpen(false);
    setEditingTestimonial(null);
    setFormData({});
    fetchTestimonials();
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchTestimonials();
    }
  };

  const openModal = (testimonial?: Testimonial) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData(testimonial);
    } else {
      setEditingTestimonial(null);
      setFormData({
        quote: '',
        text: '',
        author: '',
        role: '',
        location: '',
        image: '',
        rating: 5
      });
    }
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-neutral">Testimonials</h1>
        <button
          onClick={() => openModal()}
          className="bg-neutral text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-neutral/90"
        >
          <Plus size={20} /> Add Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-neutral">{testimonial.author}</h3>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => openModal(testimonial)} className="text-blue-600 hover:bg-blue-50 p-1 rounded">
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDelete(testimonial.id)} className="text-red-600 hover:bg-red-50 p-1 rounded">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-sm font-medium text-neutral mb-2">"{testimonial.quote}"</p>
            <p className="text-sm text-gray-600 flex-1">{testimonial.text}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white">
              <h2 className="text-xl font-bold">{editingTestimonial ? 'Edit Testimonial' : 'New Testimonial'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Author Name</label>
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.author}
                  onChange={e => setFormData({...formData, author: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.role}
                  onChange={e => setFormData({...formData, role: e.target.value})}
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
                <label className="block text-sm font-medium mb-1">Quote (Short)</label>
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.quote}
                  onChange={e => setFormData({...formData, quote: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Full Text</label>
                <textarea
                  className="w-full p-2 border rounded-lg"
                  rows={4}
                  value={formData.text}
                  onChange={e => setFormData({...formData, text: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.image}
                  onChange={e => setFormData({...formData, image: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <select
                  className="w-full p-2 border rounded-lg"
                  value={formData.rating}
                  onChange={e => setFormData({...formData, rating: parseInt(e.target.value)})}
                >
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
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
                  Save Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
