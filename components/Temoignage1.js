import userData from "@constants/data";
import React from "react";

const Testimonials1 = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Laura Smith',
      message: 'Wylli est un étudiant exceptionnel. Il est très dévoué, saisit rapidement de nouveaux concepts et va toujours au-delà pour fournir un travail exceptionnel. il excellera dans toutes les entreprises futures.',
    },
    {
      id: 2,
      name: 'Michael Johnson',
      message: "J'ai eu le plaisir de travailler avec Wylli sur plusieurs projets. Il a constamment démontré d'excellentes compétences en résolution de problèmes et une solide éthique de travail. Sa capacité à collaborer et à communiquer efficacement fait de lui un membre précieux de l'équipe",
    },
    {
      id: 3,
      name: 'Sarah Thompson',
      message: "J'ai eu le plaisir d'être le professeur de Wylli pendant les deux dernières années. Il fait constamment preuve d'un haut niveau de motivation, d'esprit critique et d'attention aux détails. Je suis convaincu qu'il réussira dans n'importe quel cadre professionnel.",
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>Témoignages</h2>
      {testimonials.map((testimonial) => (
        <div className="testimonial" key={testimonial.id}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials1;
