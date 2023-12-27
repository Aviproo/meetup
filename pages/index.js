import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A first Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Allegheny_Monongahela_Ohio.jpg",
      address: "Some address 5, sre zone ",
      description: "This is a first meetup",
    },
    {
      id: "m2",
      title: "second Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Allegheny_Monongahela_Ohio.jpg",
      address: "Some 2nd address 5, pro zone ",
      description: "This is second meetup",
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
