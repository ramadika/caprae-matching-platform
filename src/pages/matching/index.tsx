import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BuyerProfileCard } from "@/components/card-profile";
import { BuyerProfileDetailed } from "@/components/detail-profile";
import { RefreshCw, Heart, X, Sparkles } from "lucide-react";

// Mock buyer profiles data
const mockBuyerProfiles = [
  {
    id: "1",
    name: "Michael Chen",
    company: "Growth Ventures LLC",
    avatar: "",
    location: "San Francisco, CA",
    budget: { min: 2000000, max: 5000000 },
    industries: ["Technology", "SaaS", "E-commerce"],
    experience: "4+ acquisitions",
    timeline: "3-6 months",
    verified: true,
    rating: 4.8,
    totalDeals: 12,
    bio: "Experienced tech entrepreneur and investor focusing on profitable SaaS businesses with strong recurring revenue. Looking for businesses with proven product-market fit and growth potential.",
    lookingFor: ["Recurring Revenue", "Growth Potential", "Strong Team"],
  },
  {
    id: "2",
    name: "Sarah Johnson",
    company: "Strategic Acquisitions Inc",
    avatar: "",
    location: "Austin, TX",
    budget: { min: 1000000, max: 3000000 },
    industries: ["Healthcare", "Professional Services", "Technology"],
    experience: "1-3 acquisitions",
    timeline: "6-12 months",
    verified: true,
    rating: 4.6,
    totalDeals: 5,
    bio: "Former healthcare executive transitioning to business ownership. Particularly interested in service-based businesses with established customer relationships and steady cash flow.",
    lookingFor: [
      "Stable Cash Flow",
      "Established Customer Base",
      "Service Business",
    ],
  },
  {
    id: "3",
    name: "David Rodriguez",
    company: "Rodriguez Family Office",
    avatar: "",
    location: "Miami, FL",
    budget: { min: 3000000, max: 8000000 },
    industries: ["Manufacturing", "Real Estate", "Retail"],
    experience: "Professional investor",
    timeline: "I'm flexible",
    verified: true,
    rating: 4.9,
    totalDeals: 28,
    bio: "Third-generation family business investor with extensive experience in traditional industries. Focused on businesses with strong fundamentals and opportunities for operational improvements.",
    lookingFor: [
      "Traditional Business",
      "Operational Efficiency",
      "Family Values",
    ],
  },
  {
    id: "4",
    name: "Emily Watson",
    company: "Watson Capital Partners",
    avatar: "",
    location: "Chicago, IL",
    budget: { min: 1500000, max: 4000000 },
    industries: ["E-commerce", "Retail", "Consumer Goods"],
    experience: "First-time buyer",
    timeline: "Within 3 months",
    verified: true,
    rating: 4.7,
    totalDeals: 0,
    bio: "E-commerce executive with 15 years of experience building online brands. Ready to acquire my first business and leverage my digital marketing expertise to drive growth.",
    lookingFor: [
      "Digital Business",
      "Growth Opportunity",
      "Marketing Potential",
    ],
  },
];

