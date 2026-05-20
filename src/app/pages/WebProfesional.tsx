import { Link } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Logo from "../components/Logo";

export default function WebProfesional() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("inicio");

  const collections = [
    {
      name: "Primavera/Verano 2026",
      image: "https://images.unsplash.com/photo-1660486044177-45cd45bb5e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3OTI5MTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Colores vibrantes y diseños frescos",
    },
    {
      name: "Línea Urban Street",
      image: "https://images.unsplash.com/photo-1640270712121-ae4a538a8ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2F0YWxvZyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzkyOTE1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Estilo contemporáneo urbano",
    },
    {
      name: "Colección Premium",
      image: "https://images.unsplash.com/photo-1769981271695-bb3d766ee419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzc5MjkxNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Exclusividad y alta calidad",
    },
  ];

  const blogPosts = [
    {
      title: "Tendencias 2026: El Minimalismo Vuelve",
      date: "15 Mayo 2026",
      excerpt: "Descubre cómo el minimalismo está transformando la moda urbana contemporánea...",
      image: "https://images.unsplash.com/photo-1644562278850-0181eb7f587a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY2xvdGhpbmclMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3OTI5MTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Cómo Combinar tu Outfit Urbano",
      date: "10 Mayo 2026",
      excerpt: "Tips y consejos de estilismo para lograr el look urbano perfecto...",
      image: "https://images.unsplash.com/photo-1767334010488-83cdb8539273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbG90aGluZyUyMGRpc3BsYXl8ZW58MXx8fHwxNzc5MjkxNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const navItems = ["Inicio", "Nosotros", "Catálogo", "Blog", "Contacto"];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/">
          <Button variant="outline" size="icon" className="rounded-full shadow-lg">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Logo size="sm" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`transition-colors ${
                    activeTab === item.toLowerCase()
                      ? "text-black font-semibold"
                      : "text-slate-600 hover:text-black"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t bg-white"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 px-4 hover:bg-slate-50 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="hidden">
          {navItems.map((item) => (
            <TabsTrigger key={item} value={item.toLowerCase()}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Inicio */}
        <TabsContent value="inicio" className="m-0">
          {/* Hero */}
          <section className="relative h-[90vh] flex items-center">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1779153249354-78d09baabbd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBtb2Rlcm4lMjBjbG90aGluZ3xlbnwxfHx8fDE3NzkyOTE1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl text-white"
              >
                <h1 className="text-6xl md:text-7xl font-bold mb-6">
                  Redefiniendo la Moda Urbana
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Diseños contemporáneos que reflejan tu personalidad y estilo de vida
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90"
                    onClick={() => setActiveTab("catálogo")}
                  >
                    Ver Catálogo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => setActiveTab("nosotros")}
                  >
                    Conocer Más
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Collections Preview */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">Colecciones Destacadas</h2>
                <p className="text-slate-600">Explora nuestras líneas exclusivas</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {collections.map((collection, index) => (
                  <motion.div
                    key={collection.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                          <p className="text-white/90">{collection.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Nosotros */}
        <TabsContent value="nosotros" className="m-0">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl font-bold mb-6">Nuestra Historia</h1>
                <p className="text-xl text-slate-600">
                  Más que una marca, un estilo de vida
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1644562278850-0181eb7f587a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY2xvdGhpbmclMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3OTI5MTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Store"
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-bold">Una Marca Comprometida</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Desde 2015, El Caldén ha sido sinónimo de calidad, estilo y
                    autenticidad. Nacimos con la misión de ofrecer moda urbana
                    contemporánea que refleje la personalidad única de cada cliente.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Trabajamos con diseñadores locales e internacionales para crear
                    colecciones exclusivas que combinan tendencias globales con la
                    esencia del estilo urbano argentino.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Nuestro compromiso va más allá de la moda: apostamos por la
                    sustentabilidad, la producción ética y el apoyo a talentos emergentes.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8 text-center"
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-black mb-2">10+</div>
                    <p className="text-slate-600">Años de experiencia</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-black mb-2">50k+</div>
                    <p className="text-slate-600">Clientes satisfechos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-black mb-2">200+</div>
                    <p className="text-slate-600">Productos únicos</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </TabsContent>

        {/* Catálogo */}
        <TabsContent value="catálogo" className="m-0">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl font-bold mb-4">Catálogo Completo</h1>
                <p className="text-slate-600">
                  Descubre todas nuestras colecciones y productos
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {collections.map((collection, index) => (
                  <motion.div
                    key={collection.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="aspect-[3/4]">
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-2">{collection.name}</h3>
                        <p className="text-slate-600 mb-4">{collection.description}</p>
                        <Button className="w-full">Ver Colección</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Blog */}
        <TabsContent value="blog" className="m-0">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl font-bold mb-4">Blog & Novedades</h1>
                <p className="text-slate-600">
                  Inspiración, tendencias y noticias del mundo de la moda
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
                      <div className="aspect-video">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                        <h3 className="font-bold text-2xl mb-3">{post.title}</h3>
                        <p className="text-slate-600 mb-4">{post.excerpt}</p>
                        <Button variant="link" className="p-0">
                          Leer más →
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Contacto */}
        <TabsContent value="contacto" className="m-0">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl font-bold mb-4">Contacto</h1>
                <p className="text-slate-600">
                  Estamos aquí para ayudarte
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Nombre completo" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input placeholder="Asunto" />
                    </div>
                    <div>
                      <Textarea placeholder="Mensaje" rows={5} />
                    </div>
                    <Button size="lg" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Dirección</h3>
                      <p className="text-slate-600">
                        Av. Santa Fe 1234, CABA<br />
                        Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-slate-600">+54 9 11 1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-slate-600">info@elcalden.com</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="font-semibold mb-4">Síguenos</h3>
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Instagram className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Facebook className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Twitter className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo size="md" textClassName="text-white" />
              <p className="text-slate-400 text-sm mt-4">
                Moda urbana contemporánea desde 2015
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <div className="space-y-2 text-sm text-slate-400">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item.toLowerCase())}
                    className="block hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>+54 9 11 1234-5678</p>
                <p>info@elcalden.com</p>
                <p>Av. Santa Fe 1234, CABA</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociales</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-white hover:text-white/80">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-white/80">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-white/80">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2026 El Caldén · PROPUESTA NIVEL 2: WEB PROFESIONAL</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
