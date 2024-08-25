import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaTasks, FaUsers, FaUser, FaCalendarAlt, FaChartBar, FaClipboardList, FaBell, FaEnvelope, FaCogs } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Widget from "@/components/Widget";
import CourseProgress from "@/components/CourseProgress";
import UpcomingAssignments from "@/components/UpcomingAssignments";
import StudyGroupActivities from "@/components/StudyGroupActivities";
import PerformanceAnalytics from "@/components/PerformanceAnalytics";
import { CalendarDemo } from "@/components/Calendar";
import Notifications from "@/components/RecentNotifications";
import Messages from "@/components/MessageCenter";
import Settings from "@/components/Settings";
import UserDropdown from "@/components/UserDropdown";
import NotificationBell from "@/components/NotificationBell";
import MessageBell from "@/components/MessageBell";

// Navigation items
const navItems = [
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
    <div className="flex flex-col min-h-screen lg:flex-row bg-background text-primary">
      {/* Top Navigation (For Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-secondary lg:hidden flex justify-around shadow-md">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex flex-col items-center justify-center p-2"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Sidebar (Hidden on Mobile) */}
      <aside className="hidden lg:block lg:w-64 bg-secondary text-secondary-foreground p-4 lg:min-h-screen">
        <h2 className="text-xl font-bold mb-6 text-center">Student Dashboard</h2>
        <nav>
          <ul>
            {navItems.map((item) => (
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
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 bg-card shadow-md">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Search..."
              className="w-96 p-2 bg-background rounded-md focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <NotificationBell />
            <MessageBell />
            <div className="relative">
              <UserDropdown />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-background overflow-y-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 bg-card p-6 rounded-lg shadow-md"
          >
            <h1 className="text-2xl font-bold">Welcome Back, Student!</h1>
            <p className="text-muted-foreground">
              Here’s your personalized dashboard.
            </p>
          </motion.div>

          {/* Widgets */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </div>
  );
};

export default Dashboard;
