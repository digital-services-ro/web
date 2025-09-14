import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./components/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/servicii" element={<Services language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/despre-noi" element={<About language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/blog" element={<Blog language={language} />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer language={language} />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
