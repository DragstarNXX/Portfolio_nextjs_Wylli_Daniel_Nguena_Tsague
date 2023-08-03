import React, { useState } from 'react';

function Testimonials2() {
    const [testimonials, setTestimonials] = useState([
        { id: 1, name: 'Laura Smith', message: '"Wylli est un étudiant exceptionnel. Il est très dévoué, saisit rapidement de nouveaux concepts et va toujours au-delà pour fournir un travail exceptionnel. il excellera dans toutes les entreprises futures."' },
        { id: 2, name: 'Michael Johnson', message: "J'ai eu le plaisir de travailler avec Wylli sur plusieurs projets. Il a constamment démontré d'excellentes compétences en résolution de problèmes et une solide éthique de travail. Sa capacité à collaborer et à communiquer efficacement fait de lui un membre précieux de l'équipe" },
        { id: 3, name: 'Sarah Thompson', message: "J'ai eu le plaisir d'être le professeur de Wylli pendant les deux dernières années. Il fait constamment preuve d'un haut niveau de motivation, d'esprit critique et d'attention aux détails. Je suis convaincu qu'il réussira dans n'importe quel cadre professionnel." },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: '', message: '' });

    const handleEdit = (testimonialId) => {
        const testimonialToEdit = testimonials.find(
            (testimonial) => testimonial.id === testimonialId
        );
        setFormData({ name: testimonialToEdit.name, message: testimonialToEdit.message });
        setEditingId(testimonialId);
    };

    const handleUpdate = () => {
        if (editingId) {
            const updatedTestimonials = testimonials.map((testimonial) => {
                if (testimonial.id === editingId) {
                    return { ...testimonial, name: formData.name, message: formData.message };
                }
                return testimonial;
            });
            setTestimonials(updatedTestimonials);
            setFormData({ name: '', message: '' });
            setEditingId(null);
        }
    };

    return (
        <div className="edit-testimonials-container">
            <h2>Modifier les témoignages</h2>
            <div className="testimonials-list">
                {testimonials.map((testimonial) => (
                    <div className="testimonial" key={testimonial.id}>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.message}</p>
                        <button onClick={() => handleEdit(testimonial.id)}>Modifier</button>
                    </div>
                ))}
            </div>
            <div className="testimonial-form">
                <h3>Modifier un témoignage</h3>
                <input
                    type="text"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                <button onClick={handleUpdate}>Enregistrer</button>
            </div>
        </div>
    );
}

export default Testimonials2;
