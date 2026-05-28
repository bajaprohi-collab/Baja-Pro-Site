import React, { useState, useEffect, useRef } from "react";
import { Phone, MapPin, Menu, X, Shield, Search, ChevronDown, Globe } from "lucide-react";
import { Logo } from "./Logo";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  lang: "EN" | "ES";
  setLang: (lang: "EN" | "ES") => void;
  onSelectService: (serviceKey: string) => void;
  onSearch: (query: string) => void;
}

export default function Header({
  activeSection,
  setActiveSection,
  lang,
  setLang,
  onSelectService,
  onSearch,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchOpen(false);
    }
  };

  const servicesList = [
    { key: "remodeling", labelEN: "Remodeling", labelES: "Remodelación" },
    { key: "painting", labelEN: "Painting", labelES: "Pintura" },
    { key: "tile", labelEN: "Tile Installation", labelES: "Instalación de Pisos y Azulejos" },
    { key: "repairs", labelEN: "General Repairs", labelES: "Reparaciones Generales" },
    { key: "airbnb", labelEN: "Airbnb Improvements", labelES: "Mejoras para Airbnb" },
    { key: "bath_kitchen", labelEN: "Bathrooms & Kitchens", labelES: "Baños y Cocinas" },
    { key: "outdoor", labelEN: "Outdoor Projects", labelES: "Proyectos de Exterior" },
    { key: "custom", labelEN: "Problem Solving & Custom Work", labelES: "Solución de Problemas y Trabajos Personalizados" },
  ];

  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md text-neutral-800 border-b border-gray-100 shadow-sm transition-all duration-300">
      
      {/* Top micro line - localized tag & contact info */}
      <div className="bg-neutral-900 text-neutral-400 text-xs py-2 px-4 border-b border-neutral-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans tracking-wide">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 hover:text-white transition-colors cursor-pointer">
              <MapPin className="w-3.5 h-3.5 text-[#e2c227]" />
              <span>Cabo San Lucas, Baja California Sur, México</span>
            </span>
            <a href="tel:+526241616968" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#e2c227]" />
              <span>+52 624 161 6968</span>
            </a>
            <span className="text-neutral-600">|</span>
            <span className="flex items-center space-x-1 text-neutral-300">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>{lang === "EN" ? "Licensed & Insured" : "Licenciado y Asegurado"}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-[#e2c227] font-semibold tracking-wider">
              {lang === "EN" ? "American Standards, Baja Prices" : "Estándares Americanos, Precios de Baja"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo on Left */}
          <div 
            onClick={() => { scrollIntoView("hero"); }} 
            className="flex items-center cursor-pointer group"
            id="logo"
          >
            <div className="relative shrink-0 py-1 select-none">
              <Logo className="h-16 md:h-20 w-auto group-hover:scale-[1.03] transition-transform duration-300" variant="color" />
            </div>
          </div>

          {/* Navigation Centered */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            {/* Home link */}
            <button
              onClick={() => scrollIntoView("hero")}
              className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeSection === "hero" || activeSection === "home"
                  ? "text-[#e2c227] border-b-2 border-[#e2c227] rounded-none"
                  : "text-neutral-700 hover:text-[#e2c227]"
              }`}
            >
              {lang === "EN" ? "Home" : "Inicio"}
            </button>

            {/* Services with Hover Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  scrollIntoView("services");
                }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider flex items-center space-x-1 transition-all duration-200 ${
                  activeSection === "services"
                    ? "text-[#e2c227] border-b-2 border-[#e2c227] rounded-none"
                    : "text-neutral-700 hover:text-[#e2c227]"
                }`}
              >
                <span>{lang === "EN" ? "Services" : "Servicios"}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-80 rounded-xl bg-white border border-gray-100 shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-50 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                      {lang === "EN" ? "Our Specialties" : "Nuestras Especialidades"}
                    </span>
                  </div>
                  {servicesList.map((svc) => (
                    <button
                      key={svc.key}
                      onClick={() => {
                        onSelectService(svc.key);
                        setServicesDropdownOpen(false);
                        scrollIntoView("services");
                      }}
                      className="w-full text-left px-4 py-3 text-xs md:text-sm font-semibold text-neutral-700 hover:text-[#e2c227] hover:bg-neutral-55 hover:bg-gray-50 transition-all flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e2c227]"></span>
                      <span>{lang === "EN" ? svc.labelEN : svc.labelES}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Gallery / Featured Projects link */}
            <button
              onClick={() => scrollIntoView("gallery")}
              className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeSection === "gallery"
                  ? "text-[#e2c227] border-b-2 border-[#e2c227] rounded-none"
                  : "text-neutral-700 hover:text-[#e2c227]"
              }`}
            >
              {lang === "EN" ? "Gallery" : "Galería"}
            </button>

            {/* About Us link */}
            <button
              onClick={() => scrollIntoView("about")}
              className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeSection === "about"
                  ? "text-[#e2c227] border-b-2 border-[#e2c227] rounded-none"
                  : "text-neutral-700 hover:text-[#e2c227]"
              }`}
            >
              {lang === "EN" ? "About Us" : "Nosotros"}
            </button>

            {/* Process / Steps link */}
            <button
              onClick={() => scrollIntoView("process")}
              className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeSection === "process"
                  ? "text-[#e2c227] border-b-2 border-[#e2c227] rounded-none"
                  : "text-neutral-700 hover:text-[#e2c227]"
              }`}
            >
              {lang === "EN" ? "Our Process" : "Proceso"}
            </button>

            {/* Testimonials or Blog placeholder link */}
            <button
              onClick={() => scrollIntoView("testimonials")}
              className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeSection === "testimonials"
                  ? "text-[#e2c227] border-b-2 border-[#e2c227] rounded-none"
                  : "text-neutral-700 hover:text-[#e2c227]"
              }`}
            >
              {lang === "EN" ? "Blog & Reviews" : "Reseñas"}
            </button>

            {/* Contact Link */}
            <button
              onClick={() => scrollIntoView("contact")}
              className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeSection === "contact"
                  ? "text-[#e2c227] border-b-2 border-[#e2c227] rounded-none"
                  : "text-neutral-700 hover:text-[#e2c227]"
              }`}
            >
              {lang === "EN" ? "Contact" : "Contacto"}
            </button>
          </nav>

          {/* Right hand side action items */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Real Search Toggle bar */}
            <div className="relative">
              {!searchOpen ? (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-neutral-600 hover:text-[#e2c227] hover:bg-neutral-50 rounded-full transition-all"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              ) : (
                <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-50 rounded-lg px-2 py-1.5 border border-gray-200 animate-in fade-in slide-in-from-right-3 duration-200">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={lang === "EN" ? "Search services..." : "Buscar servicios..."}
                    className="bg-transparent border-none text-xs outline-none text-neutral-800 placeholder-neutral-400 w-36 px-1.5"
                    autoFocus
                  />
                  <button type="submit" className="p-1 text-neutral-600 hover:text-[#e2c227]">
                    <Search className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }} 
                    className="p-1 text-xs text-neutral-400 hover:text-neutral-600 ml-1 font-mono"
                  >
                    ✕
                  </button>
                </form>
              )}
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold uppercase bg-neutral-100 hover:bg-[#e2c227] hover:text-neutral-900 rounded-lg transition-colors text-neutral-700 font-mono tracking-wider"
              title={lang === "EN" ? "Change to Spanish" : "Cambiar a Inglés"}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang}</span>
            </button>

            {/* Action Quote Button */}
            <button
              onClick={() => scrollIntoView("contact")}
              className="px-5 py-3 rounded-lg text-xs font-extrabold uppercase tracking-widest bg-neutral-900 text-white hover:bg-[#e2c227] hover:text-neutral-900 hover:shadow-md transition-all active:scale-95 duration-200"
            >
              {lang === "EN" ? "Request Quote" : "Pedir Cotización"}
            </button>
          </div>

          {/* Dedicated mobile navigation controls */}
          <div className="flex lg:hidden items-center space-x-2">
            
            {/* Search Icon triggers instantly */}
            <button
              onClick={() => {
                const q = prompt(lang === "EN" ? "What are you looking for?" : "¿Qué está buscando?");
                if (q) onSearch(q);
              }}
              className="p-2 text-neutral-600 hover:bg-neutral-50 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language switcher */}
            <button
               onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
               className="p-2 text-xs font-extrabold font-mono bg-neutral-100 hover:bg-[#e2c227] rounded-lg shrink-0 uppercase tracking-tight flex items-center space-x-1"
            >
               <span>🌐</span>
               <span>{lang}</span>
            </button>

            {/* Sandwich Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-900 focus:outline-none bg-neutral-50 rounded-xl hover:bg-neutral-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Drawer overlay for Mobile layout */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-8 space-y-3.5 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => {
                scrollIntoView("hero");
                setMobileMenuOpen(false);
              }}
              className="text-left px-4 py-3 rounded-xl text-sm font-bold bg-gray-50 text-neutral-800"
            >
              {lang === "EN" ? "Home 🏠" : "Inicio 🏠"}
            </button>
            <button
              onClick={() => {
                scrollIntoView("about");
                setMobileMenuOpen(false);
              }}
              className="text-left px-4 py-3 rounded-xl text-sm font-bold bg-gray-50 text-neutral-800"
            >
              {lang === "EN" ? "About Us 👷" : "Nosotros 👷"}
            </button>
          </div>

          <div className="border-t border-gray-50 pt-2">
            <span className="text-[10px] font-black uppercase text-neutral-400 tracking-wider block mb-2 px-2">
              {lang === "EN" ? "Direct Services" : "Servicios Directos"}
            </span>
            <div className="grid grid-cols-1 gap-1">
              {servicesList.map((svc) => (
                <button
                  key={svc.key}
                  onClick={() => {
                    onSelectService(svc.key);
                    scrollIntoView("services");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs font-bold text-neutral-700 hover:text-[#e2c227] flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2c227]"></span>
                  <span>{lang === "EN" ? svc.labelEN : svc.labelES}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3 space-y-3">
            <button
              onClick={() => {
                scrollIntoView("gallery");
                setMobileMenuOpen(false);
              }}
              className="w-full text-left block px-4 py-2.5 text-sm font-bold text-neutral-700"
            >
              {lang === "EN" ? "View Gallery / Projects" : "Ver Galería de Proyectos"}
            </button>
            <button
              onClick={() => {
                scrollIntoView("process");
                setMobileMenuOpen(false);
              }}
              className="w-full text-left block px-4 py-2.5 text-sm font-bold text-neutral-700"
            >
              {lang === "EN" ? "Our Steps Process" : "Nuestro Proceso de Trabajo"}
            </button>
            <button
              onClick={() => {
                scrollIntoView("testimonials");
                setMobileMenuOpen(false);
              }}
              className="w-full text-left block px-4 py-2.5 text-sm font-bold text-neutral-700"
            >
              {lang === "EN" ? "Testimonials & Reviews" : "Opiniones de Clientes"}
            </button>
            <button
              onClick={() => {
                scrollIntoView("contact");
                setMobileMenuOpen(false);
              }}
              className="w-full text-left block px-4 py-2.5 text-sm font-bold text-neutral-700"
            >
              {lang === "EN" ? "Contact Details & Map" : "Contacto y Mapa"}
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a
              href="https://wa.me/526241616968"
              className="w-full text-center flex justify-center items-center space-x-2 px-4 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest bg-[#e2c227] text-neutral-900 label"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>{lang === "EN" ? "WhatsApp Call Tom" : "Llamar WhatsApp a Tom"}</span>
            </a>
            <div className="text-center text-[10px] text-neutral-400">
              {lang === "EN" ? "Licensed and Insured #Cabo4890" : "Licencia Municipal de Obras #Cabo4890"}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
