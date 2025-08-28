import { useState } from "react";
import { useNavigate } from "react-router";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FileText,
  Brain,
  MessageCircle,
  CheckCircle,
  Clock,
  AlertTriangle,
  DollarSign,
  Calendar,
  Upload,
  TrendingUp,
} from "lucide-react";

interface Deal {
  id: string;
  buyerName: string;
  buyerCompany: string;
  buyerAvatar?: string;
  businessName: string;
  offerAmount: number;
  stage: "initial" | "diligence" | "negotiation" | "closing" | "completed";
  progress: number;
  lastActivity: string;
  nextAction: string;
  documents: {
    uploaded: number;
    required: number;
  };
  aiInsights: string[];
}

const mockDeals: Deal[] = [
  {
    id: "1",
    buyerName: "Michael Chen",
    buyerCompany: "Growth Ventures LLC",
    buyerAvatar: "",
    businessName: "TechFlow SaaS",
    offerAmount: 3200000,
    stage: "diligence",
    progress: 65,
    lastActivity: "2 hours ago",
    nextAction: "Review financial projections",
    documents: { uploaded: 12, required: 18 },
    aiInsights: [
      "Buyer's financing is pre-approved",
      "Timeline is on track for 90-day close",
      "Consider highlighting customer retention metrics",
    ],
  },
  {
    id: "2",
    buyerName: "Sarah Johnson",
    buyerCompany: "Strategic Acquisitions Inc",
    buyerAvatar: "",
    businessName: "TechFlow SaaS",
    offerAmount: 2850000,
    stage: "negotiation",
    progress: 45,
    lastActivity: "1 day ago",
    nextAction: "Respond to price adjustment request",
    documents: { uploaded: 8, required: 18 },
    aiInsights: [
      "Buyer requested 10% price reduction",
      "Consider counter-offer with earnout structure",
      "Similar deals in your industry closed at higher multiples",
    ],
  },
  {
    id: "3",
    buyerName: "David Rodriguez",
    buyerCompany: "Rodriguez Family Office",
    buyerAvatar: "",
    businessName: "TechFlow SaaS",
    offerAmount: 3450000,
    stage: "initial",
    progress: 15,
    lastActivity: "3 days ago",
    nextAction: "Schedule initial meeting",
    documents: { uploaded: 3, required: 18 },
    aiInsights: [
      "High-quality buyer with strong financial backing",
      "Previous deals show fast decision-making",
      "Consider prioritizing this opportunity",
    ],
  },
];

const stageColors = {
  initial: "bg-[#0D3B66]",
  diligence: "bg-[#F4D35E]",
  negotiation: "bg-[#F95738]",
  closing: "bg-[#048A81]",
  completed: "bg-[#048A81]",
};

const stageLabels = {
  initial: "Initial Interest",
  diligence: "Due Diligence",
  negotiation: "Negotiation",
  closing: "Closing",
  completed: "Completed",
};

