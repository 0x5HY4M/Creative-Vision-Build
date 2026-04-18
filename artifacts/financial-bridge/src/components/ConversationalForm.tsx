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
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 font-display">What are you interested in?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Solar Energy', 'Personal Finance', 'Government Grants', 'Investment Planning'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleInterest(opt)}
                  className="p-6 text-left border-4 border-border hover:border-primary bg-card text-card-foreground font-bold text-xl transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]"
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
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 font-display">What is your property type?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Owned Home', 'Rented', 'Commercial'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('property', opt, 'household')}
                  className="p-6 text-left border-4 border-border hover:border-primary bg-card text-card-foreground font-bold text-xl transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]"
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
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 font-display">What is your annual household income?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Under £30k', '£30k - £50k', '£50k - £80k', 'Over £80k'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('income', opt, 'household')}
                  className="p-6 text-left border-4 border-border hover:border-primary bg-card text-card-foreground font-bold text-xl transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]"
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
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 font-display">How many people are in your household?</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {['1', '2', '3', '4', '5', '6+'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelection('household', opt, 'postcode')}
                  className="p-6 text-center border-4 border-border hover:border-primary bg-card text-card-foreground font-bold text-2xl transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]"
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
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 font-display">What's your postcode?</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={formData.postcode}
                  onChange={(e) => validatePostcode(e.target.value.toUpperCase())}
                  placeholder="e.g. SW1A 1AA"
                  className={`w-full p-6 text-2xl font-bold bg-card text-card-foreground border-4 outline-none uppercase transition-colors ${
                    postcodeValid === true ? 'border-primary' : 
                    postcodeValid === false ? 'border-destructive animate-[shake_0.5s_ease-in-out]' : 
                    'border-border focus:border-primary'
                  }`}
                  data-testid="input-postcode"
                />
                {postcodeValid === true && <Check className="absolute right-6 top-1/2 -translate-y-1/2 text-primary w-8 h-8" />}
                {postcodeValid === false && <X className="absolute right-6 top-1/2 -translate-y-1/2 text-destructive w-8 h-8" />}
              </div>
              <button
                onClick={() => postcodeValid && setCurrentStep('email')}
                disabled={!postcodeValid}
                className="p-6 bg-primary text-primary-foreground font-bold text-xl border-4 border-primary hover:bg-transparent hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                Continue <ArrowRight className="ml-2 w-6 h-6" />
              </button>
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 font-display">Where should we send your results?</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => validateEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full p-6 text-2xl font-bold bg-card text-card-foreground border-4 outline-none transition-colors ${
                    emailValid === true ? 'border-primary' : 
                    emailValid === false ? 'border-destructive animate-[shake_0.5s_ease-in-out]' : 
                    'border-border focus:border-primary'
                  }`}
                  data-testid="input-email"
                />
                {emailValid === true && <Check className="absolute right-6 top-1/2 -translate-y-1/2 text-primary w-8 h-8" />}
                {emailValid === false && <X className="absolute right-6 top-1/2 -translate-y-1/2 text-destructive w-8 h-8" />}
              </div>
              <button
                onClick={submitForm}
                disabled={!emailValid}
                className="p-6 bg-primary text-primary-foreground font-bold text-xl border-4 border-primary hover:bg-transparent hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[6px_6px_0px_0px_hsl(var(--accent))] hover:translate-y-1 hover:translate-x-1 hover:shadow-none"
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
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(200,241,53,0.5)]">
              <Check className="w-12 h-12 text-primary-foreground" />
            </div>
            <h3 className="text-4xl font-black text-white mb-4 font-display">Assessment Complete</h3>
            <p className="text-xl text-muted-foreground">
              We'll be in touch at <span className="text-white font-bold">{formData.email}</span> shortly.
            </p>
          </div>
        );
    }
  };

  return (
    <section id="conversational-form" className="py-24 bg-secondary relative z-10" data-testid="conversational-form">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-background border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 relative overflow-hidden">
          
          {/* Progress Bar */}
          {currentStep !== 'success' && (
            <div className="absolute top-0 left-0 w-full h-2 bg-muted">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out relative"
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
