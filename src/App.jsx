import React from "react";
import {
  NavigationProvider,
  useNavigation,
} from "./services/navigationContext";
import LoginPage from "./components/pages/Login/LoginPage";
import VotePage from "./components/pages/Vote/VotePage";
import AdminPage from "./components/pages/Admin/AdminPage";

const AppContent = () => {
  const { currentPage, userType } = useNavigation();

  return (
    <>
      {currentPage === "login" && <LoginPage />}
      {currentPage === "vote" && <VotePage />}
      {currentPage === "admin" && <AdminPage />}
    </>
  );
};

const App = () => (
  <NavigationProvider>
    <div className="App">
      <AppContent />
    </div>
  </NavigationProvider>
);

export default App;
