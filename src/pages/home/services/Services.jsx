import Service from "./Service";
import useServices from "../../../Hook/usrServices";

const Services = () => {
  const services = useServices();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/services")
  //     .then((data) => setService(data.data));
  // }, []);
  //   console.log(services);
  return (
    <div className="mt-10">
      <div className="text-center space-y-4">
        <h3 className="text-3xl text-orange-500 font-medium">Service</h3>
        <h1 className="text-5xl font-medium">Our Service Area</h1>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