export default function DealsPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [deals] = useState(mockDeals);

  const navigate = useNavigate();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case "initial":
        return <MessageCircle className="h-4 w-4" />;
      case "diligence":
        return <FileText className="h-4 w-4" />;
      case "negotiation":
        return <DollarSign className="h-4 w-4" />;
      case "closing":
        return <CheckCircle className="h-4 w-4" />;
      case "completed":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          className="bg-transparent text-[#0D3B66] border border-[#0D3B66] mb-4 cursor-pointer hover:text-white hover:bg-[#0D3B66]"
          onClick={() => navigate(-1)}
        >
          &#8592;&nbsp;Back to Dashboard
        </Button>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Deal Management
          </h1>
          <p className="text-muted-foreground max-md:text-sm">
            Track and manage your active business sale negotiations
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-md:gap-4">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Deals</p>
                  <p className="text-2xl font-bold text-foreground">
                    {deals.length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-[#0D3B66]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Highest Offer</p>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(
                      Math.max(...deals.map((d) => d.offerAmount))
                    )}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-[#048A81]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Progress</p>
                  <p className="text-2xl font-bold text-foreground">
                    {Math.round(
                      deals.reduce((acc, deal) => acc + deal.progress, 0) /
                        deals.length
                    )}
                    %
                  </p>
                </div>
                <Clock className="h-8 w-8 text-[#F95738]" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Est. Close</p>
                  <p className="text-2xl font-bold text-foreground">45d</p>
                </div>
                <Calendar className="h-8 w-8 text-[#048A81]" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="active" className="cursor-pointer">
              Active Deals
            </TabsTrigger>
            <TabsTrigger value="completed" className="cursor-pointer">
              Completed
            </TabsTrigger>
            <TabsTrigger value="analytics" className="cursor-pointer">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {deals.map((deal) => (
              <Card
                key={deal.id}
                className="shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6 max-md:flex-col max-md:gap-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={deal.buyerAvatar}
                          alt={deal.buyerName}
                        />
                        <AvatarFallback className="bg-[#0D3B66] text-white">
                          {deal.buyerName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground max-md:text-lg">
                          {deal.buyerName}
                        </h3>
                        <p className="text-muted-foreground max-md:text-sm">
                          {deal.buyerCompany}
                        </p>
                        <Badge
                          variant="outline"
                          className="mt-1 max-md:text-sm"
                        >
                          {deal.businessName}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl font-bold text-[#048A81]">
                        {formatCurrency(deal.offerAmount)}
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${stageColors[deal.stage]} text-white`}
                      >
                        {getStageIcon(deal.stage)}
                        <span className="ml-1">{stageLabels[deal.stage]}</span>
                      </Badge>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Deal Progress</span>
                      <span>{deal.progress}%</span>
                    </div>
                    <Progress value={deal.progress} className="h-2" />
                  </div>

                  {/* Document Status */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-[#0D3B66]" />
                      <div>
                        <p className="text-sm font-medium">Documents</p>
                        <p className="text-sm text-muted-foreground">
                          {deal.documents.uploaded} of {deal.documents.required}{" "}
                          uploaded
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-[#048A81]" />
                      <div>
                        <p className="text-sm font-medium">Last Activity</p>
                        <p className="text-sm text-muted-foreground">
                          {deal.lastActivity}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-[#F95738]" />
                      <div>
                        <p className="text-sm font-medium">Next Action</p>
                        <p className="text-sm text-muted-foreground">
                          {deal.nextAction}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <Card className="bg-[#f5f8fe] border-[#d2e1fd] mb-6">
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-3">
                        <Brain className="h-4 w-4 text-[#0D3B66]" />
                        <span className="text-sm font-medium text-[#0D3B66]">
                          AI Deal Insights
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {deal.aiInsights.map((insight, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start space-x-2 max-md:text-xs"
                          >
                            <span className="text-[#0D3B66]">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-[#0D3B66] cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Document
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed">
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <CheckCircle className="h-12 w-12 text-[#048A81] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No Completed Deals Yet
                </h3>
                <p className="text-muted-foreground">
                  Your completed deals will appear here once you close your
                  first transaction.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Deal Pipeline</CardTitle>
                  <CardDescription>
                    Visual overview of your deal stages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(stageLabels).map(([stage, label]) => {
                      const dealsInStage = deals.filter(
                        (d) => d.stage === stage
                      ).length;
                      const percentage =
                        deals.length > 0
                          ? (dealsInStage / deals.length) * 100
                          : 0;

                      return (
                        <div key={stage}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{label}</span>
                            <span>{dealsInStage} deals</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                stageColors[stage as keyof typeof stageColors]
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Deal Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">
                      Average Deal Size
                    </span>
                    <span className="text-lg font-bold text-[#0D3B66]">
                      {formatCurrency(
                        deals.reduce((acc, deal) => acc + deal.offerAmount, 0) /
                          deals.length
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">
                      Time to Close (Est.)
                    </span>
                    <span className="text-lg font-bold text-[#048A81]">
                      87 days
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Conversion Rate</span>
                    <span className="text-lg font-bold text-[#048A81]">
                      73%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">
                      Active Negotiations
                    </span>
                    <span className="text-lg font-bold text-[#F95738]">
                      {deals.filter((d) => d.stage === "negotiation").length}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
