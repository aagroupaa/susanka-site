
const onlineUsers = [
  { name: "Fatima Nguema", status: "Active 2m ago", initials: "FN", color: "bg-green-500" },
  { name: "Samuel Biya", status: "Active now", initials: "SB", color: "bg-purple-500" },
];

export const OnlineUsers = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-4">Online Now</h3>
      <div className="space-y-3">
        {onlineUsers.map((user, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="relative">
              <div className={`w-8 h-8 ${user.color} rounded-full flex items-center justify-center`}>
                <span className="text-white font-medium text-xs">{user.initials}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
