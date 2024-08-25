import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext'; // Adjust path if needed
import Dashboard from './pages/Dashboard';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AssignmentDetailPage from './pages/AssignmentDetailPage';
import AssignmentsPage from './pages/AssignmentsPage';
import CreateStudyGroup from "./components/CreateStudyGroup";
import StudyGroupList from "./components/StudyGroupList";
import StudyGroupDetail from "./components/StudyGroupDetail";
import GroupChat from "./components/GroupChat";
import ProfilePage from './pages/ProfilePage';
import CreateGroupForm from './components/CreateGroupForm';
import JoinLeaveStudyGroup from './components/JoinLeaveStudyGroup';
import StudyGroupsPage from './pages/StudyGroupPage';
import { ThemeProvider } from "@/components/ThemeProvider"

function App() {
  return (    
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />                
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/assignments:assignmentId" element={<AssignmentDetailPage />} />
          <Route path="/create-study-group" element={<CreateStudyGroup />} />
          <Route path="/create" element={<CreateGroupForm />} />
          <Route path="/group" element={<StudyGroupList />} />
          <Route path="/groups" element={<StudyGroupsPage />} />
          <Route path="/groups/:id" element={<StudyGroupDetail />} />
          <Route path="/groups/:id" element={<JoinLeaveStudyGroup />} />
          <Route path="/groupchat/:groupId" element={<GroupChat />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>      
      </Router>
    </AuthProvider>
     </ThemeProvider>
  );
}

export default App;
