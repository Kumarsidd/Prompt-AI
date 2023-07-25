import { LandingNavbar } from "@/components/landingNavbar";
import { LandingHero } from "@/components/landingHero";
import { LandingContent } from "@/components/landingContent";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingContent />

      <main className="h-full  overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full w-full">
          <LandingNavbar />
          <LandingHero />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
