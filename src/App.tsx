import { useState, useEffect } from 'react';
import './index.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/modals/QuoteModal';
import { SpecSheetModal } from './components/modals/SpecSheetModal';
import type { ProductItem } from './data/ecocreteData';

export type ViewMode = 'home' | 'services' | 'products' | 'about' | 'contact' | 'service-detail';

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('terraforce-retaining-walls');

  // Modals state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);
  const [quoteProductId, setQuoteProductId] = useState<string | undefined>(undefined);

  const [activeSpecProduct, setActiveSpecProduct] = useState<ProductItem | null>(null);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedServiceId]);

  const handleNavigate = (view: 'home' | 'services' | 'products' | 'about' | 'contact', serviceId?: string) => {
    if (view === 'services' && serviceId) {
      setSelectedServiceId(serviceId);
      setCurrentView('service-detail');
    } else {
      setCurrentView(view);
    }
  };

  const handleOpenQuoteModal = (serviceId?: string, productId?: string) => {
    setQuoteServiceId(serviceId);
    setQuoteProductId(productId);
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceDetail = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView('service-detail');
  };

  return (
    <div className="ecocrete-app">
      {/* Persistent Architectural Header with contact info embedded */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Page Views Switcher */}
      <main>
        {currentView === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuoteModal()}
          />
        )}

        {currentView === 'services' && (
          <ServicesPage
            onSelectService={handleSelectServiceDetail}
            onOpenQuote={() => handleOpenQuoteModal()}
          />
        )}

        {currentView === 'service-detail' && (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            onBackToServices={() => setCurrentView('services')}
            onSelectService={handleSelectServiceDetail}
            onOpenQuote={(srvId) => handleOpenQuoteModal(srvId)}
          />
        )}

        {currentView === 'products' && (
          <ProductsPage
            onOpenSpecSheet={(product) => setActiveSpecProduct(product)}
            onOpenQuote={(prodId) => handleOpenQuoteModal(undefined, prodId)}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuoteModal()}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Persistent Footer with Ecocrete sales contact info & licensing */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Interactive Quotation & Site Consultation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedServiceId={quoteServiceId}
        preselectedProductId={quoteProductId}
      />

      {/* Interactive SABS Technical Specification Sheet Previewer */}
      <SpecSheetModal
        product={activeSpecProduct}
        onClose={() => setActiveSpecProduct(null)}
        onOpenQuote={() => {
          if (activeSpecProduct) {
            handleOpenQuoteModal(undefined, activeSpecProduct.id);
          } else {
            handleOpenQuoteModal();
          }
        }}
      />
    </div>
  );
}

export default App;
