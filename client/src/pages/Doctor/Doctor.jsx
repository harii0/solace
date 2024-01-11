import DoctorCard from "../../components/Doctors/DoctorCard";

const Doctors = () => {
  const doctorData = [
    {
      avatar: 'https://picsum.photos/300',
      name: 'Dr. John Smith',
      specialization: 'Psychiatrist',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      rating: 4.5,
    },
    {
      avatar: 'https://picsum.photos/300',
      name: 'Dr. Jane Doe',
      specialization: 'Cardiologist',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      rating: 4.8,
    },
    {
      avatar: 'https://picsum.photos/400',
      name: 'Dr. John Smith',
      specialization: 'Psychiatrist',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      rating: 4.5,
    },
  ];

  return (
    <div className="my-1 w-full h-screen">
      <div className="flex items-center bg-white rounded-md">
        <h3 className="text-lg font-medium my-2  px-4">Find Therapist</h3>
      </div>
      <div className="doctors py-3 flex flex-wrap gap-3">
        {doctorData.map((doctor, index) => (
          <DoctorCard key={index} psychiatrist={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
