import React, { useState, useMemo } from 'react';
import {
  POPULAR_VEHICLES,
  RECENT_MATCHES,
  EDITORIAL_ARTICLES,
  NEWS_ARTICLES,
  VIDEO_GUIDES,
  Vehicle,
  SourcingMatch,
  EditorialArticle,
  NewsArticle,
  VideoGuide
} from './data/mockData.ts';

import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ExploreByNeed } from './components/ExploreByNeed.tsx';
import { PopularSourcingSection } from './components/PopularSourcingSection.tsx';
import { TrustSection } from './components/TrustSection.tsx';
import { RecentMatchesSection } from './components/RecentMatchesSection.tsx';
import { EditorialAdviceSection } from './components/EditorialAdviceSection.tsx';
import { PracticalToolsSection } from './components/PracticalToolsSection.tsx';
import { DirectorySection } from './components/DirectorySection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';

// Modals
import { VehicleDetailModal } from './components/modals/VehicleDetailModal.tsx';
import { SourcingRequestModal } from './components/modals/SourcingRequestModal.tsx';
import { SellVehicleModal } from './components/modals/SellVehicleModal.tsx';
import { AgentPortalModal } from './components/modals/AgentPortalModal.tsx';
import { KwachaCalculatorModal } from './components/modals/KwachaCalculatorModal.tsx';
import { ArticleReaderModal } from './components/modals/ArticleReaderModal.tsx';
import { VideoPlayerModal } from './components/modals/VideoPlayerModal.tsx';
import { InspectionYardsModal } from './components/modals/InspectionYardsModal.tsx';
import { WhitebookChecklistModal } from './components/modals/WhitebookChecklistModal.tsx';

