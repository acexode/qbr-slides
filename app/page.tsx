"use client";

import { useEffect, useState } from "react";

function SlideOne() {
  return (
    <div className="slide-container slide-1">
      <div className="bg-pattern" />
      <div className="bg-pattern-2" />
      <div className="geo-circle geo-circle-1" />
      <div className="geo-circle geo-circle-2" />
      <div className="geo-square geo-square-1" />

      <div className="date-badge">
        <i className="fas fa-calendar-alt date-icon" />
        <span className="date-text">April 2026</span>
      </div>

      <div className="main-content">
        <div className="header">
          <div className="company-logo">
            <div className="logo-icon">
              <i className="fas fa-building" />
            </div>
            <span className="company-name">Outsource Global</span>
          </div>
          <h1 className="title">
            Engineering Projects <span>Quarterly Business Review (QBR)</span>
          </h1>
          <p className="subtitle">Software Development Progress, Milestones, and Strategic Outlook</p>
        </div>

        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-user-tie" />
            </div>
            <div className="info-content">
              <span className="info-label">Presenter</span>
              <span className="info-value">Project Manager, Software Development</span>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-chart-line" />
            </div>
            <div className="info-content">
              <span className="info-label">Review Period</span>
              <span className="info-value">Q1 2026</span>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-check-circle" />
            </div>
            <div className="info-content">
              <span className="info-label">Status</span>
              <span className="info-value">On Track</span>
            </div>
          </div>
        </div>
      </div>

      <div className="status-indicator">
        <div className="status-dot" />
        <span className="status-text">All systems operational</span>
      </div>
      <div className="bottom-bar" />
    </div>
  );
}

