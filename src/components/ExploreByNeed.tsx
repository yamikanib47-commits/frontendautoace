import React from 'react';

interface ExploreByNeedProps {
  onSelectCategory: (categoryKey: string) => void;
  selectedCategory: string | null;
}

export const ExploreByNeed: React.FC<ExploreByNeedProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const categories = [
    {
      id: 'lusaka-verified',
      title: 'Verified in Lusaka',
      tag: 'Local Inventory',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmUeqejRehisJg8pby3srl0exUebHZzX0UVABBrCLjEoU4vKqMQt0fntDI_4r6Z8F8EnhEAcalFHFYOnzFHKIF-_7pKBH-Rd3w3ML2AfGMOH9EmSYIYbU4KJZ0E-ltfHdUq-uyCxd3zpPIwVKcA5vdyfHroHjnsAuVjOxnJjSNVCoPd5rep0JGc-kzWh9dJQAVIV14m-uZd50N1TDUC3k7LMOXF7WDA5gUMCP7UYjaa7gBWFSmeI3wNA',
      alt: 'White SUV in dealership setting'
    },
    {
      id: 'fuel-savers',
      title: 'Fuel Savers',
      tag: '1.3L - 1.5L / Hybrids',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeVrkC-kkJJ2EPOG-6_zz8su9KosgQpES2wkPnyw2cuFUhPw7RlRyzM5vp_ko1xyDOi3l2XJuSF4l_IxO8gbllxZZ7QwjhS5ZK0MmWPxMaHBXooSsP1GrZujIQQ6zh-Dk6Pq9_1pgkwCrPnweL0rmEwDa54pykcNkDg_5Cpfc6PAlVHpaS33bDlkPLaYOl-VG-9EVSuJZB9tLjlwPZx-XBnL7tP-s9p3g4lSWKzxz72haLlGtBfgCstQ',
      alt: 'Metallic blue executive hatchback'
    },
    {
      id: 'under-250k',
      title: 'Under K250k',
      tag: 'Starter & Commuters',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ruvyl5zUJPBLFnogHeGCB1776nifZOjIooawELFkFVdq143PK3hk-_W3t2yzln-IZ-RPQRQfFyGoGshvIcKD8CRvpGvMR_3iK1_Tr8st0ELpCGdmBXpaKxqWJYi8Guvt2o8La3v8ynGv3HvfcC_V0bYiNpq5h18XM9Jpf_CWh7PhnFokVei0SY7SdpKNwJJ89K0XgxujKNeZCRxbCVX1TaQ2FFo9h6QEh86RjF92zupee4aI5Uzqfw',
      alt: 'Bronze compact city car'
    },
    {
      id: 'under-500k',
      title: 'Under K500k',
      tag: 'Family Crossovers',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUoCxShm0PwdMEw3HQvCIZLSlYgH1OwTvdXBpMJTH1rlhOoJZgPOd22iRt0o1em3Y8LM37zCK1xTrvvZ3rzT3rzbbHEh0nQ8cGqYqx2eIvG1Qc28WseWU1kKYmKBndKDn5Np8Stb4bEyBR3Blyh-2izzpxWPCUrdFVcIbUw3lKuGuqEqf1zn0F9VIZbONpv0oIlbBm0EPcDUr-rCXx7oOYYB8Eb2B78d7SMWj4Nk_Mb5UVMtEMBfyq1w',
      alt: 'Family crossover sport SUV'
    },
    {
      id: 'under-1m',
      title: 'Under K1M',
      tag: '4x4 Twin Cabs & SUVs',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWwsvjWkv6fofvclHcJgWl6y6bCv3Upeyd0wE0BhmkF75-SSLfkA-x2drNenZ2P6DT_CAmiuVMZBaSOiIUdkiNBRofocAatzzF6-jwmd2PbGRDq4x756ouPQGSM0cKlnOiMcIqP53piF8n8pGxAZo0IW4_HajmDEifMGrnsOZaSXElKS8wb-HMATMU2q4dBaKUXNt9Cr9SIAyBiCiLvm3HrgArcIooPx-m0cJ_RbsSXvYF6yXhsNk1OA',
      alt: 'Sleek luxury SUV'
    },
    {
      id: 'executive',
      title: 'Open Budget',
      tag: 'Executive & Fleets',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARsNNnXE36BUfZe4ywF0MaxbJe80jpT3lcyzCzTpMatoRO8CeBCfCG_eGNIHQlmww58nice2nplHK9ARubPW-CeC8UuOo5NOzXRsHnx-ie2Wty36EMkjuNJoIAUioRKVmh7cbH2O8yUsJKjc12pLVGjmSW85Uuw8AG1rehU6tc5gTR1b2VJ8zlgNlSXNGMzcpJepkrjLz4o0_KXx_zy4EzWy2sCdUWfpUuR3D0SI7ekIPcK1mdEyqqww',
      alt: 'Executive performance vehicle'
    }
  ];

  return (
    <section id="browse-need" className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 gap-2 pb-3 border-b border-slate-200/80">
        <div>
          <div className="text-[11px] font-bold text-[#1B365D] uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            LIFESTYLE &amp; BUDGET DISCOVERY
          </div>
          <h2 className="font-headline-lg text-slate-900 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
            Explore Vehicles by Need &amp; Kwacha Budget
          </h2>
          <p className="font-body-md text-xs sm:text-sm text-slate-500 mt-0.5">
            Filter vehicles matched to your specific driving conditions, fuel budget, and local terrain
          </p>
        </div>
        <button
          onClick={() => onSelectCategory('all')}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#1B365D] hover:text-[#10243E] cursor-pointer self-start sm:self-auto group active:scale-[0.98]"
        >
          <span>View all inventory</span>
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`group bg-white rounded-2xl p-3.5 flex flex-col items-center justify-between hover:shadow-md transition-all hover:-translate-y-0.5 text-left cursor-pointer border active:scale-[0.98] ${
                isSelected
                  ? 'border-[#1B365D] ring-2 ring-[#1B365D]/20 bg-[#F0F4F8]/60 shadow-sm'
                  : 'border-slate-200/90 shadow-2xs'
              }`}
            >
              <div className="w-full h-20 sm:h-24 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-2.5 border border-slate-100">
                <img
                  className="h-16 sm:h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                  alt={cat.alt}
                  src={cat.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full text-center">
                <span
                  className={`font-title-md transition-colors block text-xs sm:text-sm leading-snug font-bold ${
                    isSelected ? 'text-[#1B365D]' : 'text-slate-900 group-hover:text-[#1B365D]'
                  }`}
                >
                  {cat.title}
                </span>
                <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                  {cat.tag}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
