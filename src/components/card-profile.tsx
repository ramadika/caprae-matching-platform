import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Building,
  DollarSign,
  Calendar,
  CheckCircle,
  X,
  Heart,
  Eye,
  Star,
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

interface BuyerProfileCardProps {
  profile: BuyerProfile;
  onLike: (id: string) => void;
  onPass: (id: string) => void;
  onViewProfile: (id: string) => void;
  variant?: "stack" | "list";
}

export function BuyerProfileCard({
  profile,
  onLike,
  onPass,
  onViewProfile,
  variant = "stack",
}: BuyerProfileCardProps) {
  const [isAnimating, setIsAnimating] = useState<"left" | "right" | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleAction = (action: "like" | "pass") => {
    setIsAnimating(action === "like" ? "right" : "left");
    setTimeout(() => {
      if (action === "like") {
        onLike(profile.id);
      } else {
        onPass(profile.id);
      }
    }, 300);
  };

  return (
    <Card
      className={`
        relative overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300
        ${isAnimating === "left" ? "animate-swipe-left" : ""}
        ${isAnimating === "right" ? "animate-swipe-right" : ""}
        ${variant === "stack" ? "w-full max-w-sm" : "w-full"}
      `}
    >
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="bg-[#0D3B66] text-white text-lg">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold text-foreground">
                  {profile.name}
                </h3>
                {profile.verified && (
                  <CheckCircle className="h-5 w-5 text-success" />
                )}
              </div>
              <p className="text-muted-foreground font-medium">
                {profile.company}
              </p>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {profile.location}
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewProfile(profile.id)}
            className="shrink-0"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-warning fill-current" />
            <span className="text-sm font-medium">{profile.rating}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {profile.totalDeals} deals completed
          </div>
        </div>

        {/* Budget */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="h-4 w-4 text-[#048A81]" />
            <span className="font-medium">Budget Range</span>
          </div>
          <div className="text-lg font-bold text-[#048A81]">
            {formatCurrency(profile.budget.min)} -{" "}
            {formatCurrency(profile.budget.max)}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Building className="h-4 w-4 text-primary" />
            <span className="font-medium">Target Industries</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.industries.slice(0, 3).map((industry) => (
              <Badge key={industry} variant="secondary">
                {industry}
              </Badge>
            ))}
            {profile.industries.length > 3 && (
              <Badge variant="outline">
                +{profile.industries.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-1">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="font-medium">Timeline</span>
          </div>
          <p className="text-muted-foreground">{profile.timeline}</p>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {profile.bio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 border-[#F95738] text-[#F95738] hover:bg-[#F95738] hover:text-white cursor-pointer"
            onClick={() => handleAction("pass")}
          >
            <X className="h-5 w-5 mr-2" />
            Pass
          </Button>
          <Button
            variant="default"
            size="lg"
            className="flex-1 bg-[#048A81] hover:text-[#048A81] hover:bg-white hover:border hover:border-[#048A81] shadow-success cursor-pointer"
            onClick={() => handleAction("like")}
          >
            <Heart className="h-5 w-5 mr-2" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
