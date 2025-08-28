import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Building,
  DollarSign,
  CheckCircle,
  Star,
  Heart,
  Award,
  Target,
  Clock,
  Phone,
  Mail,
  Globe,
  Briefcase,
  PieChart,
} from "lucide-react";

interface BuyerProfile {
  id: string;
  name: string;
  company: string;
  avatar?: string;
  location: string;
  budget: {
    min: number;
    max: number;
  };
  industries: string[];
  experience: string;
  timeline: string;
  verified: boolean;
  rating: number;
  totalDeals: number;
  bio: string;
  lookingFor: string[];
}

interface BuyerProfileDetailedProps {
  profile: BuyerProfile | null;
  isOpen: boolean;
  onClose: () => void;
  onConnect: (id: string) => void;
  onPass: (id: string) => void;
}

// Extended profile data (in a real app, this would come from API)
const getExtendedProfileData = () => ({
  contactInfo: {
    email: "contact@growthventures.com",
    phone: "+1 (555) 123-4567",
    website: "www.growthventures.com",
  },
  investmentThesis:
    "We focus on acquiring profitable SaaS and technology businesses with proven product-market fit and strong recurring revenue models. Our goal is to provide operational expertise and capital to accelerate growth while maintaining the founding team's vision.",
  preferredDealStructure: ["Asset Purchase", "Stock Purchase", "Merger"],
  portfolioCompanies: [
    {
      name: "CloudSync Pro",
      industry: "SaaS",
      acquired: "2023",
      revenue: "$2.4M",
    },
    {
      name: "RetailFlow",
      industry: "E-commerce",
      acquired: "2022",
      revenue: "$1.8M",
    },
    {
      name: "DataPulse",
      industry: "Analytics",
      acquired: "2021",
      revenue: "$3.1M",
    },
  ],
  dealPreferences: {
    minimumRevenue: "$500K ARR",
    profitability: "Required",
    teamTransition: "Flexible",
    geographicPreference: "US & Canada",
    integrationApproach: "Maintain autonomy with strategic guidance",
  },
  references: [
    { name: "John Smith", role: "Former Seller", company: "TechStart Inc" },
    {
      name: "Sarah Wilson",
      role: "Investment Partner",
      company: "Capital Ventures",
    },
  ],
});

