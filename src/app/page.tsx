"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";

export default function Home() {
  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="container">
        <Block
          tag="div"
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h1
            className="margin-bottom-24px"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              background: "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Welcome to Webflow Cloud
          </h1>
          <Block tag="p" className="margin-bottom-24px">
            This is a simple test using Basic components with enhanced styling.
          </Block>  
          
          {/* 2-Column Layout for Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            {/* Primary Button Column */}
            <div>
              <Link
                button={true}
                options={{
                  href: "#",
                }}
                className="button-primary"
                style={{
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Primary Action
              </Link>
            </div>
            
            {/* Secondary Button Column */}
            <div>
              <Link
                button={true}
                options={{
                  href: "#",
                }}
                className="button-secondary"
                style={{
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "transparent",
                  color: "#3245ff",
                  border: "2px solid #3245ff",
                }}
              >
                Secondary Action
              </Link>
            </div>
          </div>
        </Block>
      </Block>
    </Section>
  );
}