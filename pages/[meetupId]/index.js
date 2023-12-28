import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetUpDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/e/e3/Allegheny_Monongahela_Ohio.jpg"
      title="First Meetup"
      address="Some stree 5, some city"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Allegheny_Monongahela_Ohio.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some stree 5, some city",
        escription: "This is a first meetup",
      },
    },
  };
}
export default MeetUpDetails;
