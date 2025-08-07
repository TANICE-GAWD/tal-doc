import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to section when clicking nav links
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1>AERO-LEAGUE CHALLENGES</h1>
          <p>OFFICIAL BRIEFING</p>
        </div>
      </header>
      
      <nav className="nav-container">
        <div className="nav">
          <a 
            className={`nav-link ${activeSection === 'intro' ? 'active' : ''}`} 
            onClick={() => scrollToSection('intro')}
            href="#intro"
          >
            Introduction
          </a>
          <a 
            className={`nav-link ${activeSection === 'general-rules' ? 'active' : ''}`} 
            onClick={() => scrollToSection('general-rules')}
            href="#general-rules"
          >
            General Rules
          </a>
          <a 
            className={`nav-link ${activeSection === 'challenges' ? 'active' : ''}`} 
            onClick={() => scrollToSection('challenges')}
            href="#challenges"
          >
            Challenges
          </a>
        </div>
      </nav>
      
      <main className="main-content">
        <section id="intro" className="section">
          <p>
            Welcome, pilots, to the Aero-League Challenge Series. This document contains the official rules, objectives, and scoring criteria for all competitive events. Each challenge is designed to test a unique combination of piloting skill, strategic thinking, and engineering prowess. Study this briefing carefully to gain a competitive edge. All participants are expected to adhere to these guidelines and the general Code of Conduct.
          </p>
          <p>
            Good luck, and may the best pilot win.
          </p>
        </section>
        
        <section id="general-rules" className="section">
          <h2>GENERAL RULES & DRONE SPECIFICATIONS</h2>
          <p>These regulations apply to all challenges to ensure a fair and safe competition.</p>
          
          <div className="specs-grid">
            <div className="spec-card">
              <h4>Safety First</h4>
              <p>All pilots must attend the mandatory pre-flight safety briefing. Any reckless flying that endangers participants, spectators, or equipment will result in immediate disqualification.</p>
            </div>
            
            <div className="spec-card">
              <h4>Drone Class</h4>
              <p>All drones must be classified as FPV (First-Person View) racing drones.</p>
            </div>
          </div>
          
          <h3>Technical Specifications</h3>
          <div className="specs-grid">
            <div className="spec-card">
              <h4>Max Propeller Size</h4>
              <p>5.5 inches</p>
            </div>
            
            <div className="spec-card">
              <h4>Max Frame Size</h4>
              <p>250mm (motor to motor)</p>
            </div>
            
            <div className="spec-card">
              <h4>Max Battery Voltage</h4>
              <p>4S LiPo (16.8v fully charged)</p>
            </div>
            
            <div className="spec-card">
              <h4>Video Transmission (VTX)</h4>
              <p>All VTX must be set to the assigned frequency and a maximum output of 25mW to prevent signal interference. Pilots must be able to change their VTX channel upon request by a race marshal.</p>
            </div>
            
            <div className="spec-card">
              <h4>Failsafe</h4>
              <p>All drones must have a functional failsafe set to immediately cut motor power upon loss of signal. This will be tested before the first heat.</p>
            </div>
            
            <div className="spec-card">
              <h4>Modifications</h4>
              <p>Custom builds and modifications are highly encouraged, provided they adhere to the class specifications listed above.</p>
            </div>
          </div>
        </section>
        
        <section id="challenges" className="section">
          <h2>CHALLENGES</h2>
          
          <div className="challenge-card">
            <h3>CHALLENGE 1: OBSTACLE SPRINT</h3>
            
            <h4>Objective</h4>
            <p>Navigate a complex, three-dimensional course in the fastest time possible while successfully passing through a series of gates.</p>
            
            <h4>Course Layout</h4>
            <p>The course consists of 10 illuminated gates, including slaloms, tunnels, and vertical dives. The official flight path will be revealed 24 hours before the event.</p>
            
            <h4>Rules of Engagement</h4>
            <ul>
              <li>Pilots must pass through the center of each gate. The gate's light will change from blue to green to confirm a successful pass.</li>
              <li>Missing a gate requires the pilot to circle back and re-attempt it before proceeding.</li>
              <li>Contact with any obstacle or the ground will add a 3-second penalty to the final time for each incident.</li>
            </ul>
            
            <h4>Scoring System</h4>
            <p>The final score is the total time taken to complete the course, including any penalties. The pilot with the lowest time wins. Each pilot gets two attempts, with the best time being recorded.</p>
            
            <div className="tips-list">
              <h4>Tips for Success</h4>
              <p>Balance is key. Pushing for maximum speed can lead to costly penalties. A smooth, controlled flight is often faster than a reckless one. Memorize the course layout during the pre-flight inspection.</p>
            </div>
          </div>
          
          <div className="challenge-card">
            <h3>CHALLENGE 2: PRECISION LANDING</h3>
            
            <h4>Objective</h4>
            <p>Execute a controlled landing on a series of progressively smaller, designated targets from a set altitude.</p>
            
            <h4>Arena Layout</h4>
            <p>The arena contains three circular landing pads with diameters of 50cm, 25cm, and 10cm. Each pad is also an electronic pressure sensor.</p>
            
            <h4>Rules of Engagement</h4>
            <ul>
              <li>Pilots must take off and hover at a designated altitude of 15 meters.</li>
              <li>On the "descend" command, the pilot must land on one of the three targets. The drone must remain on the pad for 3 seconds to register a successful landing.</li>
              <li>Pilots have three attempts to score the maximum number of points.</li>
            </ul>
            
            <h4>Scoring System</h4>
            <table className="scoring-table">
              <thead>
                <tr>
                  <th>Target</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10cm Pad</td>
                  <td>100 Points</td>
                </tr>
                <tr>
                  <td>25cm Pad</td>
                  <td>50 Points</td>
                </tr>
                <tr>
                  <td>50cm Pad</td>
                  <td>25 Points</td>
                </tr>
                <tr>
                  <td>Outside Target</td>
                  <td>0 Points</td>
                </tr>
              </tbody>
            </table>
            <p>A landing where any part of the drone is outside the target circle scores 0 points. The highest score from the three attempts is recorded.</p>
            
            <div className="tips-list">
              <h4>Tips for Success</h4>
              <p>This challenge is about throttle control and managing prop wash, especially near the ground. Use slow, deliberate movements. A drone with a lower center of gravity may be more stable during the final descent.</p>
            </div>
          </div>
          
          <div className="challenge-card">
            <h3>CHALLENGE 3: SPEED CIRCUIT</h3>
            
            <h4>Objective</h4>
            <p>Complete three laps of a high-speed racing circuit faster than any other pilot in your heat.</p>
            
            <h4>Course Layout</h4>
            <p>A traditional FPV racing track marked with flags and large air gates. The circuit is designed for speed, with wide turns and long straightaways.</p>
            
            <h4>Rules of Engagement</h4>
            <ul>
              <li>This is a head-to-head race with up to four pilots per heat.</li>
              <li>Pilots must stay within the marked course boundaries.</li>
              <li>The race begins with a multi-drone launch from starting pads. A false start will move the pilot to the back row on the restart.</li>
            </ul>
            
            <h4>Scoring System</h4>
            <p>The first pilot to complete three laps wins the heat and advances to the next round in a tournament-style bracket.</p>
            
            <div className="tips-list">
              <h4>Tips for Success</h4>
              <p>Mastering the racing line is critical. Find the most efficient path through the turns (the "apex") to maintain momentum. A lightweight build with a high power-to-weight ratio will excel here.</p>
            </div>
          </div>
          
          <div className="challenge-card">
            <h3>CHALLENGE 4: FREESTYLE BATTLE</h3>
            
            <h4>Objective</h4>
            <p>Showcase technical skill, creativity, and piloting artistry in a 90-second, open-format performance.</p>
            
            <h4>Arena Layout</h4>
            <p>An open arena filled with a variety of structures, including abandoned buildings, concrete pillars, and metal scaffolding, providing a "bando" style environment.</p>
            
            <h4>Rules of Engagement</h4>
            <ul>
              <li>Each pilot has 90 seconds to perform a freestyle routine.</li>
              <li>The routine must be continuous (no landing and re-launching).</li>
              <li>Use of the environment is highly encouraged (e.g., power loops through windows, wall rides, gap dives).</li>
            </ul>
            
            <h4>Scoring System</h4>
            <p>A panel of three judges will score the routine based on the following criteria (1-10 points each):</p>
            <table className="scoring-table">
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Technical Difficulty</td>
                  <td>Complexity of the maneuvers (e.g., trippy spins, Mattyflips, inverted yaw spins)</td>
                </tr>
                <tr>
                  <td>Creativity & Style</td>
                  <td>Originality and flow of the routine</td>
                </tr>
                <tr>
                  <td>Use of Environment</td>
                  <td>How well the pilot integrated the obstacles into their flight path</td>
                </tr>
              </tbody>
            </table>
            <p>The final score is the average of the three judges' scores.</p>
            
            <div className="tips-list">
              <h4>Tips for Success</h4>
              <p>Plan a routine in advance, but be prepared to improvise. A great freestyle run tells a story and has a natural rhythm.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Aero-League. All rights reserved.</p>
          <p>Official documentation for the Aero-League Challenge Series.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
