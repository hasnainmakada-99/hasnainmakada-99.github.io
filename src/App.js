// Modern 2026 Portfolio with Next-Gen Design

import Navbar2026 from './components/Navbar2026';
import Home2026 from './components/Home2026';
import About2026 from './components/About2026';
import Skills2026 from './components/Skills2026';
import GitHubPinnedRepos from './components/GitHubPinnedRepos';
import Blogs2026 from './components/Blogs2026';
import Contact from './components/Contact';
import Footer2026 from './components/Footer2026';
import SmoothScroll from './components/SmoothScroll';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="App theme-bg-primary theme-text-primary overflow-x-hidden">
          <Navbar2026 />
          <Home2026 />
          <About2026 />
          <Skills2026 />
          <GitHubPinnedRepos />
          <Blogs2026 />
          <Contact />
          <Footer2026 />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
