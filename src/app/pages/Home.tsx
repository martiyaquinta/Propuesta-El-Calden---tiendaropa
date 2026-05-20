import { Link } from "react-router";
import { motion } from "motion/react";
import { Zap, Building2, ShoppingCart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import Logo from "../components/Logo";

export default function Home() {
  const proposals = [
    {
      id: 1,
      title: "Landing Page",
      subtitle: "Solución Rápida",
      description: "Presencia digital impactante en una sola página. Perfecta para comenzar.",
      icon: Zap,
      path: "/landing-page",
      price: "Desde $299",
      features: [
        "Diseño moderno y responsivo",
        "Hero visual impactante",
        "Integración WhatsApp",
        "Sección de productos",
        "Conexión Instagram",
      ],
      color: "from-violet-500 to-purple-600",
    },
    {
      id: 2,
      title: "Web Profesional",
      subtitle: "Presencia Consolidada",
      description: "Sitio multi-página con branding fuerte y diseño corporativo premium.",
      icon: Building2,
      path: "/web-profesional",
      price: "Desde $799",
      features: [
        "Múltiples páginas",
        "Blog y novedades",
        "SEO optimizado",
        "Diseño corporativo",
        "Animaciones suaves",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      title: "E-Commerce Completo",
      subtitle: "Tienda Online Profesional",
      description: "Plataforma completa para vender online con carrito, pagos y gestión.",
      icon: ShoppingCart,
      path: "/ecommerce",
      price: "Desde $1,499",
      features: [
        "Carrito de compras",
        "Pasarela de pago",
        "Gestión de stock",
        "Panel administrador",
        "Sistema completo",
      ],
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Logo size="sm" />
              <div>
                <p className="text-sm text-slate-600 font-medium">Propuesta de Desarrollo Web</p>
              </div>
            </div>
            <Button variant="outline">Contactar</Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Elige el nivel perfecto para tu negocio
            </h2>
            <p className="text-xl text-slate-600">
              3 propuestas profesionales diseñadas para diferentes necesidades y presupuestos
            </p>
          </motion.div>

          {/* Proposals Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {proposals.map((proposal, index) => {
              const Icon = proposal.icon;
              return (
                <motion.div
                  key={proposal.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-slate-300">
                    <CardHeader>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${proposal.color} flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{proposal.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {proposal.subtitle}
                      </CardDescription>
                      <p className="text-3xl font-bold mt-2">{proposal.price}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600">{proposal.description}</p>
                      
                      <ul className="space-y-2">
                        {proposal.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${proposal.color}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link to={proposal.path} className="block mt-6">
                        <Button
                          className={`w-full bg-gradient-to-r ${proposal.color} hover:opacity-90`}
                          size="lg"
                        >
                          Ver Propuesta
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </h3>
            <p className="text-slate-300 mb-8">
              Explora cada propuesta y elige la que mejor se adapte a tus necesidades
            </p>
            <Button size="lg" variant="secondary">
              Agendar Consultoría Gratuita
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-white">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>© 2026 El Caldén - Propuesta Comercial</p>
        </div>
      </footer>
    </div>
  );
}
