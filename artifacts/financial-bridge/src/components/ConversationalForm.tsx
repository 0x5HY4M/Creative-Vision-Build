import { useState, useEffect } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

type StepType = 'interest' | 'property' | 'income' | 'household' | 'postcode' | 'email' | 'success';

interface FormData {
  interest: string;
  property: string;
  income: string;
  household: string;
  postcode: string;
  email: string;
}

export default function ConversationalForm() {
  const [currentStep, setCurrentStep] = useState<StepType>('interest');
  const [formData, setFormData] = useState<FormData>({
    interest: '',
    property: '',
    income: '',
    household: '',
    postcode: '',
    email: ''
  });
  
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [postcodeValid, setPostcodeValid] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);

  // Update progress bar when step changes
  useEffect(() => {
    const steps: StepType[] = ['interest', 'property', 'income', 'household', 'postcode', 'email', 'success'];
    const index = steps.indexOf(currentStep);
    setProgress((index / (steps.length - 1)) * 100);
  }, [currentStep]);

  const handleInterest = (val: string) => {
    setFormData({ ...formData, interest: val });
    if (val === 'Solar Energy') {
      setCurrentStep('property');
    } else {
      setCurrentStep('income');
    }
  };

  const handleSelection = (field: keyof FormData, val: string, nextStep: StepType) => {
    setFormData({ ...formData, [field]: val });
    setCurrentStep(nextStep);
  };

  const validatePostcode = (val: string) => {
    setFormData({ ...formData, postcode: val });
    // Basic UK Postcode Regex (simplified for demo)
    const regex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
    if (val.length > 4) {
      setPostcodeValid(regex.test(val));
    } else {
      setPostcodeValid(null);
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
    if (emailValid) {
      // Simulate API call
      setTimeout(() => {
        setCurrentStep('success');
      }, 500);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'interest':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">What are you interested in?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Solar Energy', 'Personal Finance', 'Government Grants', 'Investment Planning'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleInterest(opt)}
                  className={`p-6 text-left min-h-[44px] border border-white/10 glass-card glass-card-hover text-white font-bold text-xl transition-all hover:border-accent/50 ${formData.interest === opt ? 'bg-accent/20 border-accent text-accent' : ''}`}
                  data-testid={`form-interest-${opt.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'property':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">What is your property type?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Owned Home', 'Rented', 'Commercial'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('property', opt, 'household')}
                  className={`p-6 text-left min-h-[44px] border border-white/10 glass-card glass-card-hover text-white font-bold text-xl transition-all hover:border-accent/50 ${formData.property === opt ? 'bg-accent/20 border-accent text-accent' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'income':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">What is your annual household income?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Under £30k', '£30k - £50k', '£50k - £80k', 'Over £80k'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('income', opt, 'household')}
                  className={`p-6 text-left min-h-[44px] border border-white/10 glass-card glass-card-hover text-white font-bold text-xl transition-all hover:border-accent/50 ${formData.income === opt ? 'bg-accent/20 border-accent text-accent' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'household':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">How many people are in your household?</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {['1', '2', '3', '4', '5', '6+'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('household', opt, 'postcode')}
                  className={`p-6 text-center min-h-[44px] border border-white/10 glass-card glass-card-hover text-white font-bold text-2xl transition-all hover:border-accent/50 ${formData.household === opt ? 'bg-accent/20 border-accent text-accent' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'postcode':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">What's your postcode?</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={formData.postcode}
                  onChange={(e) => validatePostcode(e.target.value.toUpperCase())}
                  placeholder="e.g. SW1A 1AA"
                  className={`w-full p-6 text-2xl font-bold bg-transparent text-white border glass-card outline-none uppercase transition-colors ${
                    postcodeValid === true ? 'border-accent' : 
                    postcodeValid === false ? 'border-destructive animate-[shake_0.5s_ease-in-out]' : 
                    'border-white/10 focus:border-accent'
                  }`}
                  data-testid="input-postcode"
                />
                {postcodeValid === true && <Check className="absolute right-6 top-1/2 -translate-y-1/2 text-accent w-8 h-8 animate-icon-glow" />}
                {postcodeValid === false && <X className="absolute right-6 top-1/2 -translate-y-1/2 text-destructive w-8 h-8" />}
              </div>
              <button
                onClick={() => postcodeValid && setCurrentStep('email')}
                disabled={!postcodeValid}
                className="p-6 bg-accent text-accent-foreground font-bold text-xl border border-accent hover:bg-transparent hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-h-[44px]"
              >
                Continue <ArrowRight className="ml-2 w-6 h-6" />
              </button>
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-8 font-display leading-tight">Where should we send your results?</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => validateEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full p-6 text-2xl font-bold bg-transparent text-white border glass-card outline-none transition-colors ${
                    emailValid === true ? 'border-accent' : 
                    emailValid === false ? 'border-destructive animate-[shake_0.5s_ease-in-out]' : 
                    'border-white/10 focus:border-accent'
                  }`}
                  data-testid="input-email"
                />
                {emailValid === true && <Check className="absolute right-6 top-1/2 -translate-y-1/2 text-accent w-8 h-8 animate-icon-glow" />}
                {emailValid === false && <X className="absolute right-6 top-1/2 -translate-y-1/2 text-destructive w-8 h-8" />}
              </div>
              <button
                onClick={submitForm}
                disabled={!emailValid}
                className="p-6 bg-accent text-accent-foreground font-bold text-xl border border-accent hover:bg-transparent hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed glow-lime hover:translate-y-1 hover:translate-x-1 hover:shadow-none min-h-[44px]"
                data-testid="button-submit-form"
              >
                See My Results
              </button>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="animate-in fade-in zoom-in duration-500 text-center py-12">
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 glow-lime border border-accent">
              <Check className="w-12 h-12 text-accent animate-icon-glow" />
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-4 font-display leading-tight">Assessment Complete</h3>
            <p className="text-lg md:text-xl text-muted-foreground">
              We'll be in touch at <span className="text-white font-bold">{formData.email}</span> shortly.
            </p>
          </div>
        );
    }
  };

  return (
    <section id="conversational-form" className="py-24 bg-transparent relative z-10" data-testid="conversational-form">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-card border border-white/10 p-8 md:p-12 relative overflow-hidden">
          
          {/* Progress Bar */}
          {currentStep !== 'success' && (
            <div className="absolute top-0 left-0 w-full h-2 glass-card border-b border-white/10">
              <div 
                className="h-full bg-accent transition-all duration-500 ease-out relative glow-lime"
                style={{ width: `${progress}%` }}
              >
                {/* Visual ping on change */}
                <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/50 animate-ping" key={progress}></div>
              </div>
            </div>
          )}
          
          <div className="mt-4">
            {renderStep()}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}} />
    </section>
  );
}
