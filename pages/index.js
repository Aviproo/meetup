import MeetupList from "../components/meetups/MeetupList";

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
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}
export default HomePage;
