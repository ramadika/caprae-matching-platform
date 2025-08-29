import { NavLink } from "react-router";
import {
  Building,
  Building2,
  TrendingUp,
  Shield,
  Award,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function Index() {
  return (
    <div className="h-screen bg-[#F5F8FE]">
      <div className="w-full flex flex-col justify-center items-center h-screen px-6 py-20 text-center font-inter">
        <div className="flex justify-center mb-8 max-md:mt-8">
          <div className="w-16 h-16 bg-[#048A81] rounded-2xl flex items-center justify-center shadow-elevated">
            <Building className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-5xl max-md:text-2xl text-foreground mb-6 font-bold animate-slide-in font-raleway">
          Where Great Businesses
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#048A81] to-[#F95738]">
            &nbsp;Find Perfect Matches
          </span>
        </h1>
        <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto max-md:text-sm">
          The modern platform that puts sellers in control. Connect with
          verified buyers, streamline due diligence, and close deals faster with
          AI-powered tools.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16 max-md:flex-col max-md:mb-12">
          <NavLink
            to="/onboarding/seller"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#048A81] to-[#048A81] text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 max-md:text-sm"
          >
            <Building2 className="w-5 h-5" />
            <span>I'm Selling My Business</span>
            <ArrowRight className="w-5 h-5" />
          </NavLink>
          <NavLink
            to="/onboarding/buyer"
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#F95738] text-[#F95738] rounded-xl font-semibold text-lg hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 max-md:text-sm"
          >
            <TrendingUp className="w-5 h-5" />
            <span>I'm Looking to Buy</span>
            <ArrowRight className="w-5 h-5" />
          </NavLink>
        </div>

        <div className="flex items-center justify-center space-x-8 text-muted-foreground mb-16 max-md:flex-col max-md:gap-10 max-md:text-sm max-md:space-x-0">
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
