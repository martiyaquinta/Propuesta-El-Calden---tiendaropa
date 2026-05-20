import { Link } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Search,
  User,
  Menu,
  X,
  Filter,
  Star,
  Truck,
  Shield,
  CreditCard,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import Logo from "../components/Logo";

export default function ECommerce() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Remera Essential Black",
      price: 2999,
      quantity: 1,
      size: "M",
      image: "https://images.unsplash.com/photo-1485920784995-d65789b1c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRzaGlydCUyMG1pbmltYWx8ZW58MXx8fHwxNzc5MjkxNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ]);

  const products = [
    {
      id: 1,
      name: "Remera Essential Black",
      price: 2999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1485920784995-d65789b1c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRzaGlydCUyMG1pbmltYWx8ZW58MXx8fHwxNzc5MjkxNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      stock: 15,
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "Jeans Slim Fit",
      price: 7499,
      image: "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGplYW5zJTIwZGVuaW18ZW58MXx8fHwxNzc5MTM5Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      stock: 8,
      tag: "Nuevo",
    },
    {
      id: 3,
      name: "Campera Urbana Premium",
      price: 12999,
      originalPrice: 15999,
      image: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBqYWNrZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc3OTI5MTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
      stock: 5,
      tag: "Oferta",
    },
    {
      id: 4,
      name: "Accesorios Premium",
      price: 1999,
      image: "https://images.unsplash.com/photo-1758887953059-ca6f8e454207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3OTI5MTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      stock: 20,
    },
    {
      id: 5,
      name: "Streetwear Collection",
      price: 5999,
      image: "https://images.unsplash.com/photo-1660486044177-45cd45bb5e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3OTI5MTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
      stock: 12,
      tag: "Trending",
    },
    {
      id: 6,
      name: "Outfit Completo Urban",
      price: 9999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1640270712121-ae4a538a8ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2F0YWxvZyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzkyOTE1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      stock: 6,
      tag: "Pack",
    },
  ];

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/">
          <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        <p>
          🔥 Envío gratis en compras superiores a $15,000 · Hasta 6 cuotas sin
          interés
        </p>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>

            <Logo size="sm" />

            {/* Search Desktop */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Sheet open={cartOpen} onOpenChange={setCartOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-lg">
                  <SheetHeader>
                    <SheetTitle>Carrito de Compras</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-auto py-6">
                      {cart.length === 0 ? (
                        <div className="text-center py-12 text-slate-500">
                          <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
                          <p>Tu carrito está vacío</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {cart.map((item) => (
                            <Card key={item.id}>
                              <CardContent className="p-4">
                                <div className="flex gap-4">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg"
                                  />
                                  <div className="flex-1">
                                    <h4 className="font-semibold mb-1">
                                      {item.name}
                                    </h4>
                                    <p className="text-sm text-slate-600 mb-2">
                                      Talle: {item.size}
                                    </p>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Button
                                          size="icon"
                                          variant="outline"
                                          className="h-8 w-8"
                                          onClick={() =>
                                            updateQuantity(item.id, -1)
                                          }
                                        >
                                          <Minus className="w-3 h-3" />
                                        </Button>
                                        <span className="w-8 text-center">
                                          {item.quantity}
                                        </span>
                                        <Button
                                          size="icon"
                                          variant="outline"
                                          className="h-8 w-8"
                                          onClick={() =>
                                            updateQuantity(item.id, 1)
                                          }
                                        >
                                          <Plus className="w-3 h-3" />
                                        </Button>
                                      </div>
                                      <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8"
                                        onClick={() => removeItem(item.id)}
                                      >
                                        <Trash2 className="w-4 h-4 text-red-500" />
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-bold">
                                      ${(item.price * item.quantity).toLocaleString()}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>

                    {cart.length > 0 && (
                      <div className="border-t pt-4 space-y-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span>${cartTotal.toLocaleString()}</span>
                        </div>
                        <Button size="lg" className="w-full bg-black hover:bg-black/90">
                          Iniciar Compra
                        </Button>
                        <p className="text-xs text-center text-slate-500">
                          Envío e impuestos calculados al finalizar
                        </p>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Search Mobile */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Buscar productos..." className="pl-10" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1779153249354-78d09baabbd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBtb2Rlcm4lMjBjbG90aGluZ3xlbnwxfHx8fDE3NzkyOTE1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl text-white"
            >
              <Badge className="mb-4 bg-white text-black hover:bg-white/90">
                Nueva Colección 2026
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Estilo Urbano Definitivo
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Hasta 40% OFF en productos seleccionados
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Comprar Ahora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Envío Gratis</h3>
                <p className="text-sm text-slate-600">En compras +$15,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">6 Cuotas Sin Interés</h3>
                <p className="text-sm text-slate-600">Con tarjetas bancarias</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Compra Segura</h3>
                <p className="text-sm text-slate-600">Protección total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Filters */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Todos los Productos</h2>
            <div className="flex items-center gap-4">
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-low">Menor precio</SelectItem>
                  <SelectItem value="price-high">Mayor precio</SelectItem>
                  <SelectItem value="newest">Más nuevos</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    {product.tag && (
                      <Badge className="absolute top-3 left-3 z-10 bg-black text-white">
                        {product.tag}
                      </Badge>
                    )}
                    <button className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">
                        {product.rating}
                      </span>
                      <span className="text-sm text-slate-500 ml-1">
                        ({product.stock} disponibles)
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-black hover:bg-black/90"
                    >
                      Agregar al Carrito
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Cargar Más Productos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-slate-900 to-black text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Suscribete y obtén 15% OFF
            </h2>
            <p className="text-white/80 mb-8">
              En tu primera compra. Recibí novedades y ofertas exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Tu email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Suscribirme
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo size="md" className="mb-4" />
              <p className="text-slate-600 text-sm mb-4">
                Tu tienda de moda urbana online. Calidad y estilo garantizado.
              </p>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comprar</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="hover:text-black cursor-pointer">Remeras</p>
                <p className="hover:text-black cursor-pointer">Pantalones</p>
                <p className="hover:text-black cursor-pointer">Camperas</p>
                <p className="hover:text-black cursor-pointer">Accesorios</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ayuda</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="hover:text-black cursor-pointer">Guía de talles</p>
                <p className="hover:text-black cursor-pointer">Envíos</p>
                <p className="hover:text-black cursor-pointer">Devoluciones</p>
                <p className="hover:text-black cursor-pointer">Preguntas frecuentes</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-slate-600">
                <p>+54 9 11 1234-5678</p>
                <p>ventas@elcalden.com</p>
                <p>Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <p>© 2026 El Caldén · PROPUESTA NIVEL 3: E-COMMERCE COMPLETO</p>
            <div className="flex gap-6">
              <span className="hover:text-black cursor-pointer">Términos</span>
              <span className="hover:text-black cursor-pointer">Privacidad</span>
              <span className="hover:text-black cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