export function BuyerProfileDetailed({
  profile,
  isOpen,
  onClose,
  onConnect,
  onPass,
}: BuyerProfileDetailedProps) {
  if (!profile) return null;

  const extendedData = getExtendedProfileData();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-4xl max-md:max-w-full">
        <DialogHeader className="pb-6">
          {/* Profile Header */}
          <div className="flex items-start space-x-6 mt-12 max-md:flex-col max-md:gap-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="bg-[#0D3B66] text-white text-2xl">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2 max-md:flex-col max-md:items-start max-md:gap-2">
                <h2 className="text-3xl font-bold text-foreground max-md:text-xl">
                  {profile.name}
                </h2>
                <div className="flex gap-2">
                  {profile.verified && (
                    <CheckCircle className="h-6 w-6 text-[#048A81]" />
                  )}
                  <Badge className="bg-[#048A81] text-white">94% Match</Badge>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-3 max-md:flex-col max-md:items-start max-md:gap-2">
                <div className="flex items-center space-x-2 max-md:text-base">
                  <Building className="h-5 w-5 text-[#0D3B66]" />
                  <span className="text-lg font-semibold text-muted-foreground max-md:text-base">
                    {profile.company}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {profile.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-4 max-md:flex-col max-md:items-start max-md:gap-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-[#F4D35E] fill-current" />
                  <span className="font-semibold">{profile.rating}</span>
                  <span className="text-muted-foreground">
                    ({profile.totalDeals} deals)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-[#F95738]" />
                  <span className="text-muted-foreground">
                    {profile.experience}
                  </span>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center space-x-2 max-md:flex-col max-md:gap-2 max-md:items-start">
                <Button size="sm" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  {extendedData.contactInfo.email}
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  {extendedData.contactInfo.phone}
                </Button>
                <Button size="sm" variant="outline">
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </Button>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="max-md:w-full">
              <CardHeader>
                <CardTitle className="flex items-center text-lg max-md:text-base">
                  <DollarSign className="h-5 w-5 mr-2 text-[#048A81]" />
                  Investment Budget
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#048A81] mb-2 max-md:text-lg">
                  {formatCurrency(profile.budget.min)} -{" "}
                  {formatCurrency(profile.budget.max)}
                </div>
                <p className="text-sm text-muted-foreground max-md:text-xs">
                  Ready to deploy capital for the right opportunity
                </p>
              </CardContent>
            </Card>

            <Card className="max-md:w-full">
              <CardHeader>
                <CardTitle className="flex items-center text-lg max-md:text-base">
                  <Clock className="h-5 w-5 mr-2 text-[#F95738]" />
                  Timeline & Urgency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#F95738] mb-2 max-md:text-lg">
                  {profile.timeline}
                </div>
                <p className="text-sm text-muted-foreground max-md:text-xs">
                  Actively looking to close a deal
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Investment Thesis */}
          <Card className="max-md:w-full">
            <CardHeader>
              <CardTitle className="flex items-center max-md:text-base">
                <Target className="h-5 w-5 mr-2 text-[#0D3B66]" />
                Investment Thesis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed max-md:text-sm">
                {extendedData.investmentThesis}
              </p>
            </CardContent>
          </Card>

          {/* Industries & Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:w-full">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center max-md:text-base">
                  <Building className="h-5 w-5 mr-2 text-[#0D3B66]" />
                  Target Industries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.industries.map((industry) => (
                    <Badge
                      key={industry}
                      className="text-sm bg-[#048A81] max-md:text-xs"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center max-md:text-base">
                  <Heart className="h-5 w-5 mr-2 text-[#F95738]" />
                  Looking For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.lookingFor.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="text-sm max-md:text-xs"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Companies */}
          <Card className="max-md:w-full">
            <CardHeader>
              <CardTitle className="flex items-center max-md:text-base">
                <PieChart className="h-5 w-5 mr-2 text-[#048A81]" />
                Portfolio Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {extendedData.portfolioCompanies.map((company, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-1">{company.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {company.industry}
                    </p>
                    <div className="flex justify-between text-xs">
                      <span>Acquired: {company.acquired}</span>
                      <span className="font-semibold text-[#048A81]">
                        {company.revenue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Deal Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center max-md:text-base">
                <Briefcase className="h-5 w-5 mr-2 text-[#F95738]" />
                Deal Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 max-md:text-base">
                    Preferred Deal Structure
                  </h4>
                  <div className="space-y-1">
                    {extendedData.preferredDealStructure.map((structure) => (
                      <Badge key={structure} variant="outline" className="mr-2">
                        {structure}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Requirements</h4>
                  <ul className="text-sm text-muted-foreground space-y- max-md:text-xs">
                    <li>
                      • Minimum Revenue:{" "}
                      {extendedData.dealPreferences.minimumRevenue}
                    </li>
                    <li>
                      • Profitability:{" "}
                      {extendedData.dealPreferences.profitability}
                    </li>
                    <li>
                      • Team Transition:{" "}
                      {extendedData.dealPreferences.teamTransition}
                    </li>
                    <li>
                      • Geography:{" "}
                      {extendedData.dealPreferences.geographicPreference}
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Action Buttons */}
          <div className="flex space-x-3 max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full max-md:gap-4 max-md:space-x-0">
            <Button
              variant="outline"
              size="lg"
              className="border-[#F95738] text-[#F95738] hover:bg-[#F95738] hover:text-white cursor-pointer"
              onClick={() => {
                onPass(profile.id);
                onClose();
              }}
            >
              Pass on This Buyer
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-[#048A81] hover:text-[#048A81] hover:bg-white hover:border hover:border-[#048A81] cursor-pointer"
              onClick={() => {
                onConnect(profile.id);
                onClose();
              }}
            >
              <Heart className="h-5 w-5 mr-2" />
              Connect Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
