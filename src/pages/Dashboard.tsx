import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaTasks,
  FaUsers,
  FaUser,
  FaCalendarAlt,
  FaChartBar,
  FaClipboardList,
  FaBell,
  FaEnvelope,
  FaCogs,
} from "react-icons/fa";
import Widget from "../components/Widget";
import CourseProgress from "@/components/CourseProgress";
import UpcomingAssignments from "@/components/UpcomingAssignments";
import StudyGroupActivities from "@/components/StudyGroupActivities";
import PerformanceAnalytics from "@/components/PerformanceAnalytics";
import { CalendarDemo } from "@/components/Calendar";
import Notifications from "@/components/RecentNotifications";
import Messages from "@/components/MessageCenter";
import Settings from "@/components/Settings";

const sidebarItems = [
  { name: "Home", path: "/dashboard", icon: <FaHome /> },
  { name: "Courses", path: "/courses", icon: <FaBook /> },
  { name: "Assignments", path: "/assignments", icon: <FaTasks /> },
  { name: "Study Groups", path: "/group", icon: <FaUsers /> },
  { name: "Profile", path: "/profile", icon: <FaUser /> },
  { name: "Calendar", path: "/calendar", icon: <FaCalendarAlt /> },
  { name: "Analytics", path: "/analytics", icon: <FaChartBar /> },
  { name: "Tasks", path: "/tasks", icon: <FaClipboardList /> },
  { name: "Notifications", path: "/notifications", icon: <FaBell /> },
  { name: "Messages", path: "/messages", icon: <FaEnvelope /> },
  { name: "Settings", path: "/settings", icon: <FaCogs /> },
];

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-secondary-foreground min-h-screen p-4">
        <h2 className="text-xl font-bold mb-6 text-center">Student Dashboard</h2>
        <nav>
          <ul>
            {sidebarItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  to={item.path}
                  className="flex items-center p-2 rounded hover:bg-muted transition-colors group"
                >
                  <span className="mr-3 text-xl">{item.icon}</span>
                  <span className="text-lg font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-background">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 bg-card p-6 rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-bold">Welcome Back, Student!</h1>
          <p className="text-muted-foreground">Here’s your personalized dashboard.</p>
        </motion.div>

        {/* Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Widget title="Course Progress" content={<CourseProgress />} />
          <Widget title="Upcoming Assignments" content={<UpcomingAssignments />} />
          <Widget title="Study Group Activities" content={<StudyGroupActivities />} />
          <Widget title="Performance Analytics" content={<PerformanceAnalytics />} />
          <Widget title="Your Calendar" content={<CalendarDemo />} />
          <Widget title="Notifications" content={<Notifications />} />
          <Widget title="Messages" content={<Messages />} />
          <Widget title="Settings" content={<Settings />} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
