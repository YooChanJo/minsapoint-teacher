import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <Link href="/history" className="flex flex-row">
        <div className="bg-blue-500">Click Me</div>
        <div className="flex flex-col bg-purple-500">
          <h2>History</h2>
          <p>취하 및 기록</p>
        </div>
        <div className="bg-green-500">Arrow</div>
      </Link>
      <Link href="/reward-points" className="flex flex-row">
        <div className="bg-blue-500">Click Me</div>
        <div className="flex flex-col bg-purple-500">
          <h2>Reward Points</h2>
          <p>상점 추천</p>
        </div>
        <div className="bg-green-500">Arrow</div>
      </Link>
      <Link href="/accuse" className="flex flex-row">
        <div className="bg-blue-500">Click Me</div>
        <div className="flex flex-col bg-purple-500">
          <h2>Penalty Points</h2>
          <p>기소</p>
        </div>
        <div className="bg-green-500">Arrow</div>
      </Link>
    </div>
  );
}
