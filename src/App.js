// Modern 2026 Portfolio with Next-Gen Design

import Navbar2026 from './components/Navbar2026';
import Home2026 from './components/Home2026';
import About2026 from './components/About2026';
import Skills2026 from './components/Skills2026';
import Agency2026 from './components/Agency2026';
import GitHubPinnedRepos from './components/GitHubPinnedRepos';
import Blogs2026 from './components/Blogs2026';
import Contact from './components/Contact';
import Footer2026 from './components/Footer2026';
import StatusBar from './components/StatusBar';
import SmoothScroll from './components/SmoothScroll';
import { ThemeProvider } from './contexts/ThemeContext';
import { ContentProvider } from './contexts/ContentContext';

import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ContentProvider>
          <SEO />
          <SmoothScroll>
            <div className="App theme-bg-primary theme-text-primary overflow-x-hidden">
              <Navbar2026 />
              <Home2026 />
              <About2026 />
              <Skills2026 />
              <Agency2026 />
              <GitHubPinnedRepos />
              <Blogs2026 />
              <Contact />
              <Footer2026 />
              <StatusBar />
            </div>
          </SmoothScroll>
        </ContentProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