export default function MatchingInterface() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matches, setMatches] = useState<string[]>([]);
  const [passed, setPassed] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [profiles] = useState(mockBuyerProfiles);
  const [selectedProfile, setSelectedProfile] = useState<
    (typeof mockBuyerProfiles)[0] | null
  >(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const navigate = useNavigate();

  const currentProfile = profiles[currentProfileIndex];

  const handleLike = (profileId: string) => {
    setMatches((prev) => [...prev, profileId]);
    moveToNext();
    console.log("matches", matches);
  };

  const handlePass = (profileId: string) => {
    setPassed((prev) => [...prev, profileId]);
    moveToNext();
  };

  const moveToNext = () => {
    console.log("passed", passed);
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex((prev) => prev + 1);
    } else {
      // Load more profiles or show completion
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        // Reset for demo purposes
        setCurrentProfileIndex(0);
        setMatches([]);
        setPassed([]);
      }, 2000);
    }
  };

  const handleViewProfile = (profileId: string) => {
    const profile = profiles.find((p) => p.id === profileId);
    if (profile) {
      setSelectedProfile(profile);
      setIsProfileModalOpen(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F8FE]">
        <Navigation userRole="seller" userInfo={{ name: "Jane Doe" }} />
        <div className="flex items-center justify-center min-h-[80vh]">
          <Card className="p-8 text-center shadow-elevated">
            <CardContent>
              <RefreshCw className="h-12 w-12 text-[#0D3B66] mx-auto mb-4 animate-spin" />
              <h3 className="text-xl font-semibold mb-2">
                Finding More Buyers...
              </h3>
              <p className="text-muted-foreground">
                We're searching for qualified buyers that match your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!currentProfile) {
    return (
      <div className="min-h-screen bg-[#F5F8FE]">
        <Navigation userRole="seller" userInfo={{ name: "Jane Doe" }} />
        <div className="flex items-center justify-center min-h-[80vh]">
          <Card className="p-8 text-center shadow-elevated">
            <CardContent>
              <Sparkles className="h-12 w-12 text-[#0D3B66] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">All Caught Up!</h3>
              <p className="text-muted-foreground mb-4">
                You've reviewed all available buyer profiles. We'll notify you
                when new buyers join.
              </p>
              <Button
                variant="default"
                onClick={() => setCurrentProfileIndex(0)}
              >
                Review Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F8FE]">
      {/* <Navigation userRole="seller" userInfo={{ name: "Jane Doe" }} /> */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#048A81] to-[#F95738] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>
        <Button
          className="bg-transparent text-[#0D3B66] border border-[#0D3B66] mb-4 cursor-pointer hover:text-white hover:bg-[#0D3B66]"
          onClick={() => navigate(-1)}
        >
          &#8592;&nbsp;Back to Dashboard
        </Button>
        {/* Header */}
        <div className="flex items-center justify-center text-center mb-12">
          <div>
            <h1 className="text-xl font-bold text-foreground mb-1">
              Discover Qualified Profiles
            </h1>
            <p className="text-muted-foreground text-sm">
              Review profiles and connect with those interested in your business
              type
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-card">
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-[#0D3B66]">
                {profiles.length - currentProfileIndex}
              </div>
              <div className="text-sm">Profiles Left</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-[#048A81]">
                {matches.length}
              </div>
              <div className="text-sm">Connections Made</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-[#F95738]">94%</div>
              <div className="text-sm">Match Quality</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-[#048A81]">$2.3M</div>
              <div className="text-sm">Avg Budget</div>
            </CardContent>
          </Card>
        </div> */}

        {/* Main Matching Interface */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <BuyerProfileCard
                profile={currentProfile}
                onLike={handleLike}
                onPass={handlePass}
                onViewProfile={handleViewProfile}
                variant="stack"
              />

              {/* AI Match Score Overlay */}
              <div className="absolute -top-4 -right-4 z-10">
                <Badge className="bg-[#048A81] text-white font-bold text-lg px-3 py-1">
                  94% Match
                </Badge>
              </div>
            </div>
          </div>

          {/* Swipe Indicators */}
          <div className="flex justify-center items-center space-x-8 ">
            <div className="flex flex-col items-center space-y-2">
              <Button
                variant="outline"
                size="lg"
                className="w-16 h-16 rounded-full border-[#F95738] text-[#F95738] hover:bg-[#F95738] hover:text-white cursor-pointer"
                onClick={() => handlePass(currentProfile.id)}
              >
                <X className="h-8 w-8" />
              </Button>
              <span className="text-sm text-muted-foreground">Pass</span>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="text-sm text-muted-foreground">
                {currentProfileIndex + 1} of {profiles.length}
              </div>
              <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#048A81] transition-all duration-300"
                  style={{
                    width: `${
                      ((currentProfileIndex + 1) / profiles.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Button
                variant="default"
                size="lg"
                className="w-16 h-16 rounded-full bg-[#048A81] hover:text-[#048A81] hover:bg-white hover:border hover:border-[#048A81] cursor-pointer"
                onClick={() => handleLike(currentProfile.id)}
              >
                <Heart className="h-8 w-8" />
              </Button>
              <span className="text-sm text-muted-foreground">Connect</span>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          {/* <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Keyboard shortcuts:
            </p>
            <div className="flex justify-center space-x-6 text-xs text-muted-foreground">
              <span>
                <kbd className="px-2 py-1 bg-muted rounded">←</kbd> Pass
              </span>
              <span>
                <kbd className="px-2 py-1 bg-muted rounded">→</kbd> Connect
              </span>
              <span>
                <kbd className="px-2 py-1 bg-muted rounded">↑</kbd> View Profile
              </span>
            </div>
          </div> */}
        </div>
        {/* Detailed Profile Modal */}
        <BuyerProfileDetailed
          profile={selectedProfile}
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          onConnect={handleLike}
          onPass={handlePass}
        />
      </div>
    </div>
  );
}
