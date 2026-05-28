import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Logo } from "./components/Logo";
import { 
  Shield, 
  MapPin, 
  CheckCircle2, 
  Paintbrush, 
  Hammer, 
  Wrench, 
  Briefcase, 
  Ruler, 
  ChevronRight, 
  Phone, 
  Mail, 
  Star, 
  Trash2, 
  Sliders, 
  Layers, 
  Send,
  Sparkles,
  Info,
  Check,
  Search,
  ExternalLink,
  Calendar,
  Lock
} from "lucide-react";
import { CASE_STUDIES, SERVICE_INFO, ESTIMATOR_ITEMS, QUALITY_TIER_FACTORS } from "./data";
import { Message, QualityTier, ServiceCategory, ScopeItem, ProjectEstimate } from "./types";

// Bilingual System Dictionary representing all user-visible text content
const TRANSLATION = {
  EN: {
    heroTitle: "Transforming Your Vision Into Reality",
    heroSubtitle: "Professional remodeling and construction services with quality craftsmanship you can trust. Built in Cabo to rigorous American standard specifications.",
    ctaEstimate: "Get a Free Estimate",
    ctaProjects: "View Our Projects",
    
    servicesTitle: "Our Services",
    servicesSubtitle: "Premium Construction & Specialized Remodeling",
    servicesIntro: "From luxury coastal ADUs to salt-resistant exterior transformations, we carry out all engineering to high-performance guidelines at competitive rates.",
    readMore: "View Details",
    readLess: "Hide Details",
    quoteCategory: "Estimate This Project",
    
    remDesc: "Elite whole-property remodeling, space optimization layouts, custom interior configurations, and luxury carpentry tailored to Cabo's marine climate.",
    paintDesc: "Multi-coat elastomeric exterior solutions and premium washable interior coatings engineered to block hot UV sun fading and marine breeze salt-stripping.",
    tileDesc: "Pristine tiling artistry featuring large-format slabs, rectified local stone, travertine pools and anti-slip exterior finishes with laser alignments.",
    repairDesc: "American standard troubleshooting, main plumbing regulators, track alignment for heavy typhoon storm screens, and custom woodwork renewals.",
    airbnbDesc: "High-spec rental upgrades including wear-resistant material configurations, smart remote locking systems, and private lockable cabinets.",
    bkDesc: "Exquisite spa showers with triple-coat impermeability and modern parota galley kitchen assemblies topped with waterfall quartz slabs.",
    outDesc: "Bespoke heavy parota pergolas, structural shaded masonry lounges, outdoor stone culinary counters, and seismic storm-rated anchors.",
    customDesc: "Creative problem solving, concrete form designs, custom electrical layouts, and custom structural projects customized precisely for you.",

    aboutBadge: "ABOUT BAJA-PRO",
    aboutTitle: "Built on Quality. Focused on Results.",
    aboutP1: "At Baja-Pro, we solve the most common challenge property owners face in Baja California Sur: securing elite communication, scheduling reliability, and premium durability without paying inflated developer rates.",
    aboutP2: "Our team consists of double-licensed builders trained in modern architectural requirements. We bridge 'American Standards' (vapor extraction barriers, high- SEER smart air conditioning system sealing, and lead-free copper pipe fitting) with the incredible affordability and direct sourcing of local 'Baja Prices'.",
    
    boxSatisfaction: "Satisfaction Guaranteed",
    boxSatisfactionDesc: "We provide complete progress photography and video updates for our out-of-town owners, offering client protections with legally binding milestones.",
    boxLicensed: "Licensed & Insured",
    boxLicensedDesc: "Fully registered municipal general contractor in Cabo San Lucas. All trade operations are covered by active liability policies.",
    boxExperienced: "Experienced Team",
    boxExperiencedDesc: "Over 15 years of local coastal building expertise battling humidity, salt air corrosion, concrete hydration kinetics, and gale-force wind physics.",

    processBadge: "OUR WORKFLOW",
    processTitle: "Our Process",
    processSubtitle: "How We Bring Your High-End Project to Life on Time",
    step1Title: "Initial Consultation",
    step1Desc: "We meet on-site (or over Zoom) to analyze dimensions, test subfloor moisture levels, and document your structural requirements.",
    step2Title: "Customized Design & Plan",
    step2Desc: "We output detailed transparent cost proposals, compile engineering blueprints, and map out visual materials side-by-side.",
    step3Title: "Renovation & Construction",
    step3Desc: "Our master mechanics execute all masonry, high-pressure plumbing, custom cabinet fitting, and weatherproofing layers.",
    step4Title: "Final Walkthrough",
    step4Desc: "We perform a thorough multi-point inspection list, clean up completely, and hand over your ready keys with fully documented guides.",

    galleryBadge: "PREMIUM PORTFOLIO",
    galleryTitle: "Featured Projects",
    gallerySubtitle: "Explore our real luxury, tropical-modern project milestones around Cabo",
    catAll: "All Masterpieces",
    catKitchen: "Kitchens",
    catBathroom: "Bathrooms",
    catADU: "ADUs",
    catExterior: "Exterior Renovations",
    hoverView: "View Project Specs",

    estimatorTitle: "Interactive Project Cost Estimator",
    estimatorIntro: "Select a service category and customize specific dimensions to receive an instant, high-fidelity cost estimate conforming to American building specifications and current Cabo materials pricing.",
    estSizeLabel: "Approximate Dimensions / Scale Size",
    estQualityLabel: "Material & Craft Quality Tier",
    estScopeLabel: "Customize Project Scope Checklist",
    estCalculatedResult: "Calculated Budget Estimation",
    estMatCost: "Project Materials Detail Cost",
    estLabCost: "Specialist Labor & Management",
    estTimeframe: "Estimated Delivery Duration",
    estButtonQuote: "Submit Project for Direct Quote Review",
    estCustomMessage: "This layout includes three-coat waterproofing, anti-salt finish primers, and professional grade anchoring hardware.",

    testimonialsBadge: "CLIENT MEMOIRS",
    testimonialsTitle: "What Our Property Owners Say",
    review1Text: "Tom Rondel and the team at Baja-Pro transformed our Pedregal kitchen while we were away in California. We received video reports twice a week. The custom oak parota wood is spectacular, and the quartz island is flawless. Simply awesome communication!",
    review1User: "Mark & Brenda S. (Pedregal Condo Owners)",
    review2Text: "I've contracted other builders before in Cabo, but now I'll only work with Baja-Pro. They solved a recurring moisture seepage on my master bath shower floor by stripping it back and laying down Schluter waterproofing bands. Pristine detail!",
    review2User: "Dave K. (El Tezal Villa Owner)",
    review3Text: "The seaside painting job they completed on our ocean-view facade has survived two heavy tropical rains and constant intense sun without a single crack. The flexible elastomeric coating they recommended really protects well.",
    review3User: "Isabella G. (San Jose del Cabo Resident)",

    ctaSectionTitle: "Get in Touch for a Free Estimate!",
    ctaSectionBody: "Reach out today and let's bring your project to life. We offer transparent pricing, prompt scheduling, and friendly professional consultation on-site.",
    requestAQuote: "REQUEST A FREE QUOTE",
    placeholderName: "Your Full Name",
    placeholderEmail: "Your Email Address",
    placeholderPhone: "WhatsApp / Phone (e.g. +1 555-0100)",
    placeholderNotes: "Tell us about your project goals, location in Cabo, or material preferences...",
    contactSuccess: "Thank you! Tom and the Baja-Pro estimating desk have received your request. We will reach out to you via WhatsApp / Email within 24 hours with a comprehensive roadmap.",

    aiAssistantHeader: "Tom's Assistant - Live AI Consultant",
    aiAssistantIntro: "Ask anything about remodeling guidelines in Cabo, marine material weatherproofing (travertine, Parota wood, anti-salt binders), or ask for an assessment of your custom project!",
    aiInputPlaceholder: "Ask about travertine tiles, moisture barriers, hurricane shutters...",
    aiSend: "Ask AI",
    aiDemoBadge: "PREVIEW",

    footerCol1Title: "Baja-Pro Home Improvement",
    footerLicense: "Licensed General Contractor Municipal Folio BCS-4890-C",
    footerCol2Title: "Quick Navigation",
    footerCol3Title: "Core Specialties",
    footerCol4Title: "Cabo Project Newsletter",
    footerNewsIntro: "Join our monthly newsletter for professional siding tips, typhoon protection prep tips, and home remodeling cost indexes in BCS.",
    placeholderNewsEmail: "Enter email for cost updates...",
    footerNewsBtn: "Subscribe",
    newsSuccess: "Subscribed successfully! Check your inbox for our tropical weather prep checklist."
  },
  ES: {
    heroTitle: "Transformando Su Visión En Realidad",
    heroSubtitle: "Servicios profesionales de remodelación y construcción con artesanía de calidad en la que puede confiar. Construido en Cabo bajo estrictas normas americanas.",
    ctaEstimate: "Obtener un Presupuesto Gratis",
    ctaProjects: "Ver Nuestros Proyectos",

    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Construcción Premium y Remodelación Especializada",
    servicesIntro: "Desde ADUs costeras de lujo hasta recubrimientos protectores marinos, ejecutamos cada obra con altos estándares de ingeniería y precios altamente competitivos.",
    readMore: "Ver Detalles",
    readLess: "Ocultar Detalles",
    quoteCategory: "Cotizar Este Proyecto",

    remDesc: "Remodelaciones completas de alta gama, redistribución de espacios, carpintería fina a la medida y optimización espacial adaptada al clima de Cabo.",
    paintDesc: "Sistemas protectores elastoméricos multi-capa y esmaltes interiores lavables que previenen el descarapelamiento por salitre e insolación intensa.",
    tileDesc: "Instalación milimétrica de formatos grandes, piedras finas locales, cubiertas húmedas de alberca y texturas de travertino con guías láser.",
    repairDesc: "Mantenimiento preventivo, calibración de reguladores de presión, lubricación de rieles anticiclónicos y restauración integral de carpintería.",
    airbnbDesc: "Mejoras de alta durabilidad para renta vacacional con herrajes de uso rudo, cerraduras inteligentes y clósets de propietario con llave.",
    bkDesc: "Cocinas y baños de lujo integrando encimeras de cuarzo, cajonería soft-close en parota marina e impermeabilización Schluter premium de tres fases.",
    outDesc: "Pérgolas masivas de parota, barras de asador de concreto, acabados rústicos de piedra y anclajes certificados contra ráfagas de huracán.",
    customDesc: "Solución experta a problemas estructurales, herrería y concreto colado fino, iluminación arquitectónica y proyectos especiales de autor.",

    aboutBadge: "SOBRE BAJA-PRO",
    aboutTitle: "Construido con Calidad. Enfocado en Resultados.",
    aboutP1: "En Baja-Pro resolvemos el desafío más común para los propietarios en Baja California Sur: encontrar comunicación de primer nivel, puntualidad en entrega y máxima durabilidad, sin pagar las tarifas infladas de las grandes constructoras.",
    aboutP2: "Nuestro equipo está formado por constructores certificados capacitados en especificaciones técnicas modernas. Unimos los 'Estándares Americanos' (barreras de vapor inferiores, sellado de aire acondicionado inverter de alta eficiencia, y conexiones de cobre sin plomada) con los accesos directos y económicos de los 'Precios de Baja'.",

    boxSatisfaction: "Satisfacción Garantizada",
    boxSatisfactionDesc: "Ofrecemos informes periódicos en video y fotografía de alta resolución para que los propietarios foráneos monitoreen cada detalle desde el extranjero.",
    boxLicensed: "Licenciado y Asegurado",
    boxLicensedDesc: "Contratista general municipal registrado formalmente en Cabo San Lucas, con pólizas de responsabilidad civil activas en cada obra.",
    boxExperienced: "Equipo de Gran Experiencia",
    boxExperiencedDesc: "Más de 15 años de experiencia local combatiendo la humedad marina, el calor y la salitre de las propiedades frente al mar.",

    processBadge: "NUESTRO FLUJO",
    processTitle: "Nuestro Proceso",
    processSubtitle: "Paso a paso para entregar su proyecto con puntualidad y excelencia",
    step1Title: "Consulta Inicial",
    step1Desc: "Nos reunimos en el sitio (o por Zoom) para evaluar dimensiones, medir la humedad oculta en el concreto y documentar sus metas de diseño.",
    step2Title: "Diseño y Plan Personalizado",
    step2Desc: "Entregamos un presupuesto claro desgajando materiales y mano de obra, junto con renders o planos técnicos constructivos.",
    step3Title: "Renovación y Construcción",
    step3Desc: "Nuestro equipo de artesanos coordina la mampostería, tendido eléctrico seguro, impermeabilizado intensivo y acabados finos de carpintería.",
    step4Title: "Inspección y Entrega Final",
    step4Desc: "Evaluamos juntos cada línea de nuestra lista de control de calidad, limpiamos perfectamente la propiedad y le entregamos sus llaves listas con garantías.",

    galleryBadge: "PORTAFOLIO DE LUJO",
    galleryTitle: "Proyectos Destacados",
    gallerySubtitle: "Explore de cerca las remodelaciones de lujo que hemos completado en las zonas más exclusivas de Cabo",
    catAll: "Todas las Obras",
    catKitchen: "Cocinas Remodeladas",
    catBathroom: "Baños de Lujo",
    catADU: "Unidades ADU",
    catExterior: "Exteriores y Pintura",
    hoverView: "Ver Detalles del Proyecto",

    estimatorTitle: "Calculadora de Costos Interactiva",
    estimatorIntro: "Seleccione una categoría de servicio e configure las dimensiones para recibir una estimación presupuestaria instantánea basada en el costo local de materiales y mano de obra experta.",
    estSizeLabel: "Dimensiones del área / Escala aproximada",
    estQualityLabel: "Nivel de Calidad y Acabados de Materiales",
    estScopeLabel: "Personalizar listas de tareas del proyecto",
    estCalculatedResult: "Presupuesto Estimado Calculado",
    estMatCost: "Costo Estimado de Materiales",
    estLabCost: "Mano de Obra Especializada y Gestión",
    estTimeframe: "Tiempo Estimado de Entrega",
    estButtonQuote: "Enviar Presupuesto para Revisión Formal",
    estCustomMessage: "Esta estimación contempla impermeabilización de 3 fases, anclajes de grado marino y pinturas flexibles anti-sol.",

    testimonialsBadge: "MEMORIAS DE CLIENTES",
    testimonialsTitle: "Lo Que Dicen Nuestros Propietarios",
    review1Text: "Tom Rondel y el equipo de Baja-Pro remodelaron nuestra cocina en Pedregal mientras estábamos en California. Nos enviaban videos dos veces de semana. Los muebles de Parota hechos a mano son espectaculares y la isla es perfecta.",
    review1User: "Mark y Brenda S. (Propietarios en Pedregal)",
    review2Text: "He contratado a otros albañiles antes en Cabo, pero ahora solo trabajaré con Baja-Pro. Corrigieron una molesta filtración de agua en mi regadera principal aplicando bandas Schluter de impermeabilizado profesional. ¡Excelente!",
    review2User: "Dave K. (Propietario en El Tezal)",
    review3Text: "El trabajo de pintura que aplicaron en nuestra fachada junto al mar ha sobrevivido lluvias tropicales y un sol intenso sin agrietarse. La pintura elastomérica flexible que recomendaron funciona increíble.",
    review3User: "Isabella G. (Residente en San José del Cabo)",

    ctaSectionTitle: "¡Contáctenos para una Estimación Gratis!",
    ctaSectionBody: "Comuníquese hoy mismo y demos vida a su proyecto. Ofrecemos precios claros, tiempos programados rigurosos y opiniones profesionales sin compromiso.",
    requestAQuote: "SOLICITAR UNA COTIZACIÓN GRATIS",
    placeholderName: "Su Nombre Completo",
    placeholderEmail: "Su Correo Electrónico",
    placeholderPhone: "Teléfono / WhatsApp (ej. +52 624-123-4567)",
    placeholderNotes: "Escriba detalles sobre su proyecto, ubicación en Cabo, acabados elegidos, etc...",
    contactSuccess: "¡Muchas gracias! Tom y el equipo de cotizaciones de Baja-Pro han registrado su información. Nos pondremos en contacto vía WhatsApp o correo electrónico en menos de 24 horas.",

    aiAssistantHeader: "Asistente AI de Tom - Consultor en Vivo",
    aiAssistantIntro: "¡Pregunte sobre reglamentos de construcción en Cabo, materiales contra la corrosión marina (diseño en parota, cuarzo, selladores anti-sal), o pida un estimado aproximado!",
    aiInputPlaceholder: "Ej: ¿Qué pintura de exterior dura más en Cabo? o ¿Cómo impermeabilizan baños?",
    aiSend: "Preguntar a AI",
    aiDemoBadge: "VISTA PREVIA",

    footerCol1Title: "Remodelaciones Baja-Pro",
    footerLicense: "Contratista General Autorizado con Folio Municipal BCS-4890-C",
    footerCol2Title: "Navegación Rápida",
    footerCol3Title: "Servicios Clave",
    footerCol4Title: "Boletín Informativo",
    footerNewsIntro: "Reciba un reporte mensual con consejos prácticos de mantenimiento contra tormentas, técnicas de pintado marino e índices de costo en BCS.",
    placeholderNewsEmail: "Ingrese su correo...",
    footerNewsBtn: "Suscribirse",
    newsSuccess: "¡Suscripción exitosa! Le hemos enviado por correo nuestra guía práctica de preparación contra huracanes."
  }
};