export default function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(POPULAR_VEHICLES);
  const [matches] = useState<SourcingMatch[]>(RECENT_MATCHES);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);
  const [budgetFilter, setBudgetFilter] = useState<string | null>(null);

  // Modals state
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle | NewsArticle | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoGuide | null>(null);

  const [sourcingModalOpen, setSourcingModalOpen] = useState(false);
  const [sourcingPrefill, setSourcingPrefill] = useState('');

  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [sellPrefillPlate, setSellPrefillPlate] = useState('');

  const [agentModalOpen, setAgentModalOpen] = useState(false);
  const [agentPrefillPhone, setAgentPrefillPhone] = useState('');

  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [checklistOpen, setChecklistOpen] = useState(false);
  const [yardsOpen, setYardsOpen] = useState(false);

  // Filter computation
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      // Search Query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = v.name.toLowerCase().includes(q);
        const matchesBrand = v.brand.toLowerCase().includes(q);
        const matchesLocation = v.location.toLowerCase().includes(q);
        const matchesDesc = v.description.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesLocation && !matchesDesc) {
          return false;
        }
      }

      // Category
      if (selectedCategory && selectedCategory !== 'all') {
        if (selectedCategory === 'lusaka-verified' && v.city !== 'Lusaka') return false;
        if (selectedCategory === 'fuel-savers' && v.category !== 'fuel-savers') return false;
        if (selectedCategory === 'under-250k' && v.guideBudget > 250000) return false;
        if (selectedCategory === 'under-500k' && v.guideBudget > 500000) return false;
        if (selectedCategory === 'under-1m' && v.guideBudget > 1000000) return false;
        if (selectedCategory === 'executive' && v.category !== 'executive') return false;
      }

      // Brand
      if (selectedBrand) {
        if (v.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }
      }

      // Body Type
      if (selectedBodyType) {
        if (v.bodyType.toLowerCase() !== selectedBodyType.toLowerCase()) {
          return false;
        }
      }

      // Budget Range Filter
      if (budgetFilter) {
        if (budgetFilter === 'under-150k' && v.guideBudget > 150000) return false;
        if (budgetFilter === '150k-300k' && (v.guideBudget < 150000 || v.guideBudget > 300000)) return false;
        if (budgetFilter === '300k-500k' && (v.guideBudget < 300000 || v.guideBudget > 500000)) return false;
        if (budgetFilter === 'over-500k' && v.guideBudget < 500000) return false;
      }

      return true;
    });
  }, [vehicles, searchQuery, selectedCategory, selectedBrand, selectedBodyType, budgetFilter]);

  const hasActiveFilters = Boolean(
    searchQuery || selectedCategory || selectedBrand || selectedBodyType || budgetFilter
  );

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedBodyType(null);
    setBudgetFilter(null);
  };

  const handleOpenSourcing = (carName?: string) => {
    setSourcingPrefill(carName || '');
    setSourcingModalOpen(true);
  };

  const handleOpenSell = (plate?: string) => {
    setSellPrefillPlate(plate || '');
    setSellModalOpen(true);
  };

  const handleOpenAgent = (phone?: string) => {
    setAgentPrefillPhone(phone || '');
    setAgentModalOpen(true);
  };

  const handleNewVehicleSubmitted = (newCarData: any) => {
    const newVehicle: Vehicle = {
      id: `user-car-${Date.now()}`,
      name: `${newCarData.make} ${newCarData.model}`,
      brand: newCarData.make,
      badge: 'Fresh Submission',
      badgeType: 'daily',
      location: `${newCarData.location} (${newCarData.plate})`,
      city: newCarData.location as any,
      matchType: 'Direct Seller Match',
      guideBudget: Number(newCarData.askingPrice.replace(/[^0-9]/g, '')) || 250000,
      displayPrice: `Guide Budget: K${newCarData.askingPrice}`,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2M_l9JDvSzzycpXIdzThDcxjAYQyWRHbHGc7n5iiFpBtYmfyGl7CPBb8mi4vv81Br3ufuNHSziGQu4UQyE-MpWeR6-fbULCUY8FWW5lWXhFg4Ut73dwocShMxL84bJt_TWNFomcET3WCsTzEjzmdymqaM1TcK9z3hmUEMfX2I-JKHLTw8YnuMWAMGIpkEuDcZpahBvexuAflkm1L5PkkZuMXnK4-3oWaa4W7Dh2KM_FCBjZa_80Y5bw',
      category: 'under-500k',
      bodyType: 'Sedan',
      fuelType: 'Petrol',
      year: Number(newCarData.year) || 2018,
      engine: '1.5L VVT-i',
      transmission: newCarData.transmission || 'Automatic',
      mileage: 'Freshly Listed',
      description: `Newly submitted seller vehicle registered in Zambia. Verification in progress with local AutoAce agent in ${newCarData.location}.`,
      features: ['RTSA Whitebook Verified', 'Clean Title', 'Direct Seller Contact'],
      rtsaVerified: true,
      zraDutyPaid: true,
      agentName: 'AutoAce Verified Network',
      agentPhone: newCarData.phone || '+260 97 123 4567'
    };

    setVehicles([newVehicle, ...vehicles]);
  };

  return (
    <div className="bg-[#F8FAFC] font-body-md text-body-md text-[#0F172A] antialiased min-h-screen flex flex-col">
      {/* Primary Fixed Header */}
      <Header
        activeScreen="home"
        onNavigate={() => {}}
        onOpenSourcingModal={handleOpenSourcing}
        onOpenSellModal={() => handleOpenSell()}
        onOpenAgentModal={() => handleOpenAgent()}
        onOpenCalculator={() => setCalculatorOpen(true)}
        onOpenChecklist={() => setChecklistOpen(true)}
        onFilterCategory={(cat) => {
          if (cat === 'SUV' || cat === 'Twin Cab' || cat === 'Sedan') {
            setSelectedBodyType(cat);
          } else if (cat === 'under-250k') {
            setSelectedCategory('under-250k');
          }
          const el = document.getElementById('popular-sourcing');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Page Body (responsive offset for fixed header height) */}
      <main className="w-full pt-[124px] sm:pt-[132px] lg:pt-[136px] bg-[#F8FAFC] flex-1">
        {/* Active Filter Notification Bar */}
        {hasActiveFilters && (
          <div className="bg-[#1B365D] text-white px-4 py-2.5 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-bold gap-3 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="material-symbols-outlined text-[18px]">filter_alt</span>
                <span>Active Filters:</span>
                {searchQuery && (
                  <span className="bg-white/20 px-2 py-0.5 rounded font-normal">
                    Search: "{searchQuery}"
                  </span>
                )}
                {selectedCategory && (
                  <span className="bg-white/20 px-2 py-0.5 rounded font-normal">
                    Category: {selectedCategory}
                  </span>
                )}
                {selectedBrand && (
                  <span className="bg-white/20 px-2 py-0.5 rounded font-normal">
                    Brand: {selectedBrand}
                  </span>
                )}
                {selectedBodyType && (
                  <span className="bg-white/20 px-2 py-0.5 rounded font-normal">
                    Body: {selectedBodyType}
                  </span>
                )}
                {budgetFilter && (
                  <span className="bg-white/20 px-2 py-0.5 rounded font-normal">
                    Budget: {budgetFilter}
                  </span>
                )}
                <span className="text-white/80">({filteredVehicles.length} found)</span>
              </div>
              <button
                onClick={clearAllFilters}
                className="underline hover:text-white/80 cursor-pointer text-xs"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* 1. Hero Banner Section */}
        <HeroSection
          onSearch={(query) => setSearchQuery(query)}
          onFilterBudget={(budget) => {
            setBudgetFilter(budget);
            const el = document.getElementById('popular-sourcing');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onFilterCategory={(cat) => {
            if (cat === 'SUV' || cat === 'Twin Cab') {
              setSelectedBodyType(cat);
            } else if (cat === 'fuel-savers') {
              setSelectedCategory('fuel-savers');
            } else {
              setSearchQuery(cat);
            }
            const el = document.getElementById('popular-sourcing');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenSourcingModal={handleOpenSourcing}
          onOpenSellModal={handleOpenSell}
          onOpenAgentModal={handleOpenAgent}
        />

        {/* 2. Explore Vehicles by Need */}
        <ExploreByNeed
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat === selectedCategory ? null : cat);
            const el = document.getElementById('popular-sourcing');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Popular Vehicle Sourcing Section */}
        <PopularSourcingSection
          vehicles={filteredVehicles.length > 0 ? filteredVehicles : vehicles}
          onSelectVehicle={(v) => setSelectedVehicle(v)}
          onOpenSourcingModal={handleOpenSourcing}
        />

        {/* 4. Trust & Partners */}
        <TrustSection />

        {/* 5. Recent Sourcing Requests & Matches */}
        <RecentMatchesSection
          matches={matches}
          onRequestSimilar={(item) => {
            handleOpenSourcing(`${item.carName} (Ref ${item.id})`);
          }}
          onExploreAllMatches={() => {
            handleOpenSourcing();
          }}
        />

        {/* 6. Editorial Advice, News & Video Guides */}
        <EditorialAdviceSection
          onSelectArticle={(art) => setSelectedArticle(art)}
          onSelectVideo={(vid) => setSelectedVideo(vid)}
          onOpenSourcingModal={() => handleOpenSourcing()}
        />

        {/* 7. Practical Tools & Resources */}
        <PracticalToolsSection
          onOpenChecklist={() => setChecklistOpen(true)}
          onOpenYardsGuide={() => setYardsOpen(true)}
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenSourcingModal={() => handleOpenSourcing()}
        />

        {/* 8. Directory Section (Vehicle types, 40+ brands, popular models) */}
        <DirectorySection
          selectedBrand={selectedBrand}
          onSelectType={(type) => {
            setSelectedBodyType(type === selectedBodyType ? null : type);
            const el = document.getElementById('popular-sourcing');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectBrand={(brand) => {
            setSelectedBrand(brand === selectedBrand ? null : brand);
            const el = document.getElementById('popular-sourcing');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectModel={(model) => {
            setSearchQuery(model);
            const el = document.getElementById('popular-sourcing');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. FAQ Section */}
        <FaqSection />
      </main>

      {/* Floating Action Button: Professional Navy Concierge */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2.5">
        <button
          onClick={() => setCalculatorOpen(true)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#1B365D] shadow-lg border border-slate-200 hover:scale-105 transition-transform flex items-center justify-center cursor-pointer"
          title="Kwacha Budget Calculator"
        >
          <span className="material-symbols-outlined text-[22px]">calculate</span>
        </button>
        <button
          onClick={() => handleOpenSourcing()}
          className="px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#1B365D] hover:bg-[#10243E] text-white font-bold text-xs shadow-xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer border border-white/10"
          title="Direct Sourcing Concierge"
        >
          <span className="material-symbols-outlined text-[18px]">search</span>
          <span>Find My Car</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onOpenSourcingModal={() => handleOpenSourcing()}
        onOpenSellModal={() => handleOpenSell()}
        onOpenAgentModal={() => handleOpenAgent()}
        onOpenChecklist={() => setChecklistOpen(true)}
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* MODALS */}
      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onRequestSourcing={(carName) => {
            setSelectedVehicle(null);
            handleOpenSourcing(carName);
          }}
        />
      )}

      {selectedArticle && (
        <ArticleReaderModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onOpenSourcingModal={() => {
            setSelectedArticle(null);
            handleOpenSourcing();
          }}
        />
      )}

      {selectedVideo && (
        <VideoPlayerModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onOpenSourcingModal={() => {
            setSelectedVideo(null);
            handleOpenSourcing(selectedVideo.title);
          }}
        />
      )}

      <SourcingRequestModal
        isOpen={sourcingModalOpen}
        onClose={() => setSourcingModalOpen(false)}
        prefillCar={sourcingPrefill}
      />

      <SellVehicleModal
        isOpen={sellModalOpen}
        onClose={() => setSellModalOpen(false)}
        prefillPlate={sellPrefillPlate}
        onVehicleSubmitted={handleNewVehicleSubmitted}
      />

      <AgentPortalModal
        isOpen={agentModalOpen}
        onClose={() => setAgentModalOpen(false)}
        prefillPhone={agentPrefillPhone}
      />

      <KwachaCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onDispatchSourcing={(summary) => {
          setCalculatorOpen(false);
          handleOpenSourcing(summary);
        }}
      />

      <InspectionYardsModal
        isOpen={yardsOpen}
        onClose={() => setYardsOpen(false)}
        onOpenSourcingModal={() => {
          setYardsOpen(false);
          handleOpenSourcing('Physical Inspection Booking');
        }}
      />

      <WhitebookChecklistModal
        isOpen={checklistOpen}
        onClose={() => setChecklistOpen(false)}
        onOpenSourcingModal={() => {
          setChecklistOpen(false);
          handleOpenSourcing('RTSA Inspection Assistance');
        }}
      />
    </div>
  );
}
