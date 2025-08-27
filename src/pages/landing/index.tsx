import {
  Building2,
  TrendingUp,
  Shield,
  Award,
  ArrowRight,
  Zap,
} from "lucide-react";
import { NavLink } from "react-router";

export default function Index() {
  return (
    <div className="h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <div className="w-full flex flex-col justify-center items-center h-screen px-6 py-20 text-center font-inter">
        <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 font-semibold animate-slide-in">
          Where Great Businesses
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
            &nbsp;Find Perfect Matches
          </span>
        </h1>
        <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
          The modern platform that puts sellers in control. Connect with
          verified buyers, streamline due diligence, and close deals faster with
          AI-powered tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <NavLink
            to="/seller-onboarding"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Building2 className="w-5 h-5" />
            <span>I'm Selling My Business</span>
            <ArrowRight className="w-5 h-5" />
          </NavLink>
          <NavLink
            to="/buyer-onboarding"
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 rounded-xl font-semibold text-lg hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <TrendingUp className="w-5 h-5" />
            <span>I'm Looking to Buy</span>
            <ArrowRight className="w-5 h-5" />
          </NavLink>
        </div>

        <div className="flex items-center justify-center space-x-8 text-gray-500 mb-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Bank-grade Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Verified Members</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>AI-Powered Matching</span>
          </div>
        </div>
      </div>
    </div>
  );
}
