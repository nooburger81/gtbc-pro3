import { Link } from 'react-scroll';

export default function QuizBox() {
  return (
    <main>
      <div className='container'>
        <h1>Quiz App</h1>
        <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>
      </div>
    </main>
  );
}