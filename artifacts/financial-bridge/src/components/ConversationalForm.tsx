import { useState, useEffect, useRef } from 'react';
import { Check, X, ArrowRight, ChevronLeft } from 'lucide-react';

type StepType = 'interest' | 'debt_slider' | 'property' | 'income' | 'household' | 'contact' | 'success';

interface FormData {
  interest: string;
  debtAmount: number;
  property: string;
  income: string;
  household: string;
  zip: string;
  email: string;
}

const STEPS_ORDER: Record<string, number> = {
  interest: 1,
  debt_slider: 2,
  property: 2,
  income: 2,
  household: 3,
  contact: 4,
  success: 5,
};
const TOTAL_STEPS = 4;

const formatDebt = (val: number) => `$${val.toLocaleString()}`;

export default function ConversationalForm() {
  const [currentStep, setCurrentStep] = useState<StepType>('interest');
  const [formData, setFormData] = useState<FormData>({
    interest: '',
    debtAmount: 15000,
    property: '',
    income: '',
    household: '',
    zip: '',
    email: ''
  });

  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [zipValid, setZipValid] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);
  const [stepComplete, setStepComplete] = useState(false);
  const prevStep = useRef<StepType>('interest');

  useEffect(() => {
    const stepNum = STEPS_ORDER[currentStep] ?? 0;
    const newProgress = ((stepNum - 1) / TOTAL_STEPS) * 100;
    setProgress(newProgress);

    if (prevStep.current !== currentStep) {
      setStepComplete(true);
      const t = setTimeout(() => setStepComplete(false), 800);
      prevStep.current = currentStep;
      return () => clearTimeout(t);
    }
  }, [currentStep]);

  const handleInterest = (val: string) => {
    setFormData({ ...formData, interest: val });
    if (val === 'Debt Relief') {
      setCurrentStep('debt_slider');
    } else if (val === 'Government Grants' || val === 'Solar Energy') {
      setCurrentStep('property');
    } else {
      setCurrentStep('income');
    }
  };

  const handleSelection = (field: keyof FormData, val: string, nextStep: StepType) => {
    setFormData({ ...formData, [field]: val });
    setCurrentStep(nextStep);
  };

  const validateZip = (val: string) => {
    setFormData({ ...formData, zip: val });
    const regex = /^\d{5}(-\d{4})?$/;
    if (val.length >= 5) {
      setZipValid(regex.test(val));
    } else {
      setZipValid(null);
    }
  };

  const validateEmail = (val: string) => {
    setFormData({ ...formData, email: val });
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val.length > 5) {
      setEmailValid(regex.test(val));
    } else {
      setEmailValid(null);
    }
  };

  const submitForm = () => {
    if (emailValid && zipValid) {
      setTimeout(() => setCurrentStep('success'), 500);
    }
  };

  const stepLabel = () => {
    const num = STEPS_ORDER[currentStep];
    if (!num || currentStep === 'success') return null;
    return `Step ${num} of ${TOTAL_STEPS}`;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'interest':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-400">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">What brings you here?</p>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">
              What are you most interested in?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Solar Energy', 'Debt Relief', 'Government Grants', 'Investment Planning'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleInterest(opt)}
                  className={`p-6 text-left min-h-[64px] border glass-card glass-card-hover font-bold text-lg transition-all duration-200 hover:border-accent/50 ${formData.interest === opt ? 'bg-accent/20 border-accent text-accent' : 'border-white/10 text-white'}`}
                  data-testid={`form-interest-${opt.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'debt_slider':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-400">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Step 2 — Debt Assessment</p>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">
              How much debt are you carrying?
            </h3>
            <div className="glass-card border border-white/10 p-8">
              <div className="text-center mb-8">
                <span className="text-4xl md:text-6xl font-black text-accent glow-lime-text">
                  {formatDebt(formData.debtAmount)}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={200000}
                step={1000}
                value={formData.debtAmount}
                onChange={e => setFormData({ ...formData, debtAmount: Number(e.target.value) })}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(var(--accent)) 0%, hsl(var(--accent)) ${((formData.debtAmount - 1000) / (200000 - 1000)) * 100}%, rgba(255,255,255,0.1) ${((formData.debtAmount - 1000) / (200000 - 1000)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                  accentColor: 'hsl(var(--accent))',
                }}
                data-testid="input-debt-slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$1,000</span>
                <span>$200,000+</span>
              </div>
            </div>
            <button
              onClick={() => setCurrentStep('income')}
              className="mt-6 w-full p-5 bg-accent text-accent-foreground font-bold text-lg border border-accent hover:bg-transparent hover:text-accent transition-colors flex items-center justify-center gap-2 min-h-[56px]"
            >
              Continue <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        );

      case 'property':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-400">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Step 2 — Property Info</p>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">
              What type of property do you have?
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {['Own My Home', 'Renting', 'Commercial Property', 'No Property'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('property', opt, 'household')}
                  className={`p-6 text-left min-h-[64px] border glass-card glass-card-hover font-bold text-lg transition-all duration-200 hover:border-accent/50 ${formData.property === opt ? 'bg-accent/20 border-accent text-accent' : 'border-white/10 text-white'}`}
                  data-testid={`form-property-${opt.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'income':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-400">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Step 2 — Financial Profile</p>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">
              What is your annual household income?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Under $30k', '$30k – $50k', '$50k – $80k', 'Over $80k'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('income', opt, 'household')}
                  className={`p-6 text-left min-h-[64px] border glass-card glass-card-hover font-bold text-lg transition-all duration-200 hover:border-accent/50 ${formData.income === opt ? 'bg-accent/20 border-accent text-accent' : 'border-white/10 text-white'}`}
                  data-testid={`form-income-${opt.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'household':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-400">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Step 3 — Household Size</p>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">
              How many people are in your household?
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {['1', '2', '3', '4', '5', '6+'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('household', opt, 'contact')}
                  className={`p-6 text-center min-h-[64px] border glass-card glass-card-hover font-black text-2xl transition-all duration-200 hover:border-accent/50 ${formData.household === opt ? 'bg-accent/20 border-accent text-accent' : 'border-white/10 text-white'}`}
                  data-testid={`form-household-${opt}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-400">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Step 4 — Your Results</p>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">
              Where should we send your personalized plan?
            </h3>
            <div className="flex flex-col gap-5">
              <div>
                <label className="text-sm text-muted-foreground uppercase tracking-wider font-bold block mb-2">ZIP Code</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.zip}
                    onChange={(e) => validateZip(e.target.value)}
                    placeholder="e.g. 90210"
                    maxLength={10}
                    className={`w-full p-5 text-xl font-bold bg-transparent text-white border glass-card outline-none transition-colors ${
                      zipValid === true ? 'border-accent' :
                      zipValid === false ? 'border-destructive' :
                      'border-white/10 focus:border-accent/50'
                    }`}
                    data-testid="input-zip"
                  />
                  {zipValid === true && <Check className="absolute right-5 top-1/2 -translate-y-1/2 text-accent w-6 h-6" />}
                  {zipValid === false && <X className="absolute right-5 top-1/2 -translate-y-1/2 text-destructive w-6 h-6" />}
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground uppercase tracking-wider font-bold block mb-2">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => validateEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full p-5 text-xl font-bold bg-transparent text-white border glass-card outline-none transition-colors ${
                      emailValid === true ? 'border-accent' :
                      emailValid === false ? 'border-destructive' :
                      'border-white/10 focus:border-accent/50'
                    }`}
                    data-testid="input-email"
                  />
                  {emailValid === true && <Check className="absolute right-5 top-1/2 -translate-y-1/2 text-accent w-6 h-6 animate-icon-glow" />}
                  {emailValid === false && <X className="absolute right-5 top-1/2 -translate-y-1/2 text-destructive w-6 h-6" />}
                </div>
              </div>
              <button
                onClick={submitForm}
                disabled={!emailValid || !zipValid}
                className="w-full p-5 bg-accent text-accent-foreground font-black text-xl border border-accent hover:bg-transparent hover:text-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed glow-lime hover:shadow-none min-h-[56px] flex items-center justify-center gap-2"
                data-testid="button-submit-form"
              >
                See My Results <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you consent to be contacted by our partners. See our{' '}
                <a href="/privacy" className="text-accent underline">Privacy Policy</a> and{' '}
                <a href="/tcpa" className="text-accent underline">TCPA Disclosure</a>.
              </p>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="animate-in fade-in zoom-in duration-500 text-center py-12">
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 glow-lime border border-accent">
              <Check className="w-12 h-12 text-accent animate-icon-glow" />
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-4 font-display leading-tight">
              Assessment Complete
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Your personalized wealth plan is on its way to
            </p>
            <p className="text-white font-bold text-xl">{formData.email}</p>
            <p className="text-sm text-muted-foreground mt-6">
              Based on your profile, you may qualify for programs in the{' '}
              <span className="text-accent font-bold">{formData.interest}</span> category.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="conversational-form" className="py-24 bg-transparent relative z-10" data-testid="conversational-form">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-2">Free Assessment</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display leading-tight uppercase">
            Discover Your <span className="text-gold">Wealth Potential</span>
          </h2>
        </div>

        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-16 shadow-[0_0_80px_rgba(190,242,100,0.06)] relative overflow-hidden will-change-transform translate-z-0">
          {/* Progress Bar */}
          {currentStep !== 'success' && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5">
              <div
                className={`h-full bg-accent transition-all duration-700 ease-out relative ${stepComplete ? 'animate-pulse-glow' : 'glow-lime'}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Step Label */}
          {currentStep !== 'success' && (
            <div className="flex items-center justify-between mb-6 mt-2">
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                {stepLabel()}
              </span>
              {currentStep !== 'interest' && (
                <button
                  onClick={() => {
                    const back: Record<StepType, StepType> = {
                      debt_slider: 'interest',
                      property: 'interest',
                      income: 'interest',
                      household: formData.interest === 'Debt Relief' ? 'debt_slider' :
                                 (formData.interest === 'Government Grants' || formData.interest === 'Solar Energy') ? 'property' : 'income',
                      contact: 'household',
                      success: 'contact',
                      interest: 'interest',
                    };
                    setCurrentStep(back[currentStep]);
                  }}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-bold min-h-[44px] px-2"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              )}
            </div>
          )}

          <div className="mt-2">
            {renderStep()}
          </div>
        </div>

        {currentStep !== 'success' && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center p-3 bg-white/[0.02] border border-white/10 rounded-lg">
                <span className="text-accent text-xs font-bold">SSL</span>
                <span className="text-[10px] text-muted-foreground uppercase">Secured</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white/[0.02] border border-white/10 rounded-lg">
                <span className="text-accent text-xs font-bold">CCPA</span>
                <span className="text-[10px] text-muted-foreground uppercase">Ready</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white/[0.02] border border-white/10 rounded-lg">
                <span className="text-accent text-xs font-bold">TCPA</span>
                <span className="text-[10px] text-muted-foreground uppercase">Compliant</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white/[0.02] border border-white/10 rounded-lg">
                <span className="text-accent text-xs font-bold">USA</span>
                <span className="text-[10px] text-muted-foreground uppercase">Verified</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: hsl(var(--accent));
          cursor: pointer;
          box-shadow: 0 0 10px rgba(190, 242, 100, 0.5);
        }
        input[type=range]::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: hsl(var(--accent));
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(190, 242, 100, 0.5);
        }
      ` }} />
    </section>
  );
}
