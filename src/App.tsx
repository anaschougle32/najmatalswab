import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main One-Page Website */}
          <Route path="/" element={<Index />} />

          {/* Seamless Anchored Redirects for legacy multi-page routes */}
          <Route path="/capabilities" element={<Navigate to="/#capabilities" replace />} />
          <Route path="/services" element={<Navigate to="/#capabilities" replace />} />
          <Route path="/projects" element={<Navigate to="/#capabilities" replace />} />
          <Route path="/materials-finishes" element={<Navigate to="/#finishes" replace />} />
          <Route path="/finishes" element={<Navigate to="/#finishes" replace />} />
          <Route path="/chutes" element={<Navigate to="/#chutes" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