function SlideTwo() {
  return (
    <div className="slide-container slide-2">
      <div className="header">
        <div className="header-left">
          <div className="header-icon">
            <i className="fas fa-project-diagram" />
          </div>
          <div className="header-text">
            <div className="header-title">Portfolio Overview</div>
            <div className="header-subtitle">Strategic Projects &amp; Digital Transformation</div>
          </div>
        </div>
        <div className="header-right">
          <div className="status-badge">
            <div className="status-dot" />
            <span className="status-text">All Systems Operational</span>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <div className="summary-header">
          <div className="summary-icon">
            <i className="fas fa-chart-line" />
          </div>
          <div className="summary-title">Executive Summary</div>
        </div>
        <div className="summary-text">
          Driving digital transformation across <span className="highlight">three strategic pillars</span>: Internal
          Operations (ERP), Social Impact (Impactify), and Public Sector Automation (POSSAP). Our portfolio focuses on
          enhancing organizational efficiency, empowering African youth, and modernizing public sector services.
        </div>
        <div className="summary-chart-inline">
          <div className="bar-row">
            <div className="bar-label-line">
              <span>ERP</span>
              <strong>95%</strong>
            </div>
            <div className="bar-track">
              <div className="bar-fill blue" style={{ width: "95%" }} />
            </div>
          </div>
          <div className="bar-row">
            <div className="bar-label-line">
              <span>Impactify</span>
              <strong>100%</strong>
            </div>
            <div className="bar-track">
              <div className="bar-fill green" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="bar-row">
            <div className="bar-label-line">
              <span>POSSAP</span>
              <strong>100%</strong>
            </div>
            <div className="bar-track">
              <div className="bar-fill amber" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="pillars-section">
        <div className="pillar-card">
          <div className="pillar-header">
            <div className="pillar-icon erp-icon">
              <i className="fas fa-cogs" />
            </div>
            <div>
              <div className="pillar-title">ERP System</div>
              <div className="pillar-subtitle">Internal Operations</div>
            </div>
          </div>
          <div className="pillar-content">
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">Payroll automation with tax configurations (100%)</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">Salary deduction upgrades (100%)</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">Workforce management system (50%)</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill erp-progress" />
            </div>
            <div className="progress-label">
              <span>95% Complete</span>
              <span>On Track</span>
            </div>
          </div>
        </div>

        <div className="pillar-card">
          <div className="pillar-header">
            <div className="pillar-icon impact-icon">
              <i className="fas fa-users" />
            </div>
            <div>
              <div className="pillar-title">Impactify</div>
              <div className="pillar-subtitle">Social Impact</div>
            </div>
          </div>
          <div className="pillar-content">
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">Multi-tenant LMS with gamification</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">Leadership development platform</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">Community engagement features</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill impact-progress" />
            </div>
            <div className="progress-label">
              <span>100% Complete</span>
              <span>Operational</span>
            </div>
          </div>
        </div>

        <div className="pillar-card">
          <div className="pillar-header">
            <div className="pillar-icon possap-icon">
              <i className="fas fa-shield-alt" />
            </div>
            <div>
              <div className="pillar-title">POSSAP</div>
              <div className="pillar-subtitle">Public Sector</div>
            </div>
          </div>
          <div className="pillar-content">
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">Biometric integration (100%)</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">Portal modernization complete</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle feature-check" />
              <span className="feature-text">AWS-backed security features</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill possap-progress" />
            </div>
            <div className="progress-label">
              <span>100% Complete</span>
              <span>Delivered</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-text">Outsource Global | Engineering Projects QBR</div>
        <div className="footer-stats">
          <div className="stat-item">
            <span className="stat-value">3</span>
            <span className="stat-label">Active Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">98%</span>
            <span className="stat-label">Avg. Completion</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Q1 2026</span>
            <span className="stat-label">Review Period</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideThree() {
  return (
    <div className="slide-container slide-3">
      <div className="header">
        <div className="header-left">
          <div className="header-icon">
            <i className="fas fa-graduation-cap" />
          </div>
          <div className="header-text">
            <div className="header-title">ImpactifyU Platform</div>
            <div className="header-subtitle">The Ecosystem - Connecting Global Businesses with Africa&apos;s Workforce</div>
          </div>
        </div>
        <div className="header-right">
          <div className="status-badge">
            <div className="status-dot" />
            <span className="status-text">100% Operational</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="strategic-goal">
          <div className="goal-icon">
            <i className="fas fa-bullseye" />
          </div>
          <div className="goal-content">
            <div className="goal-title">Strategic Goal</div>
            <div className="goal-text">
              Connect global businesses with Africa&apos;s workforce through a <span className="highlight">gamified,
              multi-tenant LMS</span> that enables scalable workforce development, leadership training, and community
              engagement.
            </div>
          </div>
        </div>

        <div className="two-column">
          <div className="left-column">
            <div className="pillars-header">
              <i className="fas fa-cube deck-blue-icon" />
              <div className="pillars-title">Core Pillars Developed</div>
            </div>
            <div className="pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon lms">
                  <i className="fas fa-book-reader" />
                </div>
                <div className="pillar-info">
                  <div className="pillar-name">LMS &amp; Resource Center</div>
                  <div className="pillar-desc">Course authoring, progress tracking, podcasts, videos, and articles.</div>
                </div>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon leadership">
                  <i className="fas fa-chess-king" />
                </div>
                <div className="pillar-info">
                  <div className="pillar-name">Leadership Development</div>
                  <div className="pillar-desc">Daily quizzes, work scenarios, and Leadership Voice platform.</div>
                </div>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon community">
                  <i className="fas fa-users" />
                </div>
                <div className="pillar-info">
                  <div className="pillar-name">Community Engagement</div>
                  <div className="pillar-desc">Real-time discussions (WebSockets) and gamification.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="tech-header">
              <i className="fas fa-code deck-blue-icon" />
              <div className="tech-title">Technical Excellence</div>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <div className="tech-item-header">
                  <div className="tech-item-icon arch">
                    <i className="fas fa-server" />
                  </div>
                  <div className="tech-item-name">Architecture</div>
                </div>
                <div className="tech-features">
                  <div className="tech-feature">
                    <i className="fas fa-check" />
                    <span>Multi-tenant BPO management</span>
                  </div>
                  <div className="tech-feature">
                    <i className="fas fa-check" />
                    <span>Redux state management</span>
                  </div>
                  <div className="tech-feature">
                    <i className="fas fa-check" />
                    <span>Cloud-based file handling</span>
                  </div>
                </div>
              </div>
              <div className="tech-item">
                <div className="tech-item-header">
                  <div className="tech-item-icon security">
                    <i className="fas fa-shield-alt" />
                  </div>
                  <div className="tech-item-name">Security</div>
                </div>
                <div className="tech-features">
                  <div className="tech-feature">
                    <i className="fas fa-check" />
                    <span>MFA implementation</span>
                  </div>
                  <div className="tech-feature">
                    <i className="fas fa-check" />
                    <span>Granular RBAC</span>
                  </div>
                  <div className="tech-feature">
                    <i className="fas fa-check" />
                    <span>Role-based access control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-left">
          <div className="footer-text">Outsource Global | Engineering Projects QBR</div>
        </div>
        <div className="footer-right">
          <div className="footer-stat">
            <div className="footer-stat-value">100%</div>
            <div className="footer-stat-label">System Uptime</div>
          </div>
          <div className="footer-stat">
            <div className="footer-stat-value">3</div>
            <div className="footer-stat-label">Active Modules</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GenericSlide({
  title,
  subtitle,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  chart,
}: {
  title: string;
  subtitle: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  chart?: React.ReactNode;
}) {
  return (
    <div className="slide-container slide-generic">
      <div className="header">
        <div className="header-left">
          <div className="header-icon">
            <i className="fas fa-layer-group" />
          </div>
          <div className="header-text">
            <div className="header-title">{title}</div>
            <div className="header-subtitle">{subtitle}</div>
          </div>
        </div>
        <div className="header-right">
          <div className="status-badge">
            <div className="status-dot" />
            <span className="status-text">QBR Update</span>
          </div>
        </div>
      </div>

      <div className="main-content generic-main">
        <div className="generic-card">
          <h3>{leftTitle}</h3>
          <ul>
            {leftItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="generic-card">
          <h3>{rightTitle}</h3>
          <ul>
            {rightItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {chart ? <div className="chart-panel">{chart}</div> : null}
        </div>
      </div>

      <div className="footer">
        <div className="footer-text">Outsource Global | Engineering Projects QBR</div>
        <div className="footer-stats">
          <div className="stat-item">
            <span className="stat-value">Q1 2026</span>
            <span className="stat-label">Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniBarChart({
  items,
}: {
  items: { label: string; value: number; tone?: "blue" | "green" | "amber" }[];
}) {
  return (
    <div className="mini-bar-chart" aria-label="Progress chart">
      {items.map((item) => (
        <div className="bar-row" key={item.label}>
          <div className="bar-label-line">
            <span>{item.label}</span>
            <strong>{item.value}%</strong>
          </div>
          <div className="bar-track">
            <div className={`bar-fill ${item.tone ?? "blue"}`} style={{ width: `${item.value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DonutRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="donut-row">
      <div className="donut" style={{ ["--value" as string]: `${value}%` }} />
      <div className="donut-meta">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
    </div>
  );
}

function PieBreakdown() {
  return (
    <div className="pie-layout">
      <div className="pie-main" aria-label="POSSAP key deliverables">
        <div className="pie-hole">
          <strong>100%</strong>
          <span>Delivered</span>
        </div>
      </div>
      <div className="pie-legend">
        <div className="legend-item">
          <span className="legend-dot legend-blue" />
          <span>Citizen Services</span>
          <strong>40%</strong>
        </div>
        <div className="legend-item">
          <span className="legend-dot legend-green" />
          <span>Admin Workflows</span>
          <strong>35%</strong>
        </div>
        <div className="legend-item">
          <span className="legend-dot legend-amber" />
          <span>Biometric Security</span>
          <strong>25%</strong>
        </div>
      </div>
    </div>
  );
}

function SlideEight() {
  return (
    <div className="slide-container slide-generic">
      <div className="header">
        <div className="header-left">
          <div className="header-icon">
            <i className="fas fa-comments" />
          </div>
          <div className="header-text">
            <div className="header-title">Q&amp;A</div>
            <div className="header-subtitle">Innovating through automation, empowering through technology.</div>
          </div>
        </div>
      </div>
      <div className="main-content qa-center">
        <div className="qa-pill">Questions &amp; Answers</div>
        <div className="qa-contact">Contact: Your Name / Email</div>
      </div>
      <div className="footer">
        <div className="footer-text">Thank You</div>
      </div>
    </div>
  );
}

const slides = [
  SlideOne,
  SlideTwo,
  SlideThree,
  () => (
    <GenericSlide
      title="Project 2 - ERP System (Progress Report)"
      subtitle="Modernizing financial and human resource operations"
      leftTitle="Quarterly Achievements"
      leftItems={[
        "Payroll: Tax configurations (100%), salary deduction upgrades (100%), back-pay (90%).",
        "Recruitment: Candidate invitation and CV upload workflow (100%).",
        "Infrastructure: Migration to new ERP frontend and support protocols (100%).",
      ]}
      rightTitle="Ongoing Work"
      rightItems={["Workforce Management System at 50% completion.", "On track for next milestone delivery."]}
      chart={
        <MiniBarChart
          items={[
            { label: "Tax Configurations", value: 100, tone: "green" },
            { label: "Salary Deductions", value: 100, tone: "green" },
            { label: "Salary Back-pay", value: 90, tone: "blue" },
            { label: "Workforce Mgmt", value: 50, tone: "amber" },
          ]}
        />
      }
    />
  ),
  () => (
    <GenericSlide
      title="Project 3 - POSSAP (Biometric & Portal Modernization)"
      subtitle="Security and accessibility enhancements"
      leftTitle="Key Deliverables (100% Complete)"
      leftItems={[
        "Tint Permits (Individual & Fleet), Character Certificates, Police Extracts.",
        "Advanced admin approval workflows and comprehensive reporting.",
      ]}
      rightTitle="Technical Transformation"
      rightItems={[
        "Legacy desktop biometric app migrated to modern web app.",
        "AWS face liveness and real-time NIN comparison integrated.",
        "CCDB redesign and certificate generation UX refresh completed.",
      ]}
      chart={<PieBreakdown />}
    />
  ),
  () => (
    <GenericSlide
      title="Technical Progress Summary"
      subtitle="Cross-project completion status"
      leftTitle="Completion Snapshot"
      leftItems={[
        "POSSAP: 100% completion on core modernization and biometric integration.",
        "ERP: 95% average completion across Payroll and Recruitment.",
        "ImpactifyU: Core infrastructure and community features fully operational.",
      ]}
      rightTitle="Portfolio Health"
      rightItems={["Average completion: 98%", "Delivery status: On track", "Operational stability: High"]}
      chart={
        <div className="donut-grid donut-grid-lg">
          <DonutRow label="POSSAP" value={100} />
          <DonutRow label="ERP" value={95} />
          <DonutRow label="ImpactifyU" value={100} />
        </div>
      }
    />
  ),
  () => (
    <GenericSlide
      title="Strategic Roadmap & Next Steps"
      subtitle="Short-term focus (30-60 days)"
      leftTitle="Priority Actions"
      leftItems={[
        "Finalize remaining 10% of ERP salary back-pay logic.",
        "Accelerate Workforce Management System delivery (currently 50%).",
        "Scale ImpactifyU content library and facilitator assessment tools.",
      ]}
      rightTitle="Engineering Quality Goals"
      rightItems={[
        "Standardize AI-assisted coding practices across teams.",
        "Optimize cloud costs for POSSAP and Impactify infrastructures.",
      ]}
      chart={
        <MiniBarChart
          items={[
            { label: "ERP Back-pay Completion", value: 90, tone: "blue" },
            { label: "Workforce System", value: 50, tone: "amber" },
            { label: "Platform Stability", value: 100, tone: "green" },
          ]}
        />
      }
    />
  ),
  SlideEight,
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveSlide = slides[activeIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="deck-root">
      <div className="deck-stage">
        <ActiveSlide />
        <div className="deck-controls">
          <button type="button" onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)}>
            Previous
          </button>
          <button type="button" onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}>
            Next
          </button>
          <span className="deck-count">
            {activeIndex + 1}/{slides.length}
          </span>
        </div>
      </div>
    </main>
  );
}
