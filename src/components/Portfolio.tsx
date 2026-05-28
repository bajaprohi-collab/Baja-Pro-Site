import React, { useState } from "react";
import { CASE_STUDIES } from "../data";
import { CaseStudy, ServiceCategory } from "../types";
import { Shield, MapPin, CheckCircle2, Paintbrush, Flame, Hammer, Waves, ArrowRight } from "lucide-react";

interface PortfolioProps {
  lang: "EN" | "ES";
  onSelectCategoryForEstimator: (category: ServiceCategory) => void;
}

export default function Portfolio({ lang, onSelectCategoryForEstimator }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ServiceCategory>("all");

  const categories = [
    { id: "all", label: lang === "EN" ? "All Projects" : "Todos los Proyectos" },
    { id: "remodeling", label: lang === "EN" ? "Remodeling" : "Remodelaciones" },
    { id: "painting", label: lang === "EN" ? "Protective Paint" : "Pintura y Sellado" },
    { id: "bath_kitchen", label: lang === "EN" ? "Bath & Kitchen" : "Cocinas y Baños" },
  ];

  const filteredProjects = selectedCategory === "all"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => p.category === selectedCategory);

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "REALITY TRANSFORMATION CASE STUDIES" : "CASOS DE ÉXITO DE TRANSFORMACIÓN EN CABO"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#0C1E36]">
            {lang === "EN" ? "Exquisite Crafts, Pristine Finishes" : "Artesanía Exquisita, Acabados Prístinos"}
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            {lang === "EN" 
              ? "See how we apply rigid American Building Standards to custom-styled vacation villas, beachfront condos, and luxury estates in Cabo San Lucas."
              : "Vea cómo aplicamos estrictamente los Estándares de Construcción Americanos a lujosas villas, condominios frente al mar y residencias en Cabo."}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-[#0C1E36] text-white shadow-md shadow-gray-400/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 group"
            >
              {/* Responsive Image Wrapper with Floating Tags */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-950">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* Visual gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating tags */}
                <div className="absolute top-4 left-4 bg-[#F57C00] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{lang === "EN" ? "American Quality" : "Calidad Americana"}</span>
                </div>

                {/* Bottom title inside the image */}
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="flex items-center space-x-1.5 text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0C1E36] mb-3 flex items-center space-x-1.5">
                      <span className="w-1.5 h-3.5 bg-[#F57C00] rounded-full inline-block"></span>
                      <span>{lang === "EN" ? "REMODELING HIGHLIGHTS" : "ASPECTOS DESTACADOS DE CONSTRUCCIÓN"}</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.remodelingHighlights.map((hl, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-700 leading-tight">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Standards Met highlights block */}
                  <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-5 mb-8">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-sky-900 mb-3 flex items-center space-x-1.5">
                      <Shield className="w-4 h-4 text-sky-700" />
                      <span>{lang === "EN" ? "AMERICAN STANDARDS ASSURED" : "ESTÁNDARES AMERICANOS ASURADOS"}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-sky-850">
                      {project.standardsMet.map((std, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{std}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Estimator Call to action link */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4">
                  <div className="text-xs text-gray-500">
                    <span>Motto: </span>
                    <strong className="text-gray-700 font-semibold">{lang === "EN" ? "Baja Prices, American Standards" : "Seguridad Americana, Precios Bajos"}</strong>
                  </div>
                  <button
                    onClick={() => onSelectCategoryForEstimator(project.category)}
                    className="flex items-center space-x-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0C1E36] hover:text-[#F57C00] group/btn transition-colors"
                  >
                    <span>{lang === "EN" ? "Quote Similar Project" : "Cotizar Proyecto Similar"}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Quality Banner Footer */}
        <div className="mt-16 bg-[#0C1E36] rounded-3xl p-8 sm:p-12 text-white border border-[#1E3A5F] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-20 -translate-y-20 opacity-10">
            <svg className="w-96 h-96" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill="white" />
            </svg>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-sans font-black tracking-tight mb-3">
                {lang === "EN" ? "Do You Have a Cabo Property that Needs Professional Care?" : "¿Tiene una propiedad en Cabo que necesita atención profesional?"}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
                {lang === "EN"
                  ? "We support vacation home owners looking for crystal-clear billing, progress reports over email, and premium materials fitted specifically for Cabo winds and heat. Let's make your renovation stress-free."
                  : "Brindamos soporte a propietarios extranjeros y locales con facturación transparente, informes periódicos en inglés/español y materiales de alta duración."}
              </p>
            </div>
            <div className="flex md:justify-end">
              <button
                onClick={() => onSelectCategoryForEstimator("remodeling")}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#F57C00] text-white hover:bg-orange-600 rounded-xl font-bold tracking-wider uppercase text-sm transition-all text-center"
              >
                {lang === "EN" ? "Launch Project Estimate" : "Simular Presupuesto Directo"}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
