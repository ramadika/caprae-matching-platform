import { useState } from "react";
import { useNavigate } from "react-router";
import { mockBuyerProfiles } from "@/utils/constants";

export function useMatching() {
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

  return {
    isLoading,
    selectedProfile,
    isProfileModalOpen,
    currentProfile,
    currentProfileIndex,
    profiles,
    setCurrentProfileIndex,
    setIsProfileModalOpen,
    navigate,
    handleLike,
    handlePass,
    handleViewProfile,
  };
}
