
import { Heart, MessageCircle } from "lucide-react";

const activities = [
  {
    type: "like",
    user: "Marie Ekindi",
    action: "liked your post",
    time: "5 minutes ago",
    icon: Heart,
    color: "text-red-500"
  },
  {
    type: "comment",
    user: "New comment",
    action: 'on "Traditional Medicine"',
    time: "12 minutes ago",
    icon: MessageCircle,
    color: "text-blue-500"
  }
];

export const RecentActivity = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors">
            <activity.icon className={`w-4 h-4 mt-1 ${activity.color}`} />
            <div>
              <p className="text-sm text-foreground">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
