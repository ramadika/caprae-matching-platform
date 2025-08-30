import { NavLink } from "react-router";
import { useSellerDashboard } from "@/hooks/useSellerDashboard";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Eye,
  Heart,
  MessageCircle,
  TrendingUp,
  ChevronRight,
  Star,
  Brain,
} from "lucide-react";
import { recentMatches } from "@/utils/constants";

export default function Index() {
  const { stats } = useSellerDashboard();

  return (
    <div className="min-h-screen bg-[#F5F8FE]">
      <Navigation
        userRole="seller"
        userInfo={{ name: "Jane Doe", avatar: "" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#F95738] mb-2 max-md:text-2xl">
            Welcome back, Jane! 👋
          </h1>
          <p className="text-[#048A81] max-md:text-sm">
            Your TechFlow SaaS listing is performing well. You have 8 new buyer
            matches to review.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8 max-md:gap-4">
          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#048A81]">Profile Views</p>
                  <p className="text-2xl font-bold text-[#0D3B66]">
                    {stats.profileViews}
                  </p>
                </div>
                <Eye className="h-8 w-8 text-[#F95738]" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                +15% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#048A81]">Buyer Interest</p>
                  <p className="text-2xl font-bold text-[#0D3B66]">
                    {stats.likes}
                  </p>
                </div>
                <Heart className="h-8 w-8 text-[#F95738]" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                +8 new this week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#048A81]">Active Matches</p>
                  <p className="text-2xl font-bold text-[#0D3B66]">
                    {stats.matches}
                  </p>
                </div>
                <MessageCircle className="h-8 w-8 text-[#F95738]" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                3 need your response
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#048A81]">Business Value</p>
                  <p className="text-xl font-bold text-[#0D3B66]">
                    ${(stats.revenue / 1000000).toFixed(1)}M
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-[#F95738]" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                +{stats.growth}% growth
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card className="shadow-card">
            <CardContent className="flex flex-col items-center justify-center w-full text-center gap-4">
              <div>
                <h1 className="text-xl font-bold text-foreground mb-1">
                  Discover Qualified Profiles
                </h1>
                <p className="text-muted-foreground text-sm">
                  Review profiles and connect with those interested in your
                  business type
                </p>
              </div>
              <Button className="w-8/12 font-semibold tracking-wide text-lg py-2 border bg-[#F95738] hover:border-[#F95738] hover:bg-white hover:text-[#F95738]">
                <NavLink to="/discover" className="flex items-center gap-2">
                  <Eye />
                  Start Matching
                </NavLink>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Matches */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
                  <div>
                    <CardTitle>Recent Buyer Matches</CardTitle>
                    <CardDescription>
                      Buyers who are interested in your business
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 bg-[#F95738] text-white hover:border-[#F95738] hover:bg-white hover:text-[#F95738] cursor-pointer"
                  >
                    <NavLink to="/deals">View All Deals</NavLink>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMatches.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={match.avatar} alt={match.name} />
                        <AvatarFallback className="bg-[#0D3B66] text-white">
                          {match.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="max-md:flex max-md:flex-col max-md:items-start max-md:gap-1">
                        <div className="flex gap-2 md:hidden">
                          <Badge
                            variant={
                              match.status === "interested"
                                ? "default"
                                : "secondary"
                            }
                            className="mb-2"
                          >
                            {match.status}
                          </Badge>
                          <p className="text-xs text-[#048A81]">
                            {match.lastActive}
                          </p>
                        </div>
                        <h4 className="font-semibold text-[#0D3B66]">
                          {match.name}
                        </h4>
                        <p className="text-sm text-[#048A81]">
                          {match.company}
                        </p>
                        <div className="flex items-center space-x-2 max-md:flex-col max-md:space-x-0 max-md:gap-1">
                          <Badge variant="outline" className="text-xs">
                            {match.budget}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-[#F4D35E] fill-current" />
                            <span className="text-xs text-[#048A81]">
                              {match.match}% match
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right max-md:hidden">
                      <Badge
                        variant={
                          match.status === "interested"
                            ? "default"
                            : "secondary"
                        }
                        className="mb-2"
                      >
                        {match.status}
                      </Badge>
                      <p className="text-xs text-[#048A81]">
                        {match.lastActive}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-[#0D3B66]" />
                  <CardTitle className="text-foreground">
                    AI Business Insights
                  </CardTitle>
                </div>
                <CardDescription>
                  Smart recommendations to improve your listing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4">
                  <h4 className="font-semibold text-[#0D3B66] mb-2">
                    Optimize Your Asking Price
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based on similar SaaS businesses, your asking price could be
                    15% higher given your growth metrics.
                  </p>
                  <Button variant="outline" size="sm">
                    View Analysis
                  </Button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#0D3B66] mb-2">
                    Profile Enhancement
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Add customer testimonials to increase buyer confidence by an
                    estimated 23%.
                  </p>
                  <Button variant="outline" size="sm">
                    Upload Testimonials
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Profile Completion</CardTitle>
                <CardDescription>
                  Complete your profile to attract more buyers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#048A81] rounded-full mr-2"></div>
                      Business overview complete
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#048A81] rounded-full mr-2"></div>
                      Financial data uploaded
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#F4D35E] rounded-full mr-2"></div>
                      Add customer testimonials
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
