import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Men from "./components/Men";
import Women from "./components/Women";
import Stationary from "./components/Stationary";
import ContactPage from "./components/Contact";

const clerkPubKey = "pk_test_bWFpbi1zYWlsZmlzaC00NC5jbGVyay5hY2NvdW50cy5kZXYk"; // Replace with your actual Clerk frontend API key

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <Container>
                <Intro />
                <Women />
                <Men />
                <Stationary />
                <ContactPage />
              </Container>
            }
          />

          {/* Protected Routes (Only for Signed-in Users) */}
          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <Container>
                    <h1>Welcome to your Dashboard</h1>
                  </Container>
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;
