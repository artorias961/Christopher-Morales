import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session } = useSession();

  if (!session || session.user.role !== "ADMIN") {
    return <div>Access Denied</div>;
  }

  return <div>Welcome to the Admin Dashboard</div>;
}
