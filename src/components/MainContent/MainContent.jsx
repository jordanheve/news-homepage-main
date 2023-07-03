import { HomeSection } from "./sections/HomeSection"
import { NewSection } from "./sections/NewSection"
import { TrendingSection } from "./sections/TrendingSection"

export const MainContent = () => {
  return (
    <main className="main">
        <HomeSection/>
        <NewSection/>
        <TrendingSection/>
    </main>
  )
}
