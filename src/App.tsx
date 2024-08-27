import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AssignmentDetailPage from './pages/AssignmentDetailPage';
import AssignmentsPage from './pages/AssignmentsPage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from "@/components/ThemeProvider";
import PrivateRoute from './components/PrivateRoute';
import StudyGroupList from './components/StudyGroupList';
import CreateStudyGroup from './components/CreateStudyGroup';
import UpdateStudyGroup from './components/UpdateStudyGroup';
import DeleteStudyGroup from './components/DeleteStudyGroup';

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
            <Route element={<PrivateRoute isProtected={true} />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/assignments" element={<AssignmentsPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:courseId" element={<CourseDetailPage />} />
              <Route path="/assignments/:assignmentId" element={<AssignmentDetailPage />} />
              <Route path="/create" element={<CreateStudyGroup />} />
              <Route path="/study-groups" element={<StudyGroupList />} /> 
              <Route path="/update/:id" component={UpdateStudyGroup} />
              <Route path="/delete/:id" component={DeleteStudyGroup} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>      
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;