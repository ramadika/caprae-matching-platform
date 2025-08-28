import { useState } from "react";
import {
  Building2,
  DollarSign,
  Users,
  CheckCircle,
  Upload,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router";

export default function Index() {
  const [onboardingStep, setOnboardingStep] = useState(1);
  const navigate = useNavigate();

  const totalSteps = 4;

  const nextStep = () => {
    if (onboardingStep < totalSteps) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      navigate("/dashboard/seller");
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
    <div className="min-h-screen bg-[#F5F8FE] flex items-center justify-center p-6 font-lato">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Header */}
        <div className="bg-gradient-to-r from-[#048A81] to-[#F95738] p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Seller Onboarding</h1>
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
                  <Building2 className="w-16 h-16 text-[#048A81] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Tell us about your business
                  </h2>
                  <p className="text-muted-foreground">
                    Help us understand what makes your business unique
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Software Solutions"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Industry
                      </label>
                      <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-emerald-500">
                        <option>Select Industry</option>
                        <option>Technology/Software</option>
                        <option>Healthcare</option>
                        <option>Manufacturing</option>
                        <option>Retail/E-commerce</option>
                        <option>Financial Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Revenue Range
                      </label>
                      <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-emerald-500">
                        <option>Select Range</option>
                        <option>Under $500K</option>
                        <option>$500K - $1M</option>
                        <option>$1M - $5M</option>
                        <option>$5M - $10M</option>
                        <option>$10M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="San Francisco, CA"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {onboardingStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <DollarSign className="w-16 h-16 text-[#048A81] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Financial Overview
                  </h2>
                  <p className="text-muted-foreground">
                    Provide key financial metrics to attract serious buyers
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Annual Revenue (2023)
                    </label>
                    <input
                      type="text"
                      placeholder="$2,500,000"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      EBITDA
                    </label>
                    <input
                      type="text"
                      placeholder="$750,000"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Growth Rate (YoY)
                    </label>
                    <input
                      type="text"
                      placeholder="25%"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Employee Count
                    </label>
                    <input
                      type="text"
                      placeholder="35"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Expected Valuation Range
                  </label>
                  <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-emerald-500">
                    <option>Select Range</option>
                    <option>$1M - $3M</option>
                    <option>$3M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M+</option>
                  </select>
                </div>
              </div>
            )}

            {onboardingStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Users className="w-16 h-16 text-[#048A81] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Deal Preferences
                  </h2>
                  <p className="text-muted-foreground">
                    Help us find the right buyers for your business
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Buyer Type
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#048A81] focus:ring-emerald-500"
                        />
                        <span className="text-sm">
                          Strategic Buyer (Competitor/Industry Player)
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#048A81] focus:ring-emerald-500"
                        />
                        <span className="text-sm">
                          Financial Buyer (Private Equity/Investment Firm)
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#048A81] focus:ring-emerald-500"
                        />
                        <span className="text-sm">
                          Individual Investor/Entrepreneur
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Timeline to Sell
                    </label>
                    <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-emerald-500">
                      <option>Select Timeline</option>
                      <option>Within 3 months</option>
                      <option>3-6 months</option>
                      <option>6-12 months</option>
                      <option>12+ months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deal Structure Preference
                    </label>
                    <select className="w-full p-3 border border-gray-300 text-muted-foreground rounded-lg focus:ring-2 focus:ring-emerald-500">
                      <option>Asset Sale</option>
                      <option>Stock Sale</option>
                      <option>Merger</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {onboardingStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <CheckCircle className="w-16 h-16 text-[#048A81] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Verification & Profile
                  </h2>
                  <p className="text-muted-foreground">
                    Complete your profile to start receiving buyer interest
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what makes your business unique, key competitive advantages, and growth opportunities..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Upload Business Documents
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Drag & drop files or click to browse
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Financial statements, business plan, etc.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F5F8FE] p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-[#0D3B66] mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-[#0D3B66]">
                          Identity Verification Required
                        </p>
                        <p className="text-xs text-[#0D3B66] mt-1">
                          We'll verify your identity and business ownership to
                          maintain trust on our platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8">
            <button
              onClick={prevStep}
              className="px-6 py-2 text-muted-foreground border border-muted-foreground rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {onboardingStep === 1 ? "Back to Home" : "Previous"}
            </button>

            <button
              onClick={nextStep}
              className="px-6 py-2 text-white rounded-lg font-medium transition-colors bg-[#048A81] hover:bg-white hover:border hover:border-[#048A81] hover:text-[#048A81] cursor-pointer"
            >
              {onboardingStep === totalSteps ? "Complete Setup" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
