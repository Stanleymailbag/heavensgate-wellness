export default function Methodology() {
  return (
    <section className="py-10 max-w-4xl mx-auto px-6 border-b border-slate-100">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full inline-block select-none">
          Root Cause Framework
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
          Why Data + Organic Formulation Works
        </h2>
        <p className="text-base md:text-lg text-slate-500 mt-2">
          Moving from surface assessment to promoting wellness from the root
        </p>
      </div>
      
      <div className="space-y-5">
        {/* Card A */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex items-start space-x-5 transition-all duration-300 hover:shadow-md">
          <div className="font-extrabold text-2xl md:text-3xl text-teal-600/40 select-none pt-0.5">
            A.
          </div>
          <div className="space-y-1.5">
            <h4 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
              Zero Guesswork Evaluation
            </h4>
            <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed">
              Our process cross-references physical markers to inform precise supplementation—removing the guesswork from your wellness process.
            </p>
          </div>
        </div>

        {/* Card B */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex items-start space-x-5 transition-all duration-300 hover:shadow-md">
          <div className="font-extrabold text-2xl md:text-3xl text-teal-600/40 select-none pt-0.5">
            B.
          </div>
          <div className="space-y-1.5">
            <h4 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
              Deep Potency Herbal Blends
            </h4>
            <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed">
              Our botanical blends are crafted with potent, traditionally sourced herbs at optimal concentrations—delivering the full botanical potency nature intended, without dilution, chemicals or synthetic fillers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}