import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoggedInNav } from '../components/LoggedInNav';
import { Trophy, User } from 'lucide-react'; // Imported the User icon

interface LeaderboardEntry {
  rank: number;
  username: string;
  weekly_avg_score: number;
  avatar: string; 
}

const LeaderboardPage: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      if (!token) return;
      try {
        // Using mock data to provide a more complete view
        //const mockLeaderboardData: LeaderboardEntry[] = [
         // { rank: 1, username: 'Yeshwanthv45', weekly_avg_score: 95, avatar: 'https://i.pravatar.cc/150?u=yeshwanth' },
         // { rank: 2, username: 'JaneDoe', weekly_avg_score: 88, avatar: 'https://i.pravatar.cc/150?u=janedoe' },
         // { rank: 3, username: 'JohnSmith', weekly_avg_score: 82, avatar: 'https://i.pravatar.cc/150?u=johnsmith' },
         // { rank: 4, username: 'AlexJohnson', weekly_avg_score: 76, avatar: 'https://i.pravatar.cc/150?u=alexjohnson' },
         // { rank: 5, username: 'EmilyWhite', weekly_avg_score: 72, avatar: 'https://i.pravatar.cc/150?u=emilywhite' },
         // { rank: 6, username: 'MarkDavis', weekly_avg_score: 69, avatar: 'https://i.pravatar.cc/150?u=markdavis' },
         // { rank: 7, username: 'SarahLee', weekly_avg_score: 65, avatar: 'https://i.pravatar.cc/150?u=sarahlee' },
         // { rank: 8, username: 'DavidChen', weekly_avg_score: 61, avatar: 'https://i.pravatar.cc/150?u=davidchen' },
        //];
        //setLeaderboard(mockLeaderboardData);

         //Original fetch logic, kept for reference but commented out
         const response = await fetch('http://127.0.0.1:8000/leaderboard/', {
           headers: { 'Authorization': `Bearer ${token}` }
         });
         if (!response.ok) {
           throw new Error('Failed to fetch leaderboard data.');
         }
         const data: LeaderboardEntry[] = await response.json();
         setLeaderboard(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchLeaderboard();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const getTrophyColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-yellow-700";
    return "text-gray-300";
  };
  
  const topThree = leaderboard.slice(0, 3);
  const top1 = topThree[0];
  const top2 = topThree[1];
  const top3 = topThree[2];

  return (
    <div className="min-h-screen w-full bg-white font-sans text-black">
      <LoggedInNav handleLogout={handleLogout} />
      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Weekly Leaderboard</h1>
          <p className="text-base text-gray-600 mt-2">See who's making the biggest impact this week!</p>
        </div>

        {/* Top 3 Leaderboard Cards with new layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[1fr] gap-6 mb-12 items-end">
          {top2 && (
             <Card 
               key={top2.rank} 
               className="p-6 text-center border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:order-1"
             >
              <div className="flex justify-center mb-4">
                <Trophy className={`w-10 h-10 ${getTrophyColor(top2.rank)}`} />
              </div>
              <p className="text-lg mb-1">{top2.username}</p>
              <p className="text-base text-gray-700">Rank {top2.rank}</p>
              <p className="text-3xl mt-2">{top2.weekly_avg_score}</p>
              <p className="text-sm text-gray-500">Weekly Score</p>
            </Card>
          )}
          {top1 && (
            <Card 
              key={top1.rank} 
              className="p-8 text-center border-2 border-black rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:order-2 md:row-span-1"
            >
              <div className="flex justify-center mb-4">
                <Trophy className={`w-16 h-16 ${getTrophyColor(top1.rank)}`} />
              </div>
              <p className="text-3xl mb-1">{top1.username}</p>
              <p className="text-xl text-gray-700">Rank {top1.rank}</p>
              <p className="text-5xl mt-4">{top1.weekly_avg_score}</p>
              <p className="text-sm text-gray-500">Weekly Score</p>
            </Card>
          )}
           {top3 && (
            <Card 
               key={top3.rank} 
               className="p-6 text-center border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:order-3"
             >
              <div className="flex justify-center mb-4">
                <Trophy className={`w-10 h-10 ${getTrophyColor(top3.rank)}`} />
              </div>
              <p className="text-lg mb-1">{top3.username}</p>
              <p className="text-base text-gray-700">Rank {top3.rank}</p>
              <p className="text-3xl mt-2">{top3.weekly_avg_score}</p>
              <p className="text-sm text-gray-500">Weekly Score</p>
            </Card>
          )}
        </div>

        {/* Full Leaderboard Table */}
        <Card className="border border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">All Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50 transition-none">
                  <TableHead className="w-[100px] text-lg">Rank</TableHead>
                  <TableHead className="text-lg">User</TableHead>
                  <TableHead className="text-right text-lg">Weekly Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.length > 0 ? (
                  leaderboard.map((user) => (
                    <TableRow key={user.rank} className="group transition-all duration-200 hover:bg-gray-100">
                      <TableCell className="text-lg">
                        <div className="flex items-center gap-4">
                          <span className="w-6 text-center">{user.rank}</span>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-500" />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-base group-hover:text-black transition-colors">{user.username}</TableCell>
                      <TableCell className="text-right text-base group-hover:text-black transition-colors">{user.weekly_avg_score}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>
                      <div className="p-12 text-center">
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No entries yet!</h3>
                        <p className="text-gray-500">Be the first to log an entry and earn your spot on the leaderboard.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LeaderboardPage;