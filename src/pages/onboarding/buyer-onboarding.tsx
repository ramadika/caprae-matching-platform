import { useState } from "react";
import { TrendingUp, MapPin, CheckCircle, Upload, Award } from "lucide-react";
import { useNavigate } from "react-router";

export default function Index() {
  const [onboardingStep, setOnboardingStep] = useState(1);
  const navigate = useNavigate();

  const totalSteps = 3;

  const nextStep = () => {
    if (onboardingStep < totalSteps) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      navigate("/dashboard/buyer");
      setOnboardingStep(1);
    }
  };

  const prevStep = () => {
    if (onboardingStep > 1) {
      setOnboardingStep(onboardingStep - 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FE] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Header */}
        <div className="bg-gradient-to-r from-[#048A81] to-[#F95738] p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Buyer Onboarding</h1>
            <span className="text-white">
              {onboardingStep} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${(onboardingStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-8">
          <>
            {onboardingStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <TrendingUp className="w-16 h-16 text-[#F95738] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Investment Profile
                  </h2>
                  <p className="text-muted-foreground max-md:text-sm">
                    Tell us about your investment criteria and experience
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company/Fund
                      </label>
                      <input
                        type="text"
                        placeholder="Growth Capital Partners"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Investment Budget
                      </label>
                      <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm">
                        <option>Select Budget Range</option>
                        <option>$500K - $1M</option>
                        <option>$1M - $3M</option>
                        <option>$3M - $5M</option>
                        <option>$5M - $10M</option>
                        <option>$10M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Investment Experience
                      </label>
                      <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm">
                        <option>First-time buyer</option>
                        <option>2-5 acquisitions</option>
                        <option>6-10 acquisitions</option>
                        <option>10+ acquisitions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Target Industries
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Technology",
                        "Healthcare",
                        "Manufacturing",
                        "Retail",
                        "Financial Services",
                        "Real Estate",
                        "Food & Beverage",
                        "Professional Services",
                      ].map((industry) => (
                        <label
                          key={industry}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F95738] focus:ring-[#F95738]"
                          />
                          <span className="text-sm">{industry}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {onboardingStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <MapPin className="w-16 h-16 text-[#F95738] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Deal Preferences
                  </h2>
                  <p className="text-muted-foreground max-md:text-sm">
                    Define your ideal acquisition criteria
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Revenue Range
                      </label>
                      <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm">
                        <option>Any Revenue Size</option>
                        <option>Under $500K</option>
                        <option>$500K - $1M</option>
                        <option>$1M - $5M</option>
                        <option>$5M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Geographic Focus
                      </label>
                      <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm">
                        <option>No Preference</option>
                        <option>West Coast</option>
                        <option>East Coast</option>
                        <option>Midwest</option>
                        <option>South</option>
                        <option>International</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deal Type Preference
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="dealType"
                          className="text-[#F95738] focus:ring-[#F95738] max-md:text-sm"
                        />
                        <span className="text-sm">
                          Majority Acquisition (51%+)
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="dealType"
                          className="text-[#F95738] focus:ring-[#F95738] max-md:text-sm"
                        />
                        <span className="text-sm">Full Acquisition (100%)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="dealType"
                          className="text-[#F95738] focus:ring-[#F95738] max-md:text-sm"
                        />
                        <span className="text-sm">Minority Investment</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Investment Timeline
                    </label>
                    <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm">
                      <option>Immediately</option>
                      <option>Within 3 months</option>
                      <option>Within 6 months</option>
                      <option>Within 12 months</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {onboardingStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <CheckCircle className="w-16 h-16 text-[#F95738] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Verification & Credentials
                  </h2>
                  <p className="text-muted-foreground max-md:text-sm">
                    Complete your investor profile to access premium listings
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Investment Thesis
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your investment approach, what you look for in businesses, and how you add value..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Financial Verification
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F95738] transition-colors">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground max-md:text-sm">
                        Upload proof of funds or bank statement
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Required to access seller information
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Website/Portfolio
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourcompany.com"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F95738] max-md:text-sm"
                      />
                    </div>
                  </div>

                  <div className="bg-[#F4D35E] p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-[#F95738] mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-[#F95738]">
                          Verification Process
                        </p>
                        <p className="text-xs text-[#F95738] mt-1">
                          We'll verify your identity, financial capacity, and
                          investment experience within 24-48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 max-md:text-xs">
            <button
              onClick={prevStep}
              className="px-6 py-2 text-muted-foreground border border-muted-foreground rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {onboardingStep === 1 ? "Back to Home" : "Previous"}
            </button>

            <button
              onClick={nextStep}
              className="px-6 py-2 text-white rounded-lg font-medium transition-colors border border-[#F95738] bg-[#F95738] hover:bg-white hover:border hover:border-[#F95738] hover:text-[#F95738] cursor-pointer"
            >
              {onboardingStep === totalSteps ? "Complete Setup" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
