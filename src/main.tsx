export const MainFeed = () => {
  const posts = [
    {
      id: 1,
      user: "Amina Mbeki",
      avatar: "/placeholder.svg",
      content: "Excited to join the Susanka community!",
      time: "2h ago",
    },
    {
      id: 2,
      user: "Kwame Nkrumah",
      avatar: "/placeholder.svg",
      content: "Who’s attending the Tech Growth webinar this Friday?",
      time: "4h ago",
    },
  ];

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white border rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <img src={post.avatar} className="w-10 h-10 rounded-full" alt="avatar" />
            <div>
              <p className="font-semibold">{post.user}</p>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
};
