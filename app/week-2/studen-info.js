import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Henilkumar Patel</p>
      <Link href="https://github.com/Henil-Patel12?tab=repositories">GitHub Repository Link</Link>
    </div>
  );
};