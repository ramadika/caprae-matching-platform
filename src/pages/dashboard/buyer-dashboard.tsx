import { useState } from "react";
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
import {
  Heart,
  Eye,
  MessageCircle,
  TrendingUp,
  DollarSign,
  ChevronRight,
  Star,
  Filter,
  Bell,
} from "lucide-react";
import { NavLink } from "react-router";

export default function BuyerDashboard() {
  const [stats] = useState({
    savedBusinesses: 15,
    activeOffers: 3,
    matches: 12,
    budget: 3500000,
  });

  const recentBusinesses = [
    {
      id: "1",
      name: "TechFlow SaaS",
      industry: "Technology",
      revenue: "$2.4M",
      askingPrice: "$7.2M",
      location: "San Francisco, CA",
      seller: "Jane Doe",
      match: 94,
      liked: true,
      verified: true,
    },
    {
      id: "2",
      name: "GreenLeaf Consulting",
      industry: "Professional Services",
      revenue: "$1.8M",
      askingPrice: "$4.5M",
      location: "Austin, TX",
      seller: "Mark Wilson",
      match: 87,
      liked: false,
      verified: true,
    },
    {
      id: "3",
      name: "Urban Eats Delivery",
      industry: "Food & Beverage",
      revenue: "$3.1M",
      askingPrice: "$9.3M",
      location: "Chicago, IL",
      seller: "Sarah Kim",
      match: 91,
      liked: true,
      verified: true,
    },
  ];

  const notifications = [
    {
      id: 1,
      text: "TechFlow SaaS seller wants to connect",
      time: "2h ago",
      type: "match",
    },
    {
      id: 2,
      text: "New business matching your criteria",
      time: "5h ago",
      type: "business",
    },
    {
      id: 3,
      text: "Your offer on GreenLeaf was declined",
      time: "1d ago",
      type: "offer",
    },
    {
      id: 4,
      text: "Document request from Urban Eats",
      time: "2d ago",
      type: "document",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FE]">
      <Navigation
        userRole="buyer"
        userInfo={{ name: "Michael Chen", avatar: "" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#F95738] mb-2">
            Welcome back, Michael! 👋
          </h1>
          <p className="text-[#048A81] max-md:text-sm">
            You have 3 new business matches and 2 sellers interested in
            connecting with you.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#048A81]">Saved Businesses</p>
                  <p className="text-2xl font-bold text-[#0D3B66]">
                    {stats.savedBusinesses}
                  </p>
                </div>
                <Heart className="h-8 w-8 text-[#F95738]" />
              </div>
              <p className="text-xs mt-2">+3 this week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#048A81]">Active Offers</p>
                  <p className="text-2xl font-bold text-[#0D3B66]">
                    {stats.activeOffers}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-[#F95738]" />
              </div>
              <p className="text-xs mt-2">2 pending responses</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#048A81]">New Matches</p>
                  <p className="text-2xl font-bold text-[#0D3B66]">
                    {stats.matches}
                  </p>
                </div>
                <MessageCircle className="h-8 w-8 text-[#F95738]" />
              </div>
              <p className="text-xs mt-2">+5 this week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#048A81]">Available Budget</p>
                  <p className="text-xl font-bold text-[#0D3B66]">
                    ${(stats.budget / 1000000).toFixed(1)}M
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-[#F95738]" />
              </div>
              <p className="text-xs mt-2">Ready to deploy</p>
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
            {/* Featured Businesses */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recommended for You</CardTitle>
                    <CardDescription>
                      Businesses matching your investment criteria
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentBusinesses.map((business) => (
                  <div
                    key={business.id}
                    className="p-6 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2 max-md:flex-col max-md:space-x-0 max-md:items-start max-md:gap-1">
                          <h4 className="text-lg font-semibold text-[#0D3B66]">
                            {business.name}
                          </h4>
                          {business.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-[#F4D35E] fill-current" />
                            <span className="text-xs text-[#048A81]">
                              {business.match}% match
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-[#048A81] mb-3">
                          {business.industry} • {business.location}
                        </p>

                        <div className="flex items-center space-x-6 text-sm">
                          <div>
                            <span className="text-[#048A81]">Revenue: </span>
                            <span className="font-medium text-foreground">
                              {business.revenue}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#048A81]">Asking: </span>
                            <span className="font-medium text-foreground">
                              {business.askingPrice}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#048A81]">Seller: </span>
                            <span className="font-medium text-foreground">
                              {business.seller}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mt-4 md:hidden">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button
                            variant={business.liked ? "default" : "outline"}
                            size="sm"
                            className={business.liked ? "bg-[#F95738]" : ""}
                          >
                            <Heart
                              className={`h-4 w-4 mr-1 ${
                                business.liked ? "fill-current" : ""
                              }`}
                            />
                            {business.liked ? "Saved" : "Save"}
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4 max-md:hidden">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant={business.liked ? "default" : "outline"}
                          size="sm"
                          className={business.liked ? "bg-[#F95738]" : ""}
                        >
                          <Heart
                            className={`h-4 w-4 mr-1 ${
                              business.liked ? "fill-current" : ""
                            }`}
                          />
                          {business.liked ? "Saved" : "Save"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="text-center pt-4">
                  <Button variant="outline">
                    View All Businesses
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Market Insights */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-[#0D3B66]" />
                  <CardTitle className="text-foreground">
                    Market Insights
                  </CardTitle>
                </div>
                <CardDescription>
                  AI-powered market analysis for your investment focus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4">
                  <h4 className="font-semibold text-[#0D3B66] mb-2">
                    SaaS Market Trends
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    SaaS businesses in your budget range are seeing 23% higher
                    valuations than last quarter. Consider making competitive
                    offers on quality targets.
                  </p>
                  <Button variant="outline" size="sm">
                    View Full Report
                  </Button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#0D3B66] mb-2">
                    Deal Competition
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    3 other buyers are targeting similar businesses in your
                    area. Fast decision-making could give you a competitive
                    advantage.
                  </p>
                  <Button variant="outline" size="sm">
                    Adjust Strategy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                  <Bell className="h-4 w-4 text-[#048A81]" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === "match"
                          ? "bg-[#048A81]"
                          : notification.type === "business"
                          ? "bg-[#0D3B66]"
                          : notification.type === "offer"
                          ? "bg-[#F95738]"
                          : "bg-[#F4D35E]"
                      }`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">
                        {notification.text}
                      </p>
                      <p className="text-xs text-[#048A81] mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Investment Summary */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Investment Profile</CardTitle>
                <CardDescription>Your current search criteria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Budget Range</h4>
                  <p className="text-lg font-bold text-[#048A81]">$2M - $5M</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">
                    Target Industries
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-[#048A81] text-white"
                    >
                      Technology
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-[#048A81] text-white"
                    >
                      SaaS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-[#048A81] text-white"
                    >
                      E-commerce
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Timeline</h4>
                  <p className="text-sm text-[#048A81]">3-6 months</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Update Preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
