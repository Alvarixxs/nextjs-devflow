import QuestionCard from "@/components/shared/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/shared/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg",
    },
    upvotes: 10,
    views: 10000000,
    answers: [{}, {}], // Assuming 2 answers as objects
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to handle promises in JavaScript?",
    tags: [
      { _id: "3", name: "javascript" },
      { _id: "4", name: "promises" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "https://example.com/janesmith.jpg",
    },
    upvotes: 25,
    views: 350,
    answers: [{}, {}, {}], // 3 answers
    createdAt: new Date("2023-02-14T08:30:00.000Z"),
  },
  {
    _id: "3",
    title: "What's new in React 18?",
    tags: [
      { _id: "5", name: "react" },
      { _id: "6", name: "javascript" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      picture: "https://example.com/alicejohnson.jpg",
    },
    upvotes: 15,
    views: 420,
    answers: [{}], // 1 answer
    createdAt: new Date("2022-11-25T15:45:00.000Z"),
  },
  {
    _id: "4",
    title: "Understanding Async/Await in Python",
    tags: [
      { _id: "1", name: "python" },
      { _id: "7", name: "async" },
    ],
    author: {
      _id: "4",
      name: "Bob Brown",
      picture: "https://example.com/bobbrown.jpg",
    },
    upvotes: 30,
    views: 550,
    answers: [{}, {}, {}, {}], // 4 answers
    createdAt: new Date("2023-05-10T10:20:00.000Z"),
  },
  {
    _id: "5",
    title: "What is Docker and how to use it?",
    tags: [
      { _id: "8", name: "docker" },
      { _id: "9", name: "containers" },
    ],
    author: {
      _id: "5",
      name: "Charlie Davis",
      picture: "https://example.com/charliedavis.jpg",
    },
    upvotes: 40,
    views: 700,
    answers: [{}, {}, {}], // 3 answers
    createdAt: new Date("2021-12-20T18:00:00.000Z"),
  },
  {
    _id: "6",
    title: "Introduction to Kubernetes",
    tags: [
      { _id: "10", name: "kubernetes" },
      { _id: "9", name: "containers" },
    ],
    author: {
      _id: "6",
      name: "Diana Evans",
      picture: "https://example.com/dianaevans.jpg",
    },
    upvotes: 50,
    views: 850,
    answers: [{}], // 1 answer
    createdAt: new Date("2024-01-05T09:10:00.000Z"),
  },
  {
    _id: "7",
    title: "How to deploy a Flask app to Heroku?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "11", name: "flask" },
      { _id: "12", name: "heroku" },
    ],
    author: {
      _id: "7",
      name: "Evan Ford",
      picture: "https://example.com/evanford.jpg",
    },
    upvotes: 20,
    views: 400,
    answers: [{}, {}, {}], // 3 answers
    createdAt: new Date("2022-07-18T14:00:00.000Z"),
  },
  {
    _id: "8",
    title: "Using Tailwind CSS with React",
    tags: [
      { _id: "5", name: "react" },
      { _id: "13", name: "tailwindcss" },
    ],
    author: {
      _id: "8",
      name: "Fiona Green",
      picture: "https://example.com/fionagreen.jpg",
    },
    upvotes: 35,
    views: 600,
    answers: [{}, {}], // 2 answers
    createdAt: new Date("2023-03-22T13:30:00.000Z"),
  },
  {
    _id: "9",
    title: "Best practices for RESTful API design",
    tags: [
      { _id: "14", name: "api" },
      { _id: "15", name: "rest" },
    ],
    author: {
      _id: "9",
      name: "George Harris",
      picture: "https://example.com/georgeharris.jpg",
    },
    upvotes: 45,
    views: 900,
    answers: [{}, {}, {}, {}], // 4 answers
    createdAt: new Date("2024-02-18T10:15:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
