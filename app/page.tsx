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

function SlideCard({
  children,
  slideNum,
}: {
  children: React.ReactNode;
  slideNum: number;
}) {
  return (
    <div className="slide-container slide-pro">
      <span className="slide-num-badge">Slide {slideNum} / 8</span>
      {children}
    </div>
  );
}

function SHeader({
  icon,
  iconClass,
  title,
  subtitle,
  badge,
  badgeVariant = "green",
}: {
  icon: string;
  iconClass: string;
  title: string;
  subtitle: string;
  badge?: string;
  badgeVariant?: "green" | "amber";
}) {
  return (
    <div className="s-header">
      <div className="s-header-left">
        <div className={`s-header-icon ${iconClass}`}>
          <i className={icon} />
        </div>
        <div>
          <div className="s-header-title">{title}</div>
          <div className="s-header-sub">{subtitle}</div>
        </div>
      </div>
      {badge && (
        <div className={`s-badge ${badgeVariant === "amber" ? "s-badge-amber" : ""}`}>
          <div className="s-badge-dot" />
          <span className="s-badge-text">{badge}</span>
        </div>
      )}
    </div>
  );
}

function SFooter({
  stats,
}: {
  stats: { val: string; lbl: string; color?: string }[];
}) {
  return (
    <div className="s-footer">
      <div className="s-footer-brand">Outsource Global | Engineering Projects QBR</div>
      <div className="s-footer-stats">
        {stats.map((s) => (
          <div className="s-stat" key={s.lbl}>
            <span className="s-stat-val" style={s.color ? { color: s.color } : undefined}>
              {s.val}
            </span>
            <span className="s-stat-lbl">{s.lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarRow({
  label,
  value,
  tone = "blue",
}: {
  label: string;
  value: number;
  tone?: "blue" | "green" | "amber";
}) {
  return (
    <div className="s-bar-row">
      <div className="s-bar-meta">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="s-track">
        <div className={`s-fill s-fill-${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function CheckItem({ text, variant = "green" }: { text: React.ReactNode; variant?: "green" | "amber" }) {
  return (
    <div className="s-check-item">
      <div className={`s-check-dot s-check-dot-${variant}`}>
        <i className={variant === "amber" ? "fas fa-clock" : "fas fa-check"} />
      </div>
      <div className="s-check-text">{text}</div>
    </div>
  );
}

function SlideFour() {
  return (
    <SlideCard slideNum={4}>
      <SHeader
        icon="fas fa-cogs"
        iconClass="icon-blue"
        title="ERP System — Progress Report"
        subtitle="Modernizing financial and human resource operations"
        badge="95% Complete"
        badgeVariant="amber"
      />
      <div className="s-two-col">
        <div className="s-card">
          <div className="s-card-title">Q1 Achievements</div>
          <CheckItem text="Payroll tax configurations fully deployed — all edge cases resolved" />
          <CheckItem text="Salary deduction upgrade pipeline completed and tested" />
          <CheckItem text="Salary back-pay module at 90% — final validation in progress" />
          <CheckItem text="Candidate invitation & CV upload workflow delivered (100%)" />
          <CheckItem text="ERP frontend migration and support protocols finalized" />
        </div>
        <div className="s-card">
          <div className="s-card-title">Completion Tracker</div>
          <BarRow label="Tax Configurations" value={100} tone="green" />
          <BarRow label="Salary Deductions" value={100} tone="green" />
          <BarRow label="Salary Back-pay" value={90} tone="blue" />
          <BarRow label="Workforce Management" value={50} tone="amber" />
          <CheckItem
            text={
              <>
                Workforce Management System — <strong>50%</strong>, next milestone on track
              </>
            }
            variant="amber"
          />
        </div>
      </div>
      <SFooter stats={[{ val: "Q1 2026", lbl: "Review Period" }, { val: "95%", lbl: "Avg. Completion" }]} />
    </SlideCard>
  );
}

function SlideFive() {
  return (
    <SlideCard slideNum={5}>
      <SHeader
        icon="fas fa-shield-alt"
        iconClass="icon-amber"
        title="POSSAP — Biometric & Portal Modernization"
        subtitle="Security and accessibility enhancements for public sector"
        badge="100% Delivered"
        badgeVariant="green"
      />
      <div className="s-two-col">
        <div className="s-card">
          <div className="s-card-title">Key Deliverables</div>
          <CheckItem text="Tint Permits — Individual & Fleet portals fully operational" />
          <CheckItem text="Character Certificates and Police Extracts digitized" />
          <CheckItem text="Admin approval workflows with comprehensive reporting" />
          <CheckItem text="Legacy desktop biometric app migrated to modern web app" />
          <CheckItem text="AWS face liveness + real-time NIN comparison integrated" />
          <CheckItem text="CCDB redesign & certificate generation UX refresh" />
        </div>
        <div className="s-card s-card-centered">
          <div className="s-card-title" style={{ textAlign: "center" }}>
            Delivery Breakdown
          </div>
          <div className="s-donut-wrap">
            <div className="s-donut">
              <div className="s-donut-inner">
                <span className="s-donut-val">100%</span>
                <span className="s-donut-sub">Delivered</span>
              </div>
            </div>
            <div className="s-legend">
              {[
                { label: "Citizen Services", pct: "40%", color: "#3b82f6" },
                { label: "Admin Workflows", pct: "35%", color: "#22c55e" },
                { label: "Biometric Security", pct: "25%", color: "#f59e0b" },
              ].map((l) => (
                <div className="s-legend-item" key={l.label}>
                  <div className="s-legend-left">
                    <div className="s-legend-dot" style={{ background: l.color }} />
                    <span>{l.label}</span>
                  </div>
                  <strong>{l.pct}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SFooter
        stats={[
          { val: "Q1 2026", lbl: "Review Period" },
          { val: "Delivered", lbl: "Project Status", color: "#4ade80" },
        ]}
      />
    </SlideCard>
  );
}

function SlideSix() {
  return (
    <SlideCard slideNum={6}>
      <SHeader
        icon="fas fa-chart-bar"
        iconClass="icon-teal"
        title="Technical Progress Summary"
        subtitle="Cross-project completion and portfolio health"
        badge="Portfolio On Track"
        badgeVariant="green"
      />
      <div className="s6-body">
        <div className="s6-metrics">
          {[
            { val: "98%", lbl: "Average Completion" },
            { val: "3", lbl: "Active Projects" },
            { val: "High", lbl: "Operational Stability", color: "#4ade80" },
          ].map((m) => (
            <div className="s6-metric" key={m.lbl}>
              <div className="s6-metric-val" style={m.color ? { color: m.color, fontSize: "20px" } : undefined}>
                {m.val}
              </div>
              <div className="s6-metric-lbl">{m.lbl}</div>
            </div>
          ))}
        </div>
        <div className="s6-bars">
          <BarRow label="POSSAP" value={100} tone="green" />
          <BarRow label="ImpactifyU" value={100} tone="green" />
          <BarRow label="ERP Payroll" value={97} tone="blue" />
          <BarRow label="ERP Recruitment" value={100} tone="blue" />
          <BarRow label="Workforce Mgmt" value={50} tone="amber" />
        </div>
      </div>
      <SFooter stats={[{ val: "Q1 2026", lbl: "Review Period" }, { val: "On Track", lbl: "Delivery Status" }]} />
    </SlideCard>
  );
}

function SlideSeven() {
  return (
    <SlideCard slideNum={7}>
      <SHeader
        icon="fas fa-road"
        iconClass="icon-purple"
        title="Strategic Roadmap & Next Steps"
        subtitle="Short-term focus — 30 to 60 day priorities"
        badge="Action Required"
        badgeVariant="amber"
      />
      <div className="s-two-col">
        <div>
          <div className="s7-col-title">
            <i className="fas fa-bullseye" /> Priority Actions
          </div>
          {[
            {
              n: "1",
              text: (
                <>
                  Complete remaining <strong>10%</strong> of ERP salary back-pay logic and run final regression tests
                </>
              ),
              amber: false,
            },
            {
              n: "2",
              text: (
                <>
                  Accelerate <strong>Workforce Management System</strong> from 50% — targeting 80% by end of next sprint
                </>
              ),
              amber: true,
            },
            {
              n: "3",
              text: (
                <>
                  Scale <strong>ImpactifyU</strong> content library and roll out facilitator assessment tooling
                </>
              ),
              amber: false,
            },
          ].map((item) => (
            <div className="s7-item" key={item.n}>
              <div className={`s7-num ${item.amber ? "s7-num-amber" : ""}`}>{item.n}</div>
              <div className="s-check-text">{item.text}</div>
            </div>
          ))}
          <div style={{ marginTop: "16px" }}>
            <BarRow label="ERP Back-pay" value={90} tone="blue" />
            <BarRow label="Workforce System" value={50} tone="amber" />
            <BarRow label="Platform Stability" value={100} tone="green" />
          </div>
        </div>
        <div>
          <div className="s7-col-title">
            <i className="fas fa-wrench" /> Engineering Quality Goals
          </div>
          {[
            <>
              Standardize <strong>AI-assisted coding practices</strong> (Claude Code & Copilot) across all development teams
            </>,
            <>
              Optimize cloud infrastructure costs for <strong>POSSAP</strong> and <strong>Impactify</strong> production
              environments
            </>,
            <>Implement unified observability stack — logging, tracing, and alerting baseline</>,
            <>Establish team-wide code review cadence aligned with new AI tooling guidelines</>,
          ].map((text, i) => (
            <div className="s7-item" key={i}>
              <div className="s7-num">{i + 1}</div>
              <div className="s-check-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <SFooter stats={[{ val: "30–60d", lbl: "Planning Horizon" }, { val: "Q2 2026", lbl: "Target Quarter" }]} />
    </SlideCard>
  );
}

function SlideEight() {
  return (
    <SlideCard slideNum={8}>
      <SHeader
        icon="fas fa-comments"
        iconClass="icon-blue"
        title="Questions & Answers"
        subtitle="Engineering Projects QBR — Q1 2026"
      />
      <div className="s8-body">
        <div className="s8-icon">
          <i className="fas fa-lightbulb" />
        </div>
        <div className="s8-title">Q&amp;A</div>
        <div className="s8-tagline">
          Innovating through automation, empowering through technology. We&apos;d love to hear your questions.
        </div>
        <div className="s8-divider">
          <div className="s8-line" />
          <div className="s8-div-text">CONTACT</div>
          <div className="s8-line" />
        </div>
        <div className="s8-contact">
          <strong>Project Manager, Software Development</strong> &nbsp;·&nbsp; abubakar.abdulwahab@outsourceglobal.com
        </div>
      </div>
      <div className="s-footer">
        <div className="s-footer-brand">Outsource Global | Engineering Projects QBR — Q1 2026</div>
        <div className="s-footer-stats">
          <div className="s-stat">
            <span className="s-stat-val" style={{ color: "#4ade80" }}>
              Thank You
            </span>
            <span className="s-stat-lbl">Outsource Global</span>
          </div>
        </div>
      </div>
    </SlideCard>
  );
}

const slides = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight];

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
