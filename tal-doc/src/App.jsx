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
          <h1>THAPAR DRONE CHALLENGE CHALLENGES</h1>
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
            Welcome, students, to the THAPAR DRONE CHALLENGE Challenge Series. This document contains the official rules, objectives, and scoring criteria for all competitive events. Each challenge is designed to test a unique combination of studenting skill, strategic thinking, and engineering prowess. Study this briefing carefully to gain a competitive edge. All participants are expected to adhere to these guidelines and the general Code of Conduct.
          </p>
          <p>
            Good luck, and may the best student win.
          </p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            Please note: Accommodation at discounted rates will be provided only for participants coming from other colleges.
          </p>
        </section>
        
        <section id="general-rules" className="section">
          <h2>GENERAL RULES & DRONE SPECIFICATIONS</h2>
          <p>These regulations apply to all challenges to ensure a fair and safe competition.</p>
          
          <div className="specs-grid">
            <div className="spec-card">
              <h4>Safety First</h4>
              <p>All students must attend the mandatory pre-flight safety briefing. Any reckless flying that endangers participants, spectators, or equipment will result in immediate disqualification. The organizers are not responsible for any damages to drones or personal property during the event.</p>
            </div>

            <div className="spec-card">
              <h4>Participant Eligibility</h4>
              <p>All students must be current students. Please be prepared to present a valid student ID.</p>
            </div>
            
            <div className="spec-card">
              <h4>Drone Class</h4>
              <p>All drones must be classified as FPV (First-Person View) racing drones and must be equipped with a functional video camera.</p>
            </div>

            <div className="spec-card">
              <h4>Build Requirements</h4>
              <p>Only handmade drones built by students are permitted. No ready-made or off-the-shelf commercial drones will be allowed to compete.</p>
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
              <p>All VTX must be set to the assigned frequency and a maximum output of 25mW to prevent signal interference. students must be able to change their VTX channel upon request by a race marshal.</p>
            </div>

            <div className="spec-card">
              <h4>Spectator Feed</h4>
              <p>We will provide a screen for spectators. Your drone system must be capable of providing a video feed via an HDMI connection.</p>
            </div>
            
            <div className="spec-card">
              <h4>Failsafe</h4>
              <p>All drones must have a functional failsafe set to immediately cut motor power upon loss of signal. This will be tested before the first heat.</p>
            </div>
            
            <div className="spec-card">
              <h4>Video Submission</h4>
              <p>For any video submissions, please include the full specifications of your drone in the video description.</p>
            </div>
          </div>
        </section>
        
        <section id="challenges" className="section">
          <h2>CHALLENGES</h2>
          
          <div className="challenge-card">
            <h3>CHALLENGE 1: LOW-LEVEL FLIGHT</h3>
            <h4>Objective</h4>
            <p>Showcase your piloting skills by performing acrobatic loops and navigating obstacles, all while maintaining a challenging low altitude.</p>
            <h4>Scenario</h4>
            <p>This challenge unfolds across a specially designed course on one of Thapar's main grounds. Pilots will need to fly their drone no higher than 2 meters (approx. 6.5 feet) from the ground. The course will require you to execute a perfect 360-degree aileron roll through one gate, followed by a tight power loop over a designated obstacle. You'll then navigate a slalom of flags before flying under a low-hanging banner, testing your ability to manage prop wash and maintain stability close to the ground.</p>
          </div>
          
          <div className="challenge-card">
            <h3>CHALLENGE 2: EVENING RECON</h3>
            <h4>Objective</h4>
            <p>Scan the twilight landscape for signal flashes and use an announcement system to report your findings accurately and swiftly.</p>
            <h4>Scenario</h4>
            <p>As dusk settles over Patiala, this mission begins. Your drone must be equipped with a small, lightweight speaker. Across a dimly lit field, several LED beacons will flash in a specific sequence (e.g., Red-Blue-Red). Your task is to patrol the area, correctly identify the sequence from the air, and fly to a designated "command" zone. Once there, you must broadcast the correct color sequence audibly using your drone's announcement system. Time is critical, as is the accuracy of your report.</p>
          </div>
          
          <div className="challenge-card">
            <h3>CHALLENGE 3: TURBULENT DELIVERY</h3>
            <h4>Objective</h4>
            <p>Navigate through heavy air turbulence and evade enemy threats to deliver your critical 250 gm payload to a precise landing zone.</p>
            <h4>Scenario</h4>
            <p>A humanitarian mission under duress. Your drone will carry a 250g mock medical package. The flight path leads through a "wind corridor" created by large industrial fans, simulating severe turbulence. Along this path, red-lit "no-fly zones" representing enemy threats must be avoided. After clearing the turbulent corridor, you must carefully approach the landing zone—a 50cm-wide platform—and release the payload without it tipping over or falling off the target. The delivery must be gentle and precise.</p>
          </div>
          
          <div className="challenge-card">
            <h3>CHALLENGE 4: THE GAUNTLET</h3>
            <h4>Objective</h4>
            <p>Rely solely on your instruments to navigate a treacherous, smoke-filled tunnel. Avoid submerged obstacles and the tunnel walls in zero-visibility conditions.</p>
            <h4>Scenario</h4>
            <p>This is the ultimate test of instrument-only piloting. You will fly into a long, enclosed tunnel filled with dense, non-toxic smoke, reducing visibility to nearly zero. Your FPV feed will be your only guide. The tunnel floor will have sections covered in water with hidden obstacles just below the surface that you must fly over. Your only cues to avoid the walls, ceiling, and submerged hazards will be your on-screen display (OSD) data, such as altitude and artificial horizon. Touching any surface will result in immediate disqualification from the attempt.</p>
          </div>

          <div className="challenge-card">
            <h3>BONUS RACE: STRATEGIC DASH</h3>
            <h4>Objective</h4>
            <p>This isn't just about speed, it's about strategy. Decide on the fly which checkpoints to hit and which to skip, but be warned: every missed checkpoint comes at a cost.</p>
            <h4>Scenario</h4>
            <p>A high-speed race across a wide-open area of the campus. The course will feature 10 gates, but only 7 are mandatory. Three of the gates are designated as optional "risk" gates, placed in more challenging locations. Successfully navigating a risk gate grants you a significant time bonus. However, missing a mandatory gate or crashing while attempting a risk gate will add a heavy time penalty. The pilot who completes the course with the best final time—factoring in all bonuses and penalties—wins.</p>
          </div>

        </section>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Thapar Drone Challenge. All rights reserved.</p>
          <p>Official documentation for the Thapar Drone Challenge Challenge Series.</p>
        </div>
      </footer>
    </div>
  )
}

export default App