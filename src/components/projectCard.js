// src/components/ProjectCard.js

function ProjectCard({ image, title, category }) {
  return (
    // Kartın ana çerçevesi
    <div className="group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      {/* Proje Resmi */}
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      
      {/* Kartın İçerik Alanı */}
      <div className="p-5 bg-white">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-500 mt-1">{category}</p>
      </div>
    </div>
  );
}

export default ProjectCard;