export default function App() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [activeSection, setActiveSection] = useState("hero");
  
  // Custom states for interactive elements
  const [selectedService, setSelectedService] = useState<string>("remodeling");
  const [searchHighlight, setSearchHighlight] = useState<string>("");
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>("all");
  
  // Form submission success notification states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsSubmitted, setNewsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    category: "remodeling",
    size: 200,
    quality: "premium" as QualityTier,
  });

  // Services detailed info toggle states (Read More modal or section expansion)
  const [detailedServiceOpen, setDetailedServiceOpen] = useState<string | null>(null);

  // Gallery item specs modal toggle state
  const [selectedGalleryProject, setSelectedGalleryProject] = useState<any | null>(null);

  // AI Chat Assistant state
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: lang === "EN" 
        ? "Welcome, I'm Oded (Tom) Rondel's automated AI assistant for Baja-Pro. Ask me about custom coastal remodeling, moisture sealing systems, travertine sizing, or approximate pricing formulas in Cabo!"
        : "¡Hola! Soy el asistente automatizado de Tom Rondel para Baja-Pro en Cabo. Pregúntame sobre materiales marinos, precios de travertino, barreras de vapor o el proceso de impermeabilizado Schluter.",
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  // Adjust placeholder message of chatbot to English/Spanish on change
  useEffect(() => {
    setChatMessages(prev => {
      const copy = [...prev];
      if (copy.length === 1) {
        copy[0] = {
          role: "assistant",
          content: lang === "EN"
            ? "Welcome, I'm Oded (Tom) Rondel's automated AI Assistant for Baja-Pro. Ask me about custom coastal remodeling, moisture sealing systems, travertine sizing, or approximate pricing formulas in Cabo San Lucas!"
            : "¡Hola! Soy el asistente automatizado de Tom Rondel para Baja-Pro en Cabo San Lucas. Pregúntame sobre materiales marinos, precios de travertino, barreras de vapor o el proceso de impermeabilizado Schluter."
        };
      }
      return copy;
    });
  }, [lang]);

  // Trigger service selection from dropdown callbacks or interactive cards
  const handleSelectServiceFromHeader = (serviceKey: string) => {
    setSelectedService(serviceKey);
    setSearchHighlight("");
  };

  // Search filter capability
  const handleSearchCommit = (query: string) => {
    const term = query.toLowerCase();
    setSearchHighlight(term);
    
    // Find best matching category and scroll there
    let targetId = "services";
    if (term.includes("gallery") || term.includes("project") || term.includes("obra") || term.includes("foto")) {
      targetId = "gallery";
    } else if (term.includes("cost") || term.includes("price") || term.includes("quote") || term.includes("estimate") || term.includes("calculator") || term.includes("presupuesto")) {
      targetId = "contact";
    } else if (term.includes("about") || term.includes("nosotros") || term.includes("tom") || term.includes("licensed")) {
      targetId = "about";
    } else if (term.includes("step") || term.includes("process") || term.includes("work") || term.includes("consult")) {
      targetId = "process";
    } else if (term.includes("chat") || term.includes("bot") || term.includes("ai") || term.includes("assistant")) {
      targetId = "chatbot-panel";
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle AJAX call to server for Live Gemini AI chat support
  const handleSendChat = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || aiLoading) return;

    const userText = chatInput;
    setChatInput("");
    
    const userMessage: Message = { role: "user", content: userText };
    setChatMessages(prev => [...prev, userMessage]);
    setAiLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...chatMessages,
            userMessage
          ].map(msg => ({ role: msg.role, content: msg.content }))
        })
      });

      if (!response.ok) {
        throw new Error("Server responded with error status");
      }

      const data = await response.json();
      setChatMessages(prev => [...prev, {
        role: "assistant",
        content: data.text || "An error occurred. Check backend configurations.",
        isDemo: data.isDemo
      }]);
    } catch (err) {
      console.error("AI Assistant communication error:", err);
      // Fallback message locally if offline/error response
      setChatMessages(prev => [...prev, {
        role: "assistant",
        content: lang === "EN" 
          ? "I am currently in seaside low-bandwidth mode but Owner Tom Rondel can respond directly over WhatsApp at +52 624 161 6968! General kitchen remodel packages range around $15,000-$35,000 USD, or Bath spa upgrades at $5,000-$10,000 USD." 
          : "Estoy experimentando baja comunicación en red, ¡pero Tom Rondel te puede responder de inmediato por nuestro WhatsApp directo (+52 624 161 6968)! Estimamos de $15,000 a $35,000 USD para cocinas."
      }]);
    } finally {
      setAiLoading(false);
    }
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real database receipt
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        notes: "",
        category: "remodeling",
        size: 200,
        quality: "premium",
      });
    }, 5500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsSubmitted(true);
    setTimeout(() => {
      setNewsSubmitted(false);
    }, 4500);
  };

  const dict = lang === "EN" ? TRANSLATION.EN : TRANSLATION.ES;

  const catLabels: Record<ServiceCategory, { EN: string; ES: string }> = {
    remodeling: { EN: "Remodeling", ES: "Remodelaciones" },
    painting: { EN: "Painting", ES: "Pintura" },
    tile: { EN: "Tile", ES: "Pisos/Azulejos" },
    repairs: { EN: "Repairs", ES: "Reparaciones" },
    airbnb: { EN: "Airbnb", ES: "Mejoras Airbnb" },
    bath_kitchen: { EN: "Bath & Kitchen", ES: "Baño/Cocina" },
    outdoor: { EN: "Outdoor", ES: "Exteriores" },
    custom: { EN: "Custom", ES: "Personalizado" }
  };

  // Custom 8 services list defined nicely per request
  const servicesConfig = [
    {
      id: "remodeling",
      title: lang === "EN" ? "Remodeling" : "Remodelación",
      desc: dict.remDesc,
      image: "/src/assets/images/hero_bedroom_1779979394696.png",
      categoryKey: "remodeling" as ServiceCategory,
      bullets: lang === "EN"
        ? ["Complete space optimizations", "Masonry standard extensions", "Precision structural load alignments", "Drywall-level plaster renders"]
        : ["Optimización completa de espacios", "Muriados y mampostería", "Alineamiento estructural de carga", "Yazados nivel aplanado plano"]
    },
    {
      id: "painting",
      title: lang === "EN" ? "Painting" : "Pintura",
      desc: dict.paintDesc,
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=600",
      categoryKey: "painting" as ServiceCategory,
      bullets: lang === "EN"
        ? ["Dynamic flexible seal foundation", "Saline crust buffer coats", "Solar heat-reflective acrylic topcoats", "Precision mask lines and priming"]
        : ["Base elástica selladora flexible", "Capas repelentes a la humedad salina", "Pintura acrílica termo-reflectante", "Alineación limpia de enmascarillado"]
    },
    {
      id: "tile",
      title: lang === "EN" ? "Tile Installation" : "Instalación de Pisos y Azulejos",
      desc: dict.tileDesc,
      image: "/src/assets/images/entryway_stone_1779979441374.png",
      categoryKey: "tile" as ServiceCategory,
      bullets: lang === "EN"
        ? ["Large-format professional tile work", "Self-leveling sub-slab spacers", "Bespoke travertine pools & stairs", "Anti-leak laser grout grids"]
        : ["Colocación experta en formatos grandes", "Niveladores anti-tropezones", "Borders de travertino rústico en albercas", "Boquilla láser impermeable"]
    },
    {
      id: "repairs",
      title: lang === "EN" ? "General Repairs" : "Reparaciones Generales",
      desc: dict.repairDesc,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
      categoryKey: "repairs" as ServiceCategory,
      bullets: lang === "EN"
        ? ["Hurricane track sliders tune-ups", "Ground fault safety panel wiring", "Lead-free water pressure regulation", "Weathered parota frame oil refresh"]
        : ["Mantenimiento a herrajes ciclónicos", "Cableado de tierras húmedas GFCI", "Regulación de presión libre de plomo", "Tratamiento hidratante para madera parota"]
    },
    {
      id: "airbnb",
      title: lang === "EN" ? "Airbnb Improvements" : "Mejoras para Airbnb",
      desc: dict.airbnbDesc,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600",
      categoryKey: "airbnb" as ServiceCategory,
      bullets: lang === "EN"
        ? ["Commercial status keyless entries", "Extreme heavy-traffic materials", "Secure deadbolted owner lock-closets", "Fast turn spa refresh items"]
        : ["Cerraduras electrónicas remotas", "Recubrimientos súper lavables anti-uso", "Clóset de servicio blindado", "Lavados de cara exprés de alto impacto"]
    },
    {
      id: "bath_kitchen",
      title: lang === "EN" ? "Bathrooms & Kitchens" : "Baños y Cocinas",
      desc: dict.bkDesc,
      image: "/src/assets/images/kitchen_classic_1779979411628.png",
      categoryKey: "bath_kitchen" as ServiceCategory,
      bullets: lang === "EN"
        ? ["Waterfall edge quartz islands", "Anti-plague solid parota cabinetry", "Linear channel water discharges", "Triple floor pan waterproofing sealing"]
        : ["Cubiertas de isla en cuarzo monolítico", "Gabinetes en parota tratada anti-termitas", "Drenajes lineales de rápida descarga", "Triple barrera de estanqueidad en regaderas"]
    },
    {
      id: "outdoor",
      title: lang === "EN" ? "Outdoor Projects" : "Proyectos de Exterior",
      desc: dict.outDesc,
      image: "/src/assets/images/sunset_firepit_1779979456074.png",
      categoryKey: "outdoor" as ServiceCategory,
      bullets: lang === "EN"
        ? ["Heavy bespoke parota sun pergolas", "Seismic-anchored supporting joints", "Built-in masonry BBQ counters", "Marine finish wood shielding stains"]
        : ["Pérgolas masivas con vigas de parota", "Placas de acero sismo-resistentes", "Asadores integrados en mampostería", "Tintas protectoras contra rayos UV marinos"]
    },
    {
      id: "custom",
      title: lang === "EN" ? "Problem Solving & Custom Work" : "Solución de Problemas y Trabajos Personalizados",
      desc: dict.customDesc,
      image: "/src/assets/images/entryway_stone_1779979441374.png",
      categoryKey: "custom" as ServiceCategory,
      bullets: lang === "EN"
        ? ["Bespoke architectural detailing", "Water leakage route diagnosis", "Smart ambient integrated setups", "Seaside carpentry creations"]
        : ["Herrería y detalles de diseño de autor", "Diagnóstico de filtraciones ocultas", "Iluminación de acento inteligente", "Piezas exclusivas de ebanistería marina"]
    }
  ];

  // Map category filter buttons for Gallery
  const galleryFilters = [
    { id: "all", label: dict.catAll },
    { id: "remodeling", label: lang === "EN" ? "Remodeling" : "Remodelaciones" },
    { id: "painting", label: lang === "EN" ? "Painting" : "Pintura" },
    { id: "bath_kitchen", label: lang === "EN" ? "Bath & Kitchen" : "Baños y Cocinas" }
  ];

  // Real filtered portfolio case studies
  const displayedGallery = CASE_STUDIES.filter(proj => {
    if (activeGalleryFilter === "all") return true;
    return proj.category === activeGalleryFilter;
  });

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-[#e2c227] selection:text-neutral-900 overflow-x-hidden antialiased">
      
      {/* HEADER / NAVBAR */}
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        lang={lang}
        setLang={setLang}
        onSelectService={handleSelectServiceFromHeader}
        onSearch={handleSearchCommit}
      />

      {/* HERO SECTION */}
      <section 
        id="hero" 
        className="relative h-[85vh] sm:h-screen min-h-[550px] bg-neutral-900 flex items-center justify-center overflow-hidden"
      >
        {/* Full-width Background Project Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero_bedroom_1779979394696.png" 
            alt="Cabo Remodeling Vision"
            className="w-full h-full object-cover scale-102"
            referrerPolicy="no-referrer"
          />
          {/* Dark luxury overlay blending gold hue details */}
          <div className="absolute inset-0 bg-neutral-950/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center pt-10 sm:pt-20">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col items-center">
            
            {/* Trust Badge badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e2c227] animate-pulse"></span>
              <span>{lang === "EN" ? "Licensed & Fully Insured in BCS" : "Constructores Autorizados en BCS"}</span>
            </div>

            {/* SEO Friendly Title Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans text-center mx-auto">
              {dict.heroTitle}
            </h1>

            {/* Subheading text */}
            <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-light max-w-2xl text-center mx-auto">
              {dict.heroSubtitle}
            </p>

            {/* Real client credential row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-bold uppercase text-neutral-300 justify-center">
              <div className="flex items-center space-x-1.5">
                <span className="text-[#e2c227]">✔</span>
                <span>{lang === "EN" ? "American Standards" : "Estándares Americanos"}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-[#e2c227]">✔</span>
                <span>{lang === "EN" ? "Baja Prices" : "Precios de Baja"}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-[#e2c227]">✔</span>
                <span>{lang === "EN" ? "Bilingual Management" : "Directores Bilingües"}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4 w-full max-w-md mx-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest bg-[#e2c227] text-neutral-900 hover:bg-white hover:text-neutral-900 transition-all duration-300 shadow-lg shadow-yellow-500/10 text-center active:scale-95 flex-1"
              >
                {dict.ctaEstimate}
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("gallery");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest border-2 border-white text-white hover:bg-white/15 transition-all text-center flex-1"
              >
                {dict.ctaProjects}
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white relative scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title Area */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#e2c227] bg-[#e2c227]/10 px-3.5 py-1.5 rounded-full inline-block">
              {lang === "EN" ? "BAJA-PRO SPECIALTIES" : "ESPECIALIDADES DE BAJA-PRO"}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-none">
              {dict.servicesTitle}
            </h2>
            <div className="w-16 h-1 bg-[#e2c227] mx-auto rounded-full"></div>
          </div>

          {searchHighlight && (
            <div className="mb-8 p-3 bg-gray-55 bg-yellow-50 border border-yellow-200 text-yellow-905 text-xs rounded-xl flex items-center justify-between">
              <span>Filtered by query: "<strong>{searchHighlight}</strong>"</span>
              <button onClick={() => setSearchHighlight("")} className="text-neutral-500 hover:text-neutral-800 font-bold uppercase tracking-wider text-[10px]">
                ✕ Clear Filter
              </button>
            </div>
          )}

          {/* Grid of 8 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesConfig
              .filter(svc => !searchHighlight || svc.title.toLowerCase().includes(searchHighlight) || svc.desc.toLowerCase().includes(searchHighlight))
              .map((svc) => {
                const isOpen = detailedServiceOpen === svc.id;
                return (
                  <div 
                    key={svc.id}
                    id={`service-card-${svc.id}`}
                    className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between group ${
                      selectedService === svc.id ? "ring-2 ring-[#e2c227] ring-offset-2" : ""
                    }`}
                  >
                    <div>
                      {/* Responsive card image with golden layout border banner */}
                      <div className="relative h-48 overflow-hidden bg-neutral-900">
                        <img 
                          src={svc.image} 
                          alt={svc.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 text-neutral-900 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded text-center">
                          {lang === "EN" ? "Guaranteed Built" : "Garantía de Obra"}
                        </div>
                      </div>

                      {/* Content details styling */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-base font-extrabold text-neutral-900 group-hover:text-[#e2c227] transition-colors leading-tight text-center">
                          {svc.title}
                        </h3>
                        <p className="text-neutral-600 text-xs font-light leading-relaxed text-center">
                          {svc.desc}
                        </p>

                        {/* Collapsible bullets triggered by Read More */}
                        {isOpen && (
                          <div className="mt-4 pt-4 border-t border-gray-100 space-y-2.5 animate-in fade-in duration-300">
                            <h4 className="text-[10px] font-black tracking-widest uppercase text-neutral-400 text-center">
                              {lang === "EN" ? "High-Spec Operations Included:" : "Especifiaciones Técnicas Incluidas:"}
                            </h4>
                            <ul className="space-y-1.5 flex flex-col items-center">
                              {svc.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-center space-x-1.5 text-xs text-neutral-700">
                                  <span className="text-[#e2c227] shrink-0">✔</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-3 bg-neutral-50 p-2 rounded text-[10px] text-neutral-500 italic text-center">
                              {lang === "EN"
                                ? "✨ Engineered explicitly to withstand Cabo's salt climate and intense hurricane thermal movements."
                                : "✨ Diseñado a detalle para soportar los factores climáticos costeros calientes y vientos de tormenta en BCS."}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer CTAs for Card */}
                    <div className="p-5 pt-0 border-t border-gray-50 flex items-center justify-between mt-4 gap-2">
                      <button
                        onClick={() => setDetailedServiceOpen(isOpen ? null : svc.id)}
                        className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#e2c227] transition-colors flex items-center space-x-1 shrink-0"
                      >
                        <span>{isOpen ? dict.readLess : dict.readMore}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isOpen ? "rotate-90" : ""}`} />
                      </button>
                      
                      <button
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            notes: lang === "EN" 
                              ? `Quote request for specialty service: ${svc.title}`
                              : `Solicitud de cotización para servicio especializado: ${svc.title}`
                          }));
                          const el = document.getElementById("contact");
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-md border border-[#e2c227] hover:bg-[#e2c227] text-neutral-900 transition-colors truncate"
                      >
                        {dict.quoteCategory}
                      </button>
                    </div>

                  </div>
                );
              })}
          </div>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-neutral-50 border-y border-gray-100 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Area header for consistency */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#e2c227]">
              {dict.aboutBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-950 tracking-tight leading-none">
              {dict.aboutTitle}
            </h2>
            <div className="w-16 h-1 bg-[#e2c227] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Hand: High end photo block with layered decorative badges centered */}
            <div className="relative group max-w-lg mx-auto w-full">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#e2c227] rounded-tl-3xl z-0"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-neutral-800 rounded-br-3xl z-0"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
                <img 
                  src="/src/assets/images/kitchen_island_1779979426904.png" 
                  alt="High quality Cabo builder project"
                  className="w-full h-[380px] object-cover group-hover:scale-101 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badge overlaid directly on picture */}
                <div className="absolute bottom-6 left-6 right-6 bg-neutral-900/95 backdrop-blur-sm text-white p-4 rounded-xl border border-white/15 shadow-xl text-center">
                  <div className="text-3xl font-black text-[#e2c227] mb-1">15+</div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-300">
                    {lang === "EN" ? "Years Building in Cabo San Lucas" : "Años Construyendo en Cabo San Lucas"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hand: Structured Narrative text centering */}
            <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="space-y-4 text-neutral-600 leading-relaxed font-light text-sm md:text-base">
                <p className="max-w-xl mx-auto lg:mx-0">{dict.aboutP1}</p>
              </div>

              {/* Three detailed highlights boxes - customized symmetrically */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 w-full">
                
                {/* 1. Satisfaction */}
                <div className="flex flex-col items-center text-center bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow relative group">
                  <div className="p-3 bg-yellow-50 text-[#e2c227] rounded-xl mb-3">
                    <Check className="w-5 h-5 stroke-[3] mx-auto" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-neutral-900 leading-tight">
                      {dict.boxSatisfaction}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-light mt-2 leading-relaxed">
                      {dict.boxSatisfactionDesc}
                    </p>
                  </div>
                </div>

                {/* 2. Licensed */}
                <div className="flex flex-col items-center text-center bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow relative group">
                  <div className="p-3 bg-yellow-50 text-[#e2c227] rounded-xl mb-3">
                    <Shield className="w-5 h-5 stroke-[2] mx-auto" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-neutral-900 leading-tight">
                      {dict.boxLicensed}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-light mt-2 leading-relaxed">
                      {dict.boxLicensedDesc}
                    </p>
                  </div>
                </div>

                {/* 3. Experienced */}
                <div className="flex flex-col items-center text-center bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow relative group">
                  <div className="p-3 bg-yellow-50 text-[#e2c227] rounded-xl mb-3">
                    <Hammer className="w-5 h-5 stroke-[2] mx-auto" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-neutral-900 leading-tight">
                      {dict.boxExperienced}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-light mt-2 leading-relaxed">
                      {dict.boxExperiencedDesc}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* WORKFLOW PROCESS SECTION */}
      <section id="process" className="py-24 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-neutral-500">
              {dict.processBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-950 tracking-tight leading-none">
              {dict.processTitle}
            </h2>
            <p className="text-neutral-500 font-light text-sm md:text-base">
              {dict.processSubtitle}
            </p>
          </div>

          {/* Horizontal Steps Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between items-center text-center hover:border-[#e2c227] hover:bg-white hover:shadow-lg transition-all duration-300 relative group">
              <div className="absolute top-4 right-4 text-neutral-200 text-5xl font-black select-none pointer-events-none font-mono">
                01
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <div className="p-3 bg-white group-hover:bg-[#e2c227]/10 w-fit rounded-xl border border-gray-100 transition-colors mx-auto">
                  <Calendar className="w-6 h-6 text-neutral-800 mx-auto" />
                </div>
                <h3 className="text-base font-extrabold text-neutral-900 text-center">
                  {dict.step1Title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed max-w-[220px] text-center">
                  {dict.step1Desc}
                </p>
              </div>
              <div className="pt-6 text-[10px] uppercase font-black text-[#e2c227] text-center">
                {lang === "EN" ? "Phase: Prep Diagnostics" : "Fase: Diagnóstico Inicial"}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between items-center text-center hover:border-[#e2c227] hover:bg-white hover:shadow-lg transition-all duration-300 relative group">
              <div className="absolute top-4 right-4 text-neutral-200 text-5xl font-black select-none pointer-events-none font-mono">
                02
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <div className="p-3 bg-white group-hover:bg-[#e2c227]/10 w-fit rounded-xl border border-gray-100 transition-colors mx-auto">
                  <Ruler className="w-6 h-6 text-neutral-800 mx-auto" />
                </div>
                <h3 className="text-base font-extrabold text-neutral-900 text-center">
                  {dict.step2Title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed max-w-[220px] text-center">
                  {dict.step2Desc}
                </p>
              </div>
              <div className="pt-6 text-[10px] uppercase font-black text-[#e2c227] text-center">
                {lang === "EN" ? "Phase: Scope Agreement" : "Fase: Aprobación Estructural"}
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between items-center text-center hover:border-[#e2c227] hover:bg-white hover:shadow-lg transition-all duration-300 relative group">
              <div className="absolute top-4 right-4 text-neutral-200 text-5xl font-black select-none pointer-events-none font-mono">
                03
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <div className="p-3 bg-white group-hover:bg-[#e2c227]/10 w-fit rounded-xl border border-gray-100 transition-colors mx-auto">
                  <Hammer className="w-6 h-6 text-neutral-800 mx-auto" />
                </div>
                <h3 className="text-base font-extrabold text-neutral-900 text-center">
                  {dict.step3Title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed max-w-[220px] text-center">
                  {dict.step3Desc}
                </p>
              </div>
              <div className="pt-6 text-[10px] uppercase font-black text-[#e2c227] text-center">
                {lang === "EN" ? "Phase: Strict Quality Build" : "Fase: Ejecución de Obra"}
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between items-center text-center hover:border-[#e2c227] hover:bg-white hover:shadow-lg transition-all duration-300 relative group">
              <div className="absolute top-4 right-4 text-neutral-200 text-5xl font-black select-none pointer-events-none font-mono">
                04
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <div className="p-3 bg-white group-hover:bg-[#e2c227]/10 w-fit rounded-xl border border-gray-100 transition-colors mx-auto">
                  <Shield className="w-6 h-6 text-neutral-800 mx-auto" />
                </div>
                <h3 className="text-base font-extrabold text-neutral-900 text-center">
                  {dict.step4Title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed max-w-[220px] text-center">
                  {dict.step4Desc}
                </p>
              </div>
              <div className="pt-6 text-[10px] uppercase font-black text-[#e2c227] text-center">
                {lang === "EN" ? "Phase: Client Handover" : "Fase: Entrega de Llaves"}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* PORTFOLIO / GALLERY */}
      <section id="gallery" className="py-24 bg-neutral-900 text-white relative scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase text-[#e2c227] tracking-widest block">
              {dict.galleryBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white font-sans">
              {dict.galleryTitle}
            </h2>
            <p className="text-neutral-400 font-light text-sm md:text-base">
              {dict.gallerySubtitle}
            </p>
          </div>

          {/* Filtering row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {galleryFilters.map(fl => (
              <button
                key={fl.id}
                onClick={() => setActiveGalleryFilter(fl.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-200 ${
                  activeGalleryFilter === fl.id
                    ? "bg-[#e2c227] text-neutral-900"
                    : "bg-neutral-800/60 hover:bg-neutral-800 text-neutral-300 border border-neutral-700/50"
                }`}
              >
                {fl.label}
              </button>
            ))}
          </div>

          {/* Rich Grid portfolio layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedGallery.map((proj) => (
              <div 
                key={proj.id}
                className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700/50 group relative cursor-pointer shadow-xl"
                onClick={() => setSelectedGalleryProject(proj)}
              >
                {/* Visual Image container */}
                <div className="relative h-72 sm:h-96 overflow-hidden bg-neutral-950">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark layout shading helper gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Floating centered top tags */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#e2c227] text-neutral-900 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded shadow-md">
                    {dict.hoverView}
                  </div>

                  {/* Absolute positioning bottom label text - perfectly centered! */}
                  <div className="absolute inset-x-6 bottom-6 space-y-2.5 flex flex-col items-center text-center">
                    <span className="inline-flex items-center text-[#e2c227] text-[10px] uppercase font-black tracking-widest bg-black/60 px-3 py-1.5 rounded-full mx-auto">
                      <MapPin className="w-3 h-3 mr-1" /> {proj.location}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight text-center mx-auto">
                      {proj.title}
                    </h3>
                    <p className="text-neutral-300 text-xs font-light line-clamp-2 max-w-lg text-center mx-auto">
                      {proj.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-neutral-950 text-white relative scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase text-[#e2c227] tracking-widest block">
              {dict.testimonialsBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
              {dict.testimonialsTitle}
            </h2>
            <div className="w-16 h-1 bg-[#e2c227] mx-auto rounded-full"></div>
          </div>

          {/* Grid of 3 user quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Quote 1 */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800/80 flex flex-col justify-between hover:border-[#e2c227] transition-all group">
              <div className="space-y-4">
                <div className="flex text-[#e2c227] space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current stroke-none" />)}
                </div>
                <p className="text-neutral-300 text-sm font-light leading-relaxed italic">
                  "{dict.review1Text}"
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-800 mt-6 md:mt-8">
                <h4 className="text-xs font-black text-[#e2c227] uppercase tracking-wide">
                  {dict.review1User}
                </h4>
                <span className="text-[10px] text-neutral-500 block uppercase font-bold mt-1">Cabo Pedregal Villa Remodel</span>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800/80 flex flex-col justify-between hover:border-[#e2c227] transition-all group">
              <div className="space-y-4">
                <div className="flex text-[#e2c227] space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current stroke-none" />)}
                </div>
                <p className="text-neutral-300 text-sm font-light leading-relaxed italic">
                  "{dict.review2Text}"
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-800 mt-6 md:mt-8">
                <h4 className="text-xs font-black text-[#e2c227] uppercase tracking-wide">
                  {dict.review2User}
                </h4>
                <span className="text-[10px] text-neutral-500 block uppercase font-bold mt-1">San Lucas Corridor Wetroom</span>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800/80 flex flex-col justify-between hover:border-[#e2c227] transition-all group">
              <div className="space-y-4">
                <div className="flex text-[#e2c227] space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current stroke-none" />)}
                </div>
                <p className="text-neutral-300 text-sm font-light leading-relaxed italic">
                  "{dict.review3Text}"
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-800 mt-6 md:mt-8">
                <h4 className="text-xs font-black text-[#e2c227] uppercase tracking-wide">
                  {dict.review3User}
                </h4>
                <span className="text-[10px] text-neutral-500 block uppercase font-bold mt-1">San José Sea-Side Protective Coating</span>
              </div>
            </div>

          </div>

          {/* Bottom stats banner */}
          <div className="mt-16 bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800/50 flex flex-col md:flex-row justify-around items-center text-center gap-6">
            <div>
              <div className="text-3xl font-black text-[#e2c227] font-mono">180+</div>
              <div className="text-[10px] uppercase font-bold text-neutral-400 mt-0.5 tracking-wider">
                {lang === "EN" ? "Luxury Condos & Villas Completed" : "Condominios y Villas Entregadas"}
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-neutral-800"></div>
            <div>
              <div className="text-3xl font-black text-[#e2c227] font-mono">100%</div>
              <div className="text-[10px] uppercase font-bold text-neutral-400 mt-0.5 tracking-wider">
                {lang === "EN" ? "On-Time Handover Milestones" : "Entregas a Tiempo"}
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-neutral-800"></div>
            <div>
              <div className="text-3xl font-black text-[#e2c227] font-mono">A+</div>
              <div className="text-[10px] uppercase font-bold text-neutral-400 mt-0.5 tracking-wider">
                {lang === "EN" ? "Procore & American Standards Grade" : "Grado de Auditoría Técnica Americana"}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* AI CONSULTANT INTERACTIVE WIDGET CHATBOT */}
      <section id="chatbot-panel" className="py-24 bg-neutral-50 border-y border-gray-100 scroll-mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase text-[#e2c227] tracking-widest block">
              {lang === "EN" ? "AI REMODELING ASSISTANT" : "ASISTENTE VIRTUAL DE REMODELACIÓN"}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-none text-center">
              {lang === "EN" ? "Baja-Pro Smart Estimator Desk" : "Asistente Virtual Baja-Pro"}
            </h2>
            <div className="w-16 h-1 bg-[#e2c227] mx-auto rounded-full"></div>
            <p className="text-neutral-500 font-light text-sm md:text-base text-center">
              {lang === "EN" 
                ? "Consult our bilingually-grounded AI agent for design rules, custom specifications, or dynamic cost models." 
                : "Consulte estimados, materiales recomendados o metodologías de construcción costera de inmediato."}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-xl">
            
            {/* Chat header */}
            <div className="bg-neutral-900 text-white p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-800 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#e2c227] text-neutral-900 rounded-xl shrink-0">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">
                    {dict.aiAssistantHeader}
                  </h3>
                  <span className="text-[10px] text-[#e2c227] font-bold block uppercase tracking-widest mt-0.5">
                    Representing Oded (Tom) Rondel & Company
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-400 text-[10px] tracking-widest font-black uppercase font-mono">
                  {dict.aiDemoBadge}
                </span>
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping inline-block"></span>
                <span className="text-[10px] font-bold text-neutral-300">Online</span>
              </div>
            </div>

            {/* Chat Introduction block */}
            <div className="bg-yellow-50/40 p-4 border-b border-yellow-100/50 text-[11px] md:text-xs text-neutral-700 flex items-start space-x-2.5">
              <Info className="w-4 h-4 text-[#e2c227] shrink-0 mt-0.5" />
              <span>{dict.aiAssistantIntro}</span>
            </div>

            {/* Real Scrollable messages area */}
            <div className="p-6 h-80 overflow-y-auto space-y-4 bg-gray-50/20">
              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  <div className={`max-w-lg rounded-2xl p-4 text-xs md:text-sm shadow-sm ${
                    msg.role === "user" 
                      ? "bg-neutral-900 text-white rounded-tr-none" 
                      : "bg-white text-neutral-800 border border-gray-150 rounded-tl-none leading-relaxed"
                  }`}>
                    {msg.content}
                    {msg.isDemo && (
                      <span className="block text-[9px] uppercase font-bold text-neutral-400 text-right mt-2 font-mono">
                        Generated by fallback model context
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {aiLoading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 text-xs font-bold text-neutral-500 border border-gray-150 animate-pulse flex items-center space-x-2">
                    <span className="animate-spin text-[#e2c227]">⌛</span>
                    <span>{lang === "EN" ? "Tom's AI desk is consulting formulas..." : "Tom AI está consultando planos..."}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Action Input form */}
            <form onSubmit={handleSendChat} className="p-4 bg-white border-t border-gray-150 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={dict.aiInputPlaceholder}
                className="flex-grow p-3 bg-neutral-50 rounded-xl text-xs md:text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#e2c227] focus:bg-white text-neutral-800 placeholder-neutral-400"
              />
              <button 
                type="submit"
                disabled={aiLoading}
                className="px-5 py-3 bg-neutral-900 hover:bg-[#e2c227] text-white hover:text-neutral-900 font-extrabold uppercase tracking-wider text-xs rounded-xl shrink-0 flex items-center space-x-1.5 transition-colors"
              >
                <span>{dict.aiSend}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>
        </div>
      </section>


      {/* CONTACT / ESTIMATE FORM SECTION */}
      <section id="contact" className="py-24 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Area header for consistency */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase text-[#e2c227] tracking-widest block">
              {lang === "EN" ? "GET IN TOUCH WITH TOM" : "CONTACTO DIRECTO CON TOM"}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-950 tracking-tight leading-none text-center">
              {dict.ctaSectionTitle}
            </h2>
            <div className="w-16 h-1 bg-[#e2c227] mx-auto rounded-full"></div>
            <p className="text-neutral-500 font-light text-sm md:text-base text-center max-w-2xl mx-auto">
              {dict.ctaSectionBody}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: business contact info card (5 columns) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#e2c227] block">
                  {lang === "EN" ? "COMINICATE DIRECTLY" : "COMUNICACIÓN DIRECTA"}
                </span>
                <h3 className="text-xl font-extrabold text-neutral-900 mt-1 leading-tight">
                  {lang === "EN" ? "Oded (Tom) Rondel & Company" : "Oded (Tom) Rondel y Equipo"}
                </h3>
              </div>

              {/* Direct clickable info registry */}
              <div className="space-y-4 pt-4 text-sm font-bold">
                
                <a 
                  href="https://wa.me/526241616968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-4 rounded-xl border border-gray-150 hover:bg-neutral-50 text-neutral-900 hover:border-[#e2c227] transition-all"
                >
                  <div className="p-3 bg-emerald-55 bg-emerald-50 text-emerald-600 rounded-xl">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[10px] text-neutral-400 uppercase font-black tracking-widest block">WhatsApp Tom Direct</span>
                    <span className="text-sm font-black">+52 624 161 6968</span>
                  </div>
                </a>

                <a 
                  href="mailto:info@baja-pro.com"
                  className="flex items-center space-x-3.5 p-4 rounded-xl border border-gray-150 hover:bg-neutral-50 text-neutral-900 hover:border-[#e2c227] transition-all"
                >
                  <div className="p-3 bg-blue-50 text-[#e2c227] rounded-xl">
                    <Mail className="w-5 h-5 text-neutral-800" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[10px] text-neutral-400 uppercase font-black tracking-widest block">Send Email Message</span>
                    <span className="text-xs sm:text-sm font-black break-all">info@baja-pro.com</span>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 p-4 rounded-xl border border-gray-150">
                  <div className="p-3 bg-neutral-100 text-neutral-800 rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[10px] text-neutral-400 uppercase font-black tracking-widest block">Primary Region Serviced</span>
                    <span className="text-sm font-black">Cabo San Lucas, Baja California Sur, México</span>
                  </div>
                </div>

              </div>

              {/* Business card exact rendering visual representation */}
              <div className="bg-neutral-900 text-white rounded-2xl p-6 border border-neutral-800 space-y-4">
                <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
                  <div>
                    <h4 className="text-base font-black text-[#e2c227]">Oded (Tom) Rondel</h4>
                    <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest">Owner / Project Manager</span>
                  </div>
                  <span className="text-[9px] uppercase font-black bg-[#e2c227] text-neutral-900 px-2.5 py-1 rounded">Licensed & Insured</span>
                </div>
                <div className="space-y-2 text-xs text-neutral-300 font-mono">
                  <div>📱 Tel: +52 624 161 6968</div>
                  <div>📍 Cabo San Lucas, Baja California Sur, México</div>
                </div>
                <div className="bg-neutral-950 px-3 py-2 rounded text-[10px] font-black uppercase text-[#e2c227] text-center tracking-widest">
                  “American Standards. Baja Prices.”
                </div>
              </div>

            </div>

            {/* Right: real submitting form (7 columns) */}
            <div className="lg:col-span-7 bg-neutral-50 rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-lg relative">
              
              {formSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 text-emerald-950 font-sans text-xs md:text-sm rounded-2xl flex flex-col items-center justify-center text-center space-y-4 shadow-xl animate-in fade-in duration-300 min-h-[400px]">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                  <h3 className="text-lg font-black uppercase text-emerald-900">{lang === "EN" ? "Estimate Proposal Registered!" : "¡Presupuesto Registrado Exitosamente!"}</h3>
                  <p className="max-w-md font-light leading-relaxed">{dict.contactSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleContactFormSubmit} className="space-y-5">
                  <h3 className="text-lg font-black uppercase tracking-wider text-neutral-900 border-b border-gray-150 pb-3">
                    {lang === "EN" ? "Submit Project Guidelines" : "Enviar Detalles de Proyecto"}
                  </h3>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder={dict.placeholderName}
                      className="w-full p-4 bg-white rounded-xl text-xs md:text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#e2c227] text-neutral-800 placeholder-neutral-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder={dict.placeholderEmail}
                        className="w-full p-4 bg-white rounded-xl text-xs md:text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#e2c227] text-neutral-800 placeholder-neutral-400"
                      />
                    </div>

                    {/* Phone field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">WhatsApp Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder={dict.placeholderPhone}
                        className="w-full p-4 bg-white rounded-xl text-xs md:text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#e2c227] text-neutral-800 placeholder-neutral-400"
                      />
                    </div>
                  </div>

                  {/* Context project notes */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">Project Description Notes</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder={dict.placeholderNotes}
                      className="w-full p-4 bg-white rounded-xl text-xs md:text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#e2c227] text-neutral-800 placeholder-neutral-400"
                    />
                  </div>

                  {/* Button Submit */}
                  <button
                    type="submit"
                    className="w-full text-center py-4 bg-[#e2c227] text-neutral-900 rounded-xl hover:bg-neutral-900 hover:text-white font-black uppercase text-xs tracking-widest transition-colors shadow shadow-yellow-500/10 cursor-pointer"
                  >
                    {dict.requestAQuote}
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>


      {/* REAL SHOWCASE SPEC DETAIL MODAL (Whenever project inside gallery is clicked) */}
      {selectedGalleryProject && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 select-none shadow-2xl animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full text-neutral-900 shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
            
            {/* Header Image */}
            <div className="relative h-60 sm:h-80 overflow-hidden bg-neutral-950">
              <img 
                src={selectedGalleryProject.image} 
                alt={selectedGalleryProject.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
              <button 
                onClick={() => setSelectedGalleryProject(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-[#e2c227] text-white hover:text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow cursor-pointer font-sans"
              >
                ✕
              </button>
              
              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#e2c227] block mb-1">
                  CASE STUDY REVEAL
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {selectedGalleryProject.title}
                </h3>
              </div>
            </div>

            {/* Scrollable details Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <div className="flex items-center space-x-2 text-xs text-neutral-500">
                <MapPin className="w-4 h-4 text-[#e2c227] shrink-0" />
                <strong>{selectedGalleryProject.location}</strong>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                {selectedGalleryProject.description}
              </p>

              {/* Remodeling custom highlights */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-black tracking-widest uppercase text-neutral-400">
                  {lang === "EN" ? "Custom Renovations Layout:" : "Remodelaciones Implementadas:"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedGalleryProject.remodelingHighlights.map((hl: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-700">
                      <span className="text-[#e2c227] font-bold">✔</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* American building standards assured */}
              <div className="p-4 bg-yellow-50/50 rounded-xl border border-yellow-200 space-y-2.5">
                <h4 className="text-[10px] font-black tracking-widest uppercase text-yellow-800 flex items-center space-x-1.5">
                  <Shield className="w-4 h-4 text-yellow-600 shrink-0" />
                  <span>{lang === "EN" ? "VERIFIED AMERICAN STANDARDS APPLIED" : "ESTÁNDARES TÉCNICOS AMERICANOS REFORZADOS"}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-yellow-950 italic font-light">
                  {selectedGalleryProject.standardsMet.map((std: string, idx: number) => (
                    <div key={idx} className="flex items-center space-x-1.5">
                      <span className="text-emerald-600">●</span>
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs">
                <span className="text-neutral-400 font-mono tracking-tighter">Code: CS-{selectedGalleryProject.category.toUpperCase()}</span>
                <button
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      notes: lang === "EN" 
                        ? `Interested in a project similar to: ${selectedGalleryProject.title}`
                        : `Interés en un proyecto similar a: ${selectedGalleryProject.title}`
                    }));
                    setSelectedGalleryProject(null);
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="px-5 py-3 bg-neutral-950 text-[#e2c227] hover:bg-[#e2c227] hover:text-neutral-900 uppercase font-black tracking-widest rounded-lg transition-colors cursor-pointer w-full sm:w-auto text-center font-bold"
                >
                  {lang === "EN" ? "Request Similar Project Quote" : "Solicitar Presupuesto Semejante"}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}


      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-neutral-900 pb-12">
            
            {/* Column 1: contact info registry (4 cols on lg) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center text-white">
                <Logo className="h-20 w-auto" variant="color" />
              </div>
              
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                {lang === "EN" 
                  ? "Delivering exceptional, precise residential remodeling, space expansions, custom moisture-hardened swimming tiling, and seaside weathering paint." 
                  : "Brindamos servicios excepcionales de remodelación residencial de primer nivel, ampliación de espacios, e impermeabilización marina de vanguardia."}
              </p>

              <div className="space-y-1.5 text-xs">
                <div>📞 WhatsApp / Tel: <strong className="text-white">+52 624 161 6968</strong></div>
                <div>📍 Office: <strong className="text-white">Cabo San Lucas, Baja California Sur, México</strong></div>
                <div className="text-[10px] text-neutral-500 pt-1">{dict.footerLicense}</div>
              </div>
            </div>

            {/* Column 2: quick links (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-4 text-xs font-bold uppercase tracking-wider text-neutral-300">
              <h4 className="text-xs text-white uppercase font-black tracking-widest">{dict.footerCol2Title}</h4>
              <ul className="space-y-2 font-medium">
                <li>
                  <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#e2c227]">
                    {lang === "EN" ? "Home Area" : "Página Principal"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#e2c227]">
                    {lang === "EN" ? "About Company" : "Nosotros"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#e2c227]">
                    {lang === "EN" ? "Our Services" : "Especialidades"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#e2c227]">
                    {lang === "EN" ? "Our Portfolio" : "Galería de Obras"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#e2c227]">
                    {lang === "EN" ? "Our Work Process" : "Cómo Trabajamos"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#e2c227]">
                    {lang === "EN" ? "Client Review Memoirs" : "Reseñas"}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: services (3 cols on lg) */}
            <div className="lg:col-span-3 space-y-4 text-xs font-bold uppercase tracking-wider text-neutral-300">
              <h4 className="text-xs text-white uppercase font-black tracking-widest">{dict.footerCol3Title}</h4>
              <ul className="space-y-2 font-medium text-neutral-400">
                <li>
                  <button onClick={() => handleSelectServiceFromHeader("remodeling")} className="hover:text-[#e2c227] text-left">
                    {lang === "EN" ? "Coastal Remodeling" : "Remodelación Costera"}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSelectServiceFromHeader("painting")} className="hover:text-[#e2c227] text-left">
                    {lang === "EN" ? "Protective Paint Seals" : "Pintura Elastomérica Marina"}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSelectServiceFromHeader("tile")} className="hover:text-[#e2c227] text-left">
                    {lang === "EN" ? "Tile & Stone Laying" : "Pisos y Azulejos"}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSelectServiceFromHeader("repairs")} className="hover:text-[#e2c227] text-left">
                    {lang === "EN" ? "General House Repairs" : "Reparaciones de Hogar"}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSelectServiceFromHeader("airbnb")} className="hover:text-[#e2c227] text-left">
                    {lang === "EN" ? "Airbnb Durability Upgrades" : "Mejoras para Renta Vacacional"}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSelectServiceFromHeader("bath_kitchen")} className="hover:text-[#e2c227] text-left">
                    {lang === "EN" ? "Kitchen & Bath Wet-Rooms" : "Cocinas y Baños Estilo Spa"}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter sign up (3 cols on lg) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs text-white uppercase font-black tracking-widest">{dict.footerCol4Title}</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                {dict.footerNewsIntro}
              </p>

              {newsSubmitted ? (
                <div className="p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs rounded-xl flex items-center space-x-1.5 leading-snug">
                  <span>✔ {dict.newsSuccess}</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder={dict.placeholderNewsEmail}
                    className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs focus:ring-1 focus:ring-[#e2c227] outline-none text-white placeholder-neutral-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#e2c227] hover:bg-white text-neutral-900 rounded-xl text-xs uppercase tracking-widest font-black transition-colors cursor-pointer"
                  >
                    {dict.footerNewsBtn}
                  </button>
                </form>
              )}
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} Baja-Pro Home Improvement. Cabo San Lucas, Baja California Sur, México.
            </div>
            <div className="flex space-x-4">
              <span>{lang === "EN" ? "American Standards, Baja Prices" : "Estándares Americanos, Precios de Baja"}</span>
              <span>•</span>
              <span className="text-emerald-505 font-bold text-emerald-500">✔ Licensed Municipal Business</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
