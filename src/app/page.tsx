import Navbar from "@/components/Navbar";
import HomeFeed from "../components/HomeFeed";
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="home-space">
        <HomeFeed />
      </main>
    </>
  );
}